import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

export const resumePath = new URL("../public/Khalifeh_Basiri_Resume.pdf", import.meta.url);
const outputPath = new URL("../app/data/resume.ts", import.meta.url);
const headings = ["Education", "Work Experience", "Projects", "Technical Skills"];
const clean = (text) => text.replace(/\s+/g, " ").trim();
const comparable = (text) => text.replace(/[\s|]+/g, "");

function requireLayout(condition, message) {
  if (!condition) throw new Error(`Resume sync: ${message} Keep the current single-column PDF layout or update scripts/sync-resume.mjs for the new layout.`);
}

export async function extractLines(bytes) {
  const task = getDocument({ data: new Uint8Array(bytes) });
  try {
    const document = await task.promise;
    const lines = [];
    for (let number = 1; number <= document.numPages; number++) {
      const page = await document.getPage(number);
      const { items } = await page.getTextContent();
      const annotations = await page.getAnnotations();
      const rows = [];
      for (const item of items) {
        if (!item.str?.trim()) continue;
        const [x, y] = item.transform.slice(4);
        let row = rows.find((candidate) => Math.abs(candidate.y - y) < 1);
        if (!row) { row = { y, items: [] }; rows.push(row); }
        row.items.push({ text: item.str, x, y, width: item.width, height: item.height });
      }
      for (const row of rows.sort((a, b) => b.y - a.y)) {
        row.items.sort((a, b) => a.x - b.x);
        const cells = [];
        const links = [];
        let previous;
        for (const item of row.items) {
          const gap = previous ? item.x - previous.x - previous.width : 0;
          if (!previous || gap > Math.max(previous.height, item.height) * 1.5) cells.push("");
          const separator = previous && gap > 0.5 ? " " : "";
          cells[cells.length - 1] += separator + item.text;
          const annotation = annotations.find(({ url, rect }) => url && rect && item.x + item.width / 2 >= rect[0] && item.x + item.width / 2 <= rect[2] && item.y >= rect[1] && item.y <= rect[3]);
          if (annotation) {
            requireLayout(/^(https?:|mailto:|tel:)/i.test(annotation.url), "The PDF contains an unsupported link.");
            const last = links.at(-1);
            if (last?.href === annotation.url) last.label = clean(last.label + separator + item.text);
            else links.push({ label: item.text, href: annotation.url });
          }
          previous = item;
        }
        lines.push({ text: cells.map(clean).join(" "), cells: cells.map(clean), links, x: row.items[0].x });
      }
      page.cleanup();
    }
    requireLayout(lines.length > 3, "No usable resume text was found. Export a text-based PDF, not a scan.");
    return lines;
  } finally {
    await task.destroy();
  }
}

export function resumeText(resume) {
  return [
    resume.name, resume.location, resume.phone, resume.email,
    ...resume.profiles.map((profile) => profile.label),
    "Education", ...resume.education.flatMap((entry) => [entry.school, entry.location, entry.degree, entry.year]),
    "Work Experience", ...resume.experience.flatMap((employer) => [employer.company, employer.location, ...employer.positions.flatMap((position) => [position.role, position.period, ...position.highlights])]),
    "Projects", ...resume.projects.flatMap((project) => [project.name, project.technologies, ...project.links.map((link) => link.label), ...project.highlights]),
    "Technical Skills", ...resume.skills.flatMap((skill) => [skill.label + ":", skill.value]),
  ].join(" ");
}

