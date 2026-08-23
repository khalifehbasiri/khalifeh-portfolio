import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/portfolio";
import { getTechTagColors } from "../lib/tech-stack-colors";

function ProjectCard({
  project,
  eager = false,
}: {
  project: Project;
  eager?: boolean;
}) {
  return (
    <article
      className={`group flex w-[min(84vw,22rem)] shrink-0 snap-start flex-col overflow-hidden rounded-xl border bg-surface transition-colors hover:border-accent/40 sm:w-[22rem] ${
        project.featured ? "border-accent/30" : "border-border"
      }`}
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border/70 bg-surface-raised">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width: 640px) 352px, 84vw"
          className={`${project.imageFit === "contain" ? "object-contain p-5" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.03]`}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h4 className="text-lg font-medium text-foreground">
            {project.title}
          </h4>
          <span className="shrink-0 rounded-full bg-surface-raised px-2.5 py-0.5 font-mono text-xs text-muted">
            {project.category === "work" ? "Work" : "Personal"}
          </span>
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-md border px-2 py-1 font-mono text-xs ${getTechTagColors(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.length > 0 ? (
            project.links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                  {link.label}
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                  {link.label}
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ),
            )
          ) : project.note ? (
            <span className="text-sm text-muted">{project.note}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectRow({
  id,
  title,
  description,
  projects,
  eagerFirstImage = false,
}: {
  id: string;
  title: string;
  description: string;
  projects: Project[];
  eagerFirstImage?: boolean;
}) {
  return (
    <div aria-labelledby={id}>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h3 id={id} className="text-lg font-medium text-foreground">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted" aria-hidden>
          Scroll -&gt;
        </span>
      </div>

      <div className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:var(--border)_transparent] [scrollbar-width:thin]">
        <div className="flex w-max gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              eager={eagerFirstImage && index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const personalProjects = projects.filter(
    (project) => project.category === "personal",
  );
  const workProjects = projects.filter((project) => project.category === "work");

  return (
    <section
      id="projects"
      className="border-t border-border/60 bg-surface/40 py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-2 font-mono text-sm text-accent">Selected Work</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Production tools, contract work, and product-minded personal builds.
        </p>
        <div className="mt-10 space-y-12">
          <ProjectRow
            id="personal-projects"
            title="Personal Projects"
            description="Independent builds and experiments."
            projects={personalProjects}
            eagerFirstImage
          />
          <ProjectRow
            id="work-projects"
            title="Internal & Contract Work"
            description="Production tools and client work."
            projects={workProjects}
          />
        </div>
      </div>
    </section>
  );
}
