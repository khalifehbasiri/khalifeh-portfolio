import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectLink } from "../data/portfolio";
import { getTechTagColors } from "../lib/tech-stack-colors";
import { ProjectImageGallery } from "./ProjectImageGallery";
import { ProjectStatus } from "./ProjectStatus";
import { ProjectCardRail } from "./ProjectCardRail";
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
  leadOnDesktop = false,
}: {
  project: Project;
  eager?: boolean;
  leadOnDesktop?: boolean;
}) {
  return (
    <article
      className={`${styles.card} ${leadOnDesktop ? styles.leadingCard : ""}`}
    >
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
        <p className={styles.summary}>
          {project.summaryHighlights?.length
            ? project.summary
                .split(
                  new RegExp(
                    `(${project.summaryHighlights.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
                    "g",
                  ),
                )
                .map((part, index) =>
                  project.summaryHighlights?.includes(part) ? (
                    <strong key={index}>{part}</strong>
                  ) : (
                    part
                  ),
                )
            : project.summary}
        </p>
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
  centerProjectId,
}: {
  id: string;
  title: string;
  description: string;
  projects: Project[];
  eagerFirstImage?: boolean;
  centerProjectId?: string;
}) {
  return (
    <div aria-labelledby={id}>
      <div className="mx-auto mb-4 flex max-w-5xl items-end justify-between gap-4 px-6">
        <div>
          <h3 id={id} className="text-lg font-medium text-foreground">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted" aria-hidden>
          Scroll &lt;-&gt;
        </span>
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:max-w-[1600px] lg:px-8">
        <ProjectCardRail
          labelId={id}
          initialIndex={
            centerProjectId
              ? Math.max(
                  0,
                  projects.findIndex(
                    (project) => project.id === centerProjectId,
                  ),
                )
              : Math.min(2, Math.floor(projects.length / 2))
          }
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              eager={eagerFirstImage && index === 0}
              leadOnDesktop={
                id === "personal-projects" &&
                project.id === "sign-language-translator"
              }
            />
          ))}
        </ProjectCardRail>
      </div>
    </div>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const featuredProjectOrder = [
    "job-tracker-ai",
    "zdash",
    "gallery-web-app",
    "sign-language-translator",
  ];
  const personalProjects = projects
    .filter((project) => project.category === "personal")
    .sort((a, b) => {
      const rank = (project: Project) => {
        const index = featuredProjectOrder.indexOf(project.id);
        return index === -1 ? featuredProjectOrder.length : index;
      };
      return rank(a) - rank(b);
    });
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
          Applied AI, computer vision, and the systems that make useful products
          reliable.
        </p>
      </div>
      <div className="mt-10 space-y-12">
        <ProjectRow
          id="personal-projects"
          title="Personal Projects"
          description="Independent builds and experiments."
          projects={personalProjects}
          eagerFirstImage
          centerProjectId="zdash"
        />
        <ProjectRow
          id="work-projects"
          title="Internal & Contract Work"
          description="Production tools and client work."
          projects={workProjects}
        />
      </div>
    </section>
  );
}