// shortcut: supports this single-column section format; update the parser when changing the PDF layout.
export function parseResume(lines) {
  requireLayout(!lines.some((line) => line.text.includes("\uFFFD")), "Some PDF characters could not be decoded.");
  const indices = headings.map((heading) => lines.findIndex((line) => line.text === heading));
  requireLayout(indices[0] === 3 && indices.every((index, i) => index >= 0 && (!i || index > indices[i - 1])), "The resume header or section order has changed.");
  const contact = lines[1].text.split("|").map(clean);
  requireLayout(contact.length === 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact[2]), "Expected location, phone, and email in the contact row.");
  const resume = {
    name: lines[0].text,
    location: contact[0], phone: contact[1], email: contact[2],
    profiles: lines[2].links,
    education: [], experience: [], projects: [], skills: [],
  };
  const sections = indices.map((index, i) => lines.slice(index + 1, indices[i + 1] ?? lines.length));
  const margin = sections[0][0]?.x;
  requireLayout(Number.isFinite(margin), "Education is missing.");
  const pair = (line) => {
    requireLayout(line?.cells.length === 2, `Expected a left/right row near “${line?.text ?? "end of section"}”.`);
    return line.cells;
  };
  for (let i = 0; i < sections[0].length; i += 2) {
    const [school, location] = pair(sections[0][i]);
    const [degree, year] = pair(sections[0][i + 1]);
    resume.education.push({ school, location, degree, year });
  }
  for (const line of sections[1]) {
    const employer = resume.experience.at(-1);
    const position = employer?.positions.at(-1);
    if (/^[–•-]\s+/.test(line.text)) {
      requireLayout(position, "A work bullet has no job title.");
      position.highlights.push(line.text.replace(/^[–•-]\s+/, ""));
    } else if (line.cells.length === 2) {
      const [left, right] = pair(line);
      if (/\b(?:19|20)\d{2}\b|\b(?:Present|Current)\b/i.test(right)) {
        requireLayout(employer, "A job title has no employer.");
        employer.positions.push({ role: left, period: right, highlights: [] });
      } else {
        resume.experience.push({ company: left, location: right, href: line.links[0]?.href, positions: [] });
      }
    } else {
      requireLayout(position?.highlights.length && line.x > margin + 2, `Unrecognized work row: “${line.text}”.`);
      position.highlights[position.highlights.length - 1] += " " + line.text;
    }
  }
  for (const line of sections[2]) {
    const project = resume.projects.at(-1);
    if (/^[–•-]\s+/.test(line.text)) {
      requireLayout(project, "A project bullet has no project heading.");
      project.highlights.push(line.text.replace(/^[–•-]\s+/, ""));
    } else if (line.cells.length === 2 && line.cells[0].includes("|")) {
      const title = line.cells[0].split("|").map(clean);
      requireLayout(title.length === 2 && line.links.length > 0, `Unrecognized project heading: “${line.text}”.`);
      resume.projects.push({ name: title[0], technologies: title[1], links: line.links, highlights: [] });
    } else {
      requireLayout(project?.highlights.length && line.x > margin + 2, `Unrecognized project row: “${line.text}”.`);
      project.highlights[project.highlights.length - 1] += " " + line.text;
    }
  }
  for (const line of sections[3]) {
    requireLayout(line.x >= margin - 2, `Unrecognized skills row: “${line.text}”.`);
    const match = line.text.match(/^([^:]+):\s*(.+)$/);
    if (match) resume.skills.push({ label: match[1], value: match[2] });
    else {
      const skill = resume.skills.at(-1);
      requireLayout(skill, "A skills continuation has no label.");
      skill.value += " " + line.text;
    }
  }
  requireLayout(resume.profiles.length && resume.experience.length && resume.projects.length && resume.skills.length, "A required resume section is empty.");
  requireLayout(resume.experience.every((employer) => employer.positions.length && employer.positions.every((position) => position.highlights.length)) && resume.projects.every((project) => project.highlights.length), "A job or project has no bullets.");
  const originalText = lines.map((line) => line.text.replace(/^[–•-]\s+/, "")).join(" ");
  requireLayout(comparable(resumeText(resume)) === comparable(originalText), "The extracted content does not exactly match the generated resume; no output was written.");
  const renderedLinks = new Set([
    `mailto:${resume.email}`, ...resume.profiles.map((profile) => profile.href),
    ...resume.experience.map((employer) => employer.href),
    ...resume.projects.flatMap((project) => project.links.map((link) => link.href)),
  ]);
  requireLayout(lines.every((line) => line.links.every((link) => renderedLinks.has(link.href))), "A PDF link is outside the supported header, employer, or project rows.");
  return resume;
}

export async function syncResume() {
  const resume = parseResume(await extractLines(await readFile(resumePath)));
  const output = `// Generated from public/Khalifeh_Basiri_Resume.pdf. Run npm run resume:sync; do not edit.\nexport const resume = ${JSON.stringify(resume, null, 2)};\n`;
  const previous = await readFile(outputPath, "utf8").catch((error) => {
    if (error.code !== "ENOENT") throw error;
    return "";
  });
  if (previous !== output) await writeFile(outputPath, output, "utf8");
  console.log("Resume HTML data is synchronized with the original PDF.");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await syncResume().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
