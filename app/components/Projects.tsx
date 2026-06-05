import type { Project } from "../data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group flex flex-col rounded-xl border bg-surface p-6 transition-colors hover:border-accent/40 ${
        project.featured ? "border-accent/30" : "border-border"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
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
            className="rounded-md bg-surface-raised px-2 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.links.length > 0 ? (
          project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))
        ) : project.note ? (
          <span className="text-sm text-muted">{project.note}</span>
        ) : null}
      </div>
    </article>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="border-t border-border/60 bg-surface/40 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-2 font-mono text-sm text-accent">Selected Work</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Production tools, contract work, and personal builds - curated from my
          resume and GitHub.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
