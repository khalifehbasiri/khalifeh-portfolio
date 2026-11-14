import Image from "next/image";
import { education } from "../data/portfolio";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 id="education-heading" className="text-2xl font-semibold tracking-tight text-foreground">
          Education
        </h2>

        <div className="mt-10 space-y-10">
          {education.map((item) => (
            <div key={item.school} className="grid grid-cols-[84px_1fr] gap-5 sm:grid-cols-[144px_1fr] sm:gap-8">
              <div className="flex flex-col items-center sm:items-start">
                <div className="relative size-20 overflow-hidden rounded-xl border border-border bg-surface-raised sm:size-28">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 640px) 112px, 80px"
                    className={item.imageFit === "cover" ? "object-cover" : "object-contain"}
                  />
                </div>
                <p className="mt-3 text-center font-mono text-[11px] leading-relaxed text-muted sm:text-left sm:text-xs">
                  {item.period}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">{item.degree}</h3>
                <p className="mt-0.5 text-sm text-accent">{item.school}</p>
                <p className="mt-0.5 text-xs text-muted">{item.location}</p>
                <ul className="mt-3 space-y-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['->']"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
