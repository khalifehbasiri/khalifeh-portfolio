"use client";

import Image from "next/image";
import { useState } from "react";
import { skillGroups } from "../data/portfolio";
import { getTechTagColors } from "../lib/tech-stack-colors";
import styles from "./skills.module.css";

const symbols = {
  "symbol-ai": "M12 2v4m0 12v4M2 12h4m12 0h4M12 6a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6Z",
  "symbol-cloud": "M7 18h11a4 4 0 1 0-1-7.9A6 6 0 0 0 5.3 12 3 3 0 0 0 7 18Z",
  "symbol-code": "m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18",
  "symbol-database": "M5 6c0-4 14-4 14 0s-14 4-14 0Zm0 0v12c0 4 14 4 14 0V6M5 12c0 4 14 4 14 0",
  "symbol-image": "M3 4h18v16H3zM3 17l5-5 4 4 3-3 6 6M16 8h.01",
  "symbol-language": "M3 4h18v12H9l-6 4V4Zm4 5h10m-10 3h6",
  "symbol-map": "m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15",
  "symbol-search": "M16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-2 4 6 6",
  "symbol-shield": "M12 2 4 5v6c0 5.5 3.7 9 8 11 4.3-2 8-5.5 8-11V5l-8-3Zm-3 10 2 2 4-4",
  "symbol-window": "M3 4h18v16H3zM3 9h18",
  "symbol-workflow": "M3 3h6v6H3zM15 15h6v6h-6zM6 9v9h9m3-3V6H9",
} as const;

const darkLogos = new Set(["express", "flask", "github", "latex", "linux", "nextjs", "vercel"]);
type SkillIconName = (typeof skillGroups)[number]["skills"][number][1];

function SkillIcon({ icon }: { icon: SkillIconName }) {
  if (icon.startsWith("symbol-")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.symbol}>
        <path d={symbols[icon as keyof typeof symbols]} />
      </svg>
    );
  }

  const contrast = icon === "openai" ? "invert dark:invert-0" : darkLogos.has(icon) ? "dark:invert" : "";
  return (
    <Image
      src={`/images/skills/${icon.includes(".") ? icon : `${icon}.svg`}`}
      alt=""
      width={16}
      height={16}
      unoptimized
      className={`${styles.logo} ${contrast}`}
    />
  );
}

export function Skills() {
  const [query, setQuery] = useState("");
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const groups = skillGroups.map((group) => ({
    ...group,
    skills: group.skills.filter(([name]) => {
      const searchable = `${name} ${group.label}`.toLowerCase();
      return terms.every((term) => searchable.includes(term));
    }),
  })).filter((group) => group.skills.length > 0);
  const count = groups.reduce((total, group) => total + group.skills.length, 0);

  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className={styles.header}>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Skills</h2>
          <label className={styles.search}>
            <span className="sr-only">Search skills</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.symbol}>
              <path d={symbols["symbol-search"]} />
            </svg>
            <input
              type="search"
              placeholder="Search skills"
              aria-controls="skill-index"
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
          </label>
        </div>

        <p role="status" className="sr-only">
          {terms.length ? `${count} matching ${count === 1 ? "skill" : "skills"}` : ""}
        </p>
        <div id="skill-index" className={styles.index}>
          {groups.map(({ label, skills }) => (
            <div className={styles.row} key={label}>
              <h3>{label}</h3>
              <ul className={styles.badges} role="list">
                {skills.map(([name, icon]) => (
                  <li key={name} className={`${styles.badge} ${getTechTagColors(name)}`}>
                    <SkillIcon icon={icon} />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {count === 0 ? <p className={styles.empty}>No skills match your search.</p> : null}
        </div>
      </div>
    </section>
  );
}
