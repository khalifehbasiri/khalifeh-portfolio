import Image from "next/image";
import { workExperience, type WorkExperience } from "../data/portfolio";

function EmployerEntry({ experience }: { experience: WorkExperience }) {
  return (
    <div className="grid grid-cols-[84px_1fr] gap-5 sm:grid-cols-[144px_1fr] sm:gap-8">
      <div className="relative size-20 overflow-hidden rounded-xl border border-border bg-surface-raised sm:size-28">
        <Image
          src={experience.image}
          alt={experience.imageAlt}
          fill
          sizes="(min-width: 640px) 112px, 80px"
          className={experience.imageFit === "cover" ? "object-cover" : "object-contain"}
        />
      </div>
      <div>
        <h3 className="font-medium text-foreground">{experience.company}</h3>
        <p className="mt-0.5 text-xs text-muted">{experience.location}</p>
        <div className="mt-4 space-y-6">
          {experience.positions.map((position) => (
            <div key={position.role + position.period}>
              <h4 className="text-sm font-medium text-accent">{position.role}</h4>
              <p className="mt-0.5 font-mono text-xs text-muted">{position.period}</p>
              <ul className="mt-3 space-y-2">
                {position.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['->']"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>

        <div className="mt-10 space-y-10">
          {workExperience.map((item) => (
            <EmployerEntry key={item.company} experience={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
