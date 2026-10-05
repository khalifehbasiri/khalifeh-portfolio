"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { ProjectImage } from "../data/portfolio";
import styles from "./project-image-gallery.module.css";

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getPageVisible = () => document.visibilityState === "visible";
const serverReducedMotion = () => true;
const serverPageVisible = () => false;

export function ProjectImageGallery({
  images,
  title,
  eager = false,
}: {
  images: ProjectImage[];
  title: string;
  eager?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    getReducedMotion,
    serverReducedMotion,
  );
  const pageVisible = useSyncExternalStore(
    subscribeVisibility,
    getPageVisible,
    serverPageVisible,
  );
  const canRotate =
    !reducedMotion && visible && pageVisible && !hovered && !focused;
  const image = images[index];
  const upcoming = images[(index + 1) % images.length];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.4),
      { threshold: [0, 0.4] },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!canRotate || images.length < 2) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % images.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [canRotate, images.length]);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      className={styles.gallery}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div
        className={`${styles.viewport} ${image.background === "white" ? styles.light : styles.dark}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${images.length}: ${image.label}`}
      >
        <button
          type="button"
          className={styles.imageButton}
          onClick={() => setIndex((current) => (current + 1) % images.length)}
          aria-label={`${title}: ${image.label}, image ${index + 1} of ${images.length}. Show next image`}
          title="Click to view the next image"
        >
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            loading={eager ? "eager" : "lazy"}
            sizes="(min-width: 640px) 352px, 84vw"
            className={`${styles.image} ${image.fit === "contain" ? styles.contain : styles.cover}`}
          />
          {visible ? (
            <Image
              key={`next-${upcoming.src}`}
              src={upcoming.src}
              alt=""
              aria-hidden
              fill
              loading="eager"
              sizes="(min-width: 640px) 352px, 84vw"
              className={styles.preload}
            />
          ) : null}
          <span className={styles.counter} aria-hidden="true">
            {index + 1}
            <span>/</span>
            {images.length}
          </span>
        </button>
      </div>
    </div>
  );
}
