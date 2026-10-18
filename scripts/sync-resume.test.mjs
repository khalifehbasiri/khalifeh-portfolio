import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { extractLines, parseResume, resumePath } from "./sync-resume.mjs";

function row(cells, x = 40, links = []) {
  return { text: cells.join(" "), cells, x, links };
}

function fixture() {
  return [
    row(["Sample Developer"]),
    row(["Ottawa, ON | (613) 555-0100 | developer@example.test"]),
    row(["example.test"], 40, [{ label: "example.test", href: "https://example.test/" }]),
    row(["Education"], 28),
    row(["Example University", "Ottawa, ON"]),
    row(["Bachelor of Computer Science, GPA: 3.5/4.0", "2026"]),
    row(["Work Experience"], 28),
    row(["Example Employer", "Remote"]),
    row(["Software Developer", "2024 – Present"]),
    row(["– Built a tool with"], 42),
    row(["validation and recovery."], 54),
    row(["– Reduced waiting time."], 42),
    row(["Projects"], 28),
    row(["Example Project | TypeScript, SQLite", "Product Site"], 40, [{ label: "Product Site", href: "https://project.example.test/" }]),
    row(["– Shipped a desktop app"], 42),
    row(["with resumable imports."], 54),
    row(["Technical Skills"], 28),
    row(["Languages: TypeScript, Python,"]),
    row(["SQL"]),
  ];
}

test("preserves wrapped text, punctuation, dates, and PDF links", () => {
  const resume = parseResume(fixture());
  assert.equal(resume.name, "Sample Developer");
  assert.equal(resume.education[0].degree, "Bachelor of Computer Science, GPA: 3.5/4.0");
  assert.deepEqual(resume.experience[0].positions[0], {
    role: "Software Developer",
    period: "2024 – Present",
    highlights: ["Built a tool with validation and recovery.", "Reduced waiting time."],
  });
  assert.deepEqual(resume.projects[0], {
    name: "Example Project",
    technologies: "TypeScript, SQLite",
    links: [{ label: "Product Site", href: "https://project.example.test/" }],
    highlights: ["Shipped a desktop app with resumable imports."],
  });
  assert.equal(resume.skills[0].value, "TypeScript, Python, SQL");
});

test("updates content and accepts additional education, employers, and projects", () => {
  const lines = fixture();
  lines[8] = row(["Senior Developer", "2025 – Present"]);
  lines[9] = row(["– Built the new version with"], 42);
  lines.splice(6, 0, row(["Another University", "Toronto, ON"]), row(["Master of Computer Science", "2028"]));
  lines.splice(lines.findIndex((line) => line.text === "Projects"), 0,
    row(["Another Employer", "Ottawa, ON"]), row(["Developer", "2023 – 2024"]), row(["– Delivered a release."], 42));
  lines.splice(lines.findIndex((line) => line.text === "Technical Skills"), 0,
    row(["Another Project | Python", "GitHub"], 40, [{ label: "GitHub", href: "https://github.com/example/project" }]), row(["– Added a project."], 42));
  const resume = parseResume(lines);
  assert.equal(resume.education.length, 2);
  assert.equal(resume.experience.length, 2);
  assert.equal(resume.projects.length, 2);
  assert.equal(resume.experience[0].positions[0].role, "Senior Developer");
  assert.equal(resume.experience[0].positions[0].highlights[0], "Built the new version with validation and recovery.");
});

test("rejects unsupported layouts and incomplete text rather than dropping it", () => {
  const reordered = fixture();
  reordered[3] = row(["Summary"], 28);
  assert.throws(() => parseResume(reordered), /section order/);
  const unknownSection = fixture();
  unknownSection.push(row(["Certifications"], 28));
  assert.throws(() => parseResume(unknownSection), /Unrecognized skills row/);
  const missingLink = fixture();
  missingLink[13].links[0].label = "Different label";
  assert.throws(() => parseResume(missingLink), /does not exactly match/);
  const undecodable = fixture();
  undecodable[9] = row(["– Built \uFFFD"], 42);
  assert.throws(() => parseResume(undecodable), /could not be decoded/);
  const inlineLink = fixture();
  inlineLink[9].links = [{ label: "tool", href: "https://example.test/new-link" }];
  assert.throws(() => parseResume(inlineLink), /outside the supported/);
});

test("extracts the actual PDF without changing the downloadable file", async () => {
  const bytes = await readFile(resumePath);
  const resume = parseResume(await extractLines(bytes));
  assert.ok(resume.name.length > 0);
  assert.ok(resume.education.length > 0);
  assert.ok(resume.experience.length > 0);
  assert.ok(resume.projects.length > 0);
  assert.ok(resume.skills.length > 0);
  assert.deepEqual(await readFile(resumePath), bytes);
});

test("rejects a file that is not a text PDF", async () => {
  await assert.rejects(extractLines(Buffer.from("This is not a PDF")));
});
