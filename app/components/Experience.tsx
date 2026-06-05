import { education, workExperience } from "../data/portfolio";

function TimelineEntry({
  period,
  title,
  subtitle,
  location,
  highlights,
}: {
  period: string;
  title: string;
  subtitle: string;
  location: string;
  highlights: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
      <div>
        <p className="font-mono text-xs text-muted">{period}</p>
      </div>
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="mt-0.5 text-sm text-accent">{subtitle}</p>
        <p className="mt-0.5 text-xs text-muted">{location}</p>
        <ul className="mt-3 space-y-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['→']"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border/60 bg-surface/40 py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-2 font-mono text-sm text-accent">Background</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>

        <div className="mt-10 space-y-12">
          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted">
              Work
            </h3>
            <div className="space-y-10">
              {workExperience.map((item) => (
                <TimelineEntry
                  key={item.company + item.period}
                  period={item.period}
                  title={item.role}
                  subtitle={item.company}
                  location={item.location}
                  highlights={item.highlights}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted">
              Education
            </h3>
            <div className="space-y-10">
              {education.map((item) => (
                <TimelineEntry
                  key={item.school}
                  period={item.period}
                  title={item.degree}
                  subtitle={item.school}
                  location={item.location}
                  highlights={item.details}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
