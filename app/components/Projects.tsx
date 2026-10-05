import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectLink } from "../data/portfolio";
import { getTechTagColors } from "../lib/tech-stack-colors";
import { ProjectImageGallery } from "./ProjectImageGallery";
import { ProjectStatus } from "./ProjectStatus";
import styles from "./project-card.module.css";

function ProjectAction({ link }: { link: ProjectLink }) {
  const content = (
    <>
      {link.label}
      <span aria-hidden="true">→</span>
    </>
  );
  const className = styles.projectLink;
  return link.href.startsWith("/") ? (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  ) : (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
}

function ProjectCard({
  project,
  eager = false,
}: {
  project: Project;
  eager?: boolean;
}) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {project.images && project.images.length > 1 ? (
          <ProjectImageGallery
            images={project.images}
            title={project.title}
            eager={eager}
          />
        ) : (
          <div className={styles.staticImage}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              loading={eager ? "eager" : "lazy"}
              sizes="(min-width: 640px) 316px, 84vw"
              className={
                project.imageFit === "contain"
                  ? "object-contain p-5"
                  : "object-cover"
              }
            />
          </div>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h4 className={styles.title}>{project.title}</h4>
          <ProjectStatus status={project.status} />
        </div>
        <div className={styles.context}>
          <span className={styles.role}>{project.role}</span>
          <span>
            {project.category === "work"
              ? project.note
                ? "Internal work"
                : "Contract work"
              : "Personal project"}
          </span>
        </div>
        <p className={styles.summary}>{project.summary}</p>
        <p className={styles.contribution}>
          <svg
            width="13"
            height="14"
            viewBox="0 0 16 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <circle cx="8" cy="5" r="3" />
            <path d="M2 17v-2a6 6 0 0 1 12 0v2" />
          </svg>
          <span>{project.contribution}</span>
        </p>
        <div className={styles.outcome}>
          <strong>{project.outcome.headline}</strong>
          <p>{project.outcome.detail}</p>
        </div>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-md border px-2 py-1 font-mono text-xs ${getTechTagColors(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {project.links.length ? (
            project.links.map((link) => (
              <ProjectAction key={link.href} link={link} />
            ))
          ) : (
            <span className={styles.privateNote}>{project.note}</span>
          )}
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
  const workProjects = projects.filter(
    (project) => project.category === "work",
  );

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
