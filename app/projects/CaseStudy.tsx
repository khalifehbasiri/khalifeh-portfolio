import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { ProjectStatus } from "../components/ProjectStatus";
import type { Project } from "../data/portfolio";
import { CaseStudyFocus } from "./CaseStudyFocus";
import styles from "./case-study.module.css";

export type CaseStudyStory = {
  discipline: string;
  origin?: string;
  introduction: string;
  preview: { src: string; alt: string; caption: string };
  problem: string;
  built: { title: string; body: string }[];
  decisions: { title: string; body: string }[];
  learned: string;
  evidence: string;
  nextSteps?: string;
  facts?: { label: string; value: string }[];
  details?: { title: string; content: ReactNode };
};

export function caseStudyMetadata(
  project: Project,
  story: CaseStudyStory,
): Metadata {
  const title = project.title + " Case Study | Khalifeh Basiri";
  const canonical = "/projects/" + project.id;
  return {
    title,
    description: story.introduction,
    alternates: { canonical },
    openGraph: {
      title,
      description: story.introduction,
      url: canonical,
      images: [{ url: story.preview.src, alt: story.preview.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: story.introduction,
      images: [story.preview.src],
    },
  };
}

function StoryList({ items }: { items: CaseStudyStory["built"] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.title}>
          <strong>{item.title}</strong> {item.body}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudy({
  project,
  story,
}: {
  project: Project;
  story: CaseStudyStory;
}) {
  const actions = project.links.filter((link) => link.label !== "Case Study");
  const images = project.images ?? [
    {
      src: project.image,
      alt: project.imageAlt,
      label: project.title,
      background: project.imageBackground,
    },
  ];
  const previewImage = images.find((image) => image.src === story.preview.src);
  const screenshots = images.filter((image) => image.src !== story.preview.src);
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#overview">
        Skip to case study
      </a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/">
            kbasiri<span>.</span>com
          </Link>
          <Link className={styles.link} href="/projects">
            <span aria-hidden="true">←</span> All projects
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="case-study-title">
          <div className={styles.titleRow}>
            <h1 id="case-study-title">{project.title}</h1>
            <ProjectStatus status={project.status} />
          </div>
          {story.origin ? (
            <p className={styles.introduction}>{story.origin}</p>
          ) : null}
          <p className={styles.introduction}>{story.introduction}</p>
          <div className={styles.actions}>
            {actions.map((action) => (
              <a
                key={action.href}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {action.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <figure className={styles.preview}>
            <div
              className={`${styles.imageFrame} ${previewImage?.background === "white" ? styles.lightFrame : ""}`}
            >
              <Image
                src={story.preview.src}
                alt={story.preview.alt}
                fill
                priority
                sizes="(min-width: 1024px) 976px, 100vw"
                className={styles.image}
              />
            </div>
            <figcaption>{story.preview.caption}</figcaption>
          </figure>
        </section>
        <div className={styles.readingLayout}>
          <div className={styles.story}>
            <section id="overview" className={styles.section}>
              <h2>The problem</h2>
              <p>{story.problem}</p>
            </section>
            <section id="built" className={styles.section}>
              <h2>What I built</h2>
              <StoryList items={story.built} />
            </section>
            <section id="decisions" className={styles.section}>
              <h2>Why I built it this way</h2>
              <StoryList items={story.decisions} />
            </section>
            <section id="learning" className={styles.section}>
              <h2>What I learned</h2>
              <p>{story.learned}</p>
            </section>
            <section id="evidence" className={styles.evidence}>
              <h2>Evidence & current limits</h2>
              <p>{story.evidence}</p>
            </section>
            {story.details && (
              <details className={styles.details}>
                <summary>{story.details.title}</summary>
                <div className={styles.detailContent}>
                  {story.details.content}
                </div>
              </details>
            )}
            {story.nextSteps ? (
              <section className={styles.evidence} aria-labelledby="next-steps-title">
                <h2 id="next-steps-title">What’s next</h2>
                <p>{story.nextSteps}</p>
              </section>
            ) : null}
            <Link className={styles.returnLink} href="/projects">
              <span aria-hidden="true">←</span> Back to projects
            </Link>
          </div>
          <aside className={styles.facts} aria-label="Project at a glance">
            <dl>
              <div>
                <dt>My role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>My contribution</dt>
                <dd>{project.contribution}</dd>
              </div>
              {project.note ? (
                <div>
                  <dt>Context</dt>
                  <dd>{project.note}</dd>
                </div>
              ) : null}
              {story.facts?.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
              <div>
                <dt>Engineering focus</dt>
                <dd>
                  <strong className={styles.outcome}>
                    {project.outcome.headline}
                  </strong>
                  <p className={styles.outcomeDetail}>
                    {project.outcome.detail}
                  </p>
                </dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd>
                  <CaseStudyFocus topics={project.tags} />
                </dd>
              </div>
            </dl>
          </aside>
        </div>
        {screenshots.length > 0 ? (
          <section className={styles.screenshots} aria-labelledby="screenshots-title">
            <h2 id="screenshots-title">More project screens</h2>
            <p>Explore the interface. Select an image to view it at full size.</p>
            <div className={styles.screenshotGrid}>
              {screenshots.map((image) => (
                <figure key={image.src}>
                  <a
                    className={`${styles.screenshotFrame} ${image.background === "white" ? styles.lightFrame : ""}`}
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${image.label} at full size (opens in a new tab)`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 476px, (min-width: 800px) 50vw, 100vw"
                      className={styles.image}
                    />
                  </a>
                  <figcaption>{image.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
