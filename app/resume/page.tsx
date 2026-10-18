import type { Metadata } from "next";
import Link from "next/link";
import { resume } from "../data/resume";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Resume - Khalifeh Basiri",
  description: "Read Khalifeh Basiri’s resume, including education, work experience, projects, and technical skills, or download the PDF.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume - Khalifeh Basiri",
    description: "Education, work experience, projects, and technical skills. Read online or download the PDF.",
    url: "/resume",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Khalifeh Basiri",
    description: "Education, work experience, projects, and technical skills. Read online or download the PDF.",
    images: ["/opengraph-image"],
  },
};

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className={styles.highlights}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function ResumePage() {
  const phoneDigits = resume.phone.replace(/\D/g, "");
  const phoneNumber = phoneDigits.length === 10 ? `+1${phoneDigits}` : `+${phoneDigits}`;
  return (
    <main className={styles.page}>
      <nav className={styles.toolbar} aria-label="Resume actions">
        <Link href="/" className={styles.backLink}>
          <span aria-hidden="true">← </span>Back to portfolio
        </Link>
        <a className={styles.download} href="/Khalifeh_Basiri_Resume.pdf" download="Khalifeh_Basiri_Resume.pdf">
          Download PDF<span aria-hidden="true"> ↓</span>
        </a>
      </nav>

      <article id="resume-document" aria-label="Khalifeh Basiri resume">
        <header className={styles.header}>
          <h1>{resume.name}</h1>
          <p className={styles.contact}>
            <span>{resume.location}</span><span aria-hidden="true"> | </span>
            <a href={`tel:${phoneNumber}`}>{resume.phone}</a><span aria-hidden="true"> | </span>
            <a href={`mailto:${resume.email}`}>{resume.email}</a>
          </p>
          <p className={styles.profiles}>
            {resume.profiles.map((profile, index) => (
              <span key={profile.href}>
                {index > 0 ? <span aria-hidden="true"> | </span> : null}
                <a href={profile.href}>{profile.label}</a>
              </span>
            ))}
          </p>
        </header>

        <section className={styles.section} aria-labelledby="resume-education">
          <h2 id="resume-education">Education</h2>
          {resume.education.map((entry) => (
            <div key={entry.school + entry.degree} className={styles.entry}>
              <div className={styles.row}>
                <h3>{entry.school}</h3>
                <span className={styles.secondary}>{entry.location}</span>
              </div>
              <div className={styles.row}>
                <p>{entry.degree}</p>
                <span className={styles.secondary}>{entry.year}</span>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section} aria-labelledby="resume-experience">
          <h2 id="resume-experience">Work Experience</h2>
          {resume.experience.map((employer) => (
            <div key={employer.company} className={styles.entry}>
              <div className={styles.row}>
                <h3>{employer.href ? <a href={employer.href}>{employer.company}</a> : employer.company}</h3>
                <span className={styles.secondary}>{employer.location}</span>
              </div>
              {employer.positions.map((position) => (
                <div key={position.role} className={styles.position}>
                  <div className={styles.row}>
                    <h4>{position.role}</h4>
                    <span className={styles.secondary}>{position.period}</span>
                  </div>
                  <Highlights items={position.highlights} />
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className={styles.section} aria-labelledby="resume-projects">
          <h2 id="resume-projects">Projects</h2>
          {resume.projects.map((project) => (
            <div key={project.name} className={styles.entry}>
              <h3>{project.name}</h3>
              <div className={styles.projectMeta}>
                <p>{project.technologies}</p>
                <p className={styles.projectLinks}>
                  {project.links.map((link, index) => (
                    <span key={link.href}>
                      {index > 0 ? <span aria-hidden="true"> | </span> : null}
                      <a href={link.href}>{link.label}</a>
                    </span>
                  ))}
                </p>
              </div>
              <Highlights items={project.highlights} />
            </div>
          ))}
        </section>

        <section className={styles.section} aria-labelledby="resume-skills">
          <h2 id="resume-skills">Technical Skills</h2>
          <dl className={styles.skills}>
            {resume.skills.map((skill) => (
              <div key={skill.label}>
                <dt>{skill.label}:</dt>{" "}<dd>{skill.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>
    </main>
  );
}
