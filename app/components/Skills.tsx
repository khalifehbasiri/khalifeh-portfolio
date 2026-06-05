import { skillGroups } from "../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-2 font-mono text-sm text-accent">Tech Stack</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Skills
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-sm font-medium text-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
