"use client";

import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import type { Project, ProjectLink, ProjectTopic } from "../data/portfolio";
import { getTechTagColors } from "../lib/tech-stack-colors";
import { ProjectImageGallery, projectImageSizes } from "./ProjectImageGallery";
import { ProjectStatus } from "./ProjectStatus";
import { TechnologyFilter } from "./TechnologyFilter";
import styles from "./project-card.module.css";

gsap.registerPlugin(Flip, ScrollTrigger);

const categories: { value: "featured" | "all" | ProjectTopic; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "all", label: "All projects" },
  { value: "teamwork", label: "Teamwork" },
  { value: "ai", label: "AI & ML" },
  { value: "real-users", label: "Real users" },
  { value: "personal-tools", label: "Personal tools" },
];

type Category = (typeof categories)[number]["value"];

const projectCategoryLabels = {
  personal: "Personal project",
  coursework: "Course project",
  "ai-skill": "AI skill",
};

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

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      {project.images?.length || project.image ? (
        <div className={styles.media} data-project-preview>
          {project.images?.length ? (
            <ProjectImageGallery images={project.images} title={project.title} />
          ) : project.image ? (
            <div className={styles.staticImage}>
              <Image
                src={project.image}
                alt={project.imageAlt ?? ""}
                fill
                sizes={projectImageSizes}
                className={
                  project.imageFit === "contain"
                    ? "object-contain p-5"
                    : "object-cover"
                }
              />
            </div>
          ) : null}
        </div>
      ) : null}
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          <ProjectStatus status={project.status} />
        </div>
        <div className={styles.context}>
          <span className={styles.role}>{project.role}</span>
          <span>
            {project.category === "work"
              ? project.note
                ? "Internal work"
                : "Contract work"
              : projectCategoryLabels[project.category]}
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
          {project.links.map((link) => (
            <ProjectAction key={link.href} link={link} />
          ))}
          {project.note ? (
            <span className={styles.privateNote}>{project.note}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<Category>("featured");
  const [technology, setTechnology] = useState("");
  const [scrollDirections, setScrollDirections] = useState({ left: false, right: false });
  const grid = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const technologyInput = useRef<HTMLInputElement>(null);
  const previousLayout = useRef<Flip.FlipState | null>(null);
  const animation = useRef<gsap.core.Timeline | null>(null);

  const technologies = [...new Set(projects.flatMap((project) => project.tags))]
    .sort((a, b) => a.localeCompare(b, "en"));
  const matchingIds = new Set(
    projects
      .filter((project) => {
        const matchesCategory =
          category === "all" ||
          (category === "featured" ? project.featured : project.topics?.includes(category));
        return matchesCategory && (!technology || project.tags.some((tag) => tag === technology));
      })
      .map((project) => project.id),
  );
  const horizontal = matchingIds.size > 1 && matchingIds.size < 6;
  const canScroll = horizontal && (scrollDirections.left || scrollDirections.right);

  const updateScrollDirections = useCallback((rail: HTMLDivElement) => {
    const left = rail.scrollLeft > 1;
    const right = rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 1;
    setScrollDirections((previous) =>
      previous.left === left && previous.right === right ? previous : { left, right },
    );
  }, []);

  function scrollProjects(direction: number) {
    const rail = viewport.current;
    const track = grid.current;
    const card = track?.querySelector<HTMLElement>(":scope > :not([inert])");
    if (!rail || !track || !card) return;

    rail.scrollBy({
      left: direction * (card.offsetWidth + parseFloat(getComputedStyle(track).columnGap)),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  function updateFilters(nextCategory: Category, nextTechnology: string) {
    if (nextCategory === category && nextTechnology === technology) return;
    if (grid.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      previousLayout.current = Flip.getState(Array.from(grid.current.children));
    } else {
      animation.current?.revert();
    }
    setCategory(nextCategory);
    setTechnology(nextTechnology);
  }

  useLayoutEffect(() => {
    const layout = previousLayout.current;
    previousLayout.current = null;
    const rail = horizontal ? viewport.current : null;
    if (rail) rail.scrollLeft = 0;

    if (layout) {
      animation.current = Flip.from(layout, {
        duration: 0.42,
        ease: "power2.inOut",
        scale: true,
        prune: true,
        absoluteOnLeave: true,
        onComplete: () => {
          if (rail) updateScrollDirections(rail);
        },
        onEnter: (cards) => gsap.from(cards, {
          opacity: 0,
          y: 12,
          duration: 0.28,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }),
        onLeave: (cards) => gsap.to(cards, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        }),
      });
    }

    ScrollTrigger.refresh();
  }, [category, technology, horizontal, updateScrollDirections]);

  useLayoutEffect(() => {
    const rail = viewport.current;
    if (!horizontal || !rail) return;

    const observer = new ResizeObserver(() => updateScrollDirections(rail));
    observer.observe(rail);
    return () => observer.disconnect();
  }, [category, technology, horizontal, updateScrollDirections]);

  useLayoutEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopAnimation = () => {
      if (motionPreference.matches) animation.current?.revert();
    };
    motionPreference.addEventListener("change", stopAnimation);
    return () => {
      motionPreference.removeEventListener("change", stopAnimation);
      animation.current?.revert();
    };
  }, []);

  return (
    <section id="projects" className={`${styles.section} py-20`}>
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Explore by the kind of work or the technologies behind it.
        </p>
        <div className={styles.filters}>
          <div className={styles.categories} role="group" aria-label="Project category">
            {categories.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={category === value}
                aria-controls="project-results"
                onClick={() => updateFilters(value, value === "featured" ? "" : technology)}
              >
                {label}
              </button>
            ))}
          </div>
          <TechnologyFilter
            inputRef={technologyInput}
            technologies={technologies}
            value={technology}
            onSelect={(value) => updateFilters(
              category === "featured" && value ? "all" : category,
              value,
            )}
          />
        </div>
        <div className={styles.resultsBar}>
          <p className={styles.count} role="status">
            {matchingIds.size} {matchingIds.size === 1 ? "project" : "projects"}
          </p>
          {canScroll ? (
            <div className={styles.scrollControls} role="group" aria-label="Scroll project results">
              <button
                type="button"
                aria-controls="project-results"
                aria-label="Scroll projects left"
                disabled={!scrollDirections.left}
                onClick={() => scrollProjects(-1)}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                aria-controls="project-results"
                aria-label="Scroll projects right"
                disabled={!scrollDirections.right}
                onClick={() => scrollProjects(1)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          ) : null}
        </div>
        <div
          ref={viewport}
          className={horizontal ? styles.scrollViewport : undefined}
          role={canScroll ? "region" : undefined}
          aria-label={canScroll ? "Project results" : undefined}
          tabIndex={horizontal ? (canScroll ? 0 : -1) : undefined}
          onScroll={horizontal ? (event) => updateScrollDirections(event.currentTarget) : undefined}
          onKeyDown={canScroll ? (event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            scrollProjects(event.key === "ArrowLeft" ? -1 : 1);
          } : undefined}
        >
          <div
            id="project-results"
            className={`${styles.results} ${horizontal ? styles.rail : styles.grid}`}
            ref={grid}
          >
            {projects.map((project) => (
              <div
                className={styles.gridItem}
                key={project.id}
                inert={!matchingIds.has(project.id)}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
        {matchingIds.size === 0 ? (
          <div className={styles.empty}>
            <p>No projects match this category and technology.</p>
            <button type="button" onClick={() => {
              technologyInput.current?.focus();
              updateFilters("all", "");
            }}>
              Clear filters
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
