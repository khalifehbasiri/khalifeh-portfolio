"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./case-study.module.css";

export function CaseStudyNav({
  chapters,
}: {
  chapters: { id: string; label: string }[];
}) {
  const [activeId, setActiveId] = useState(chapters[0].id);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const selected = list?.querySelector<HTMLElement>("[aria-current]");
    if (!list || !selected || list.scrollWidth <= list.clientWidth) return;
    const listBounds = list.getBoundingClientRect();
    const selectedBounds = selected.getBoundingClientRect();
    if (selectedBounds.left < listBounds.left) {
      list.scrollLeft += selectedBounds.left - listBounds.left - 8;
    } else if (selectedBounds.right > listBounds.right) {
      list.scrollLeft += selectedBounds.right - listBounds.right + 8;
    }
  }, [activeId]);

  useEffect(() => {
    const sections = chapters.map(({ id }) => document.getElementById(id));
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = chapters[0].id;
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= 180)
          current = chapters[index].id;
      });
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [chapters]);

  return (
    <aside className={styles.contents}>
      <nav aria-label="Case study chapters">
        <p className={styles.contentsLabel}>Inside the project</p>
        <ol ref={listRef}>
          {chapters.map((chapter, index) => (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={activeId === chapter.id ? "location" : undefined}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {chapter.label}
              </a>
            </li>
          ))}
        </ol>
        <a
          href="https://gallery-web-app-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contentsDemo}
        >
          Try the live app <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </aside>
  );
}
