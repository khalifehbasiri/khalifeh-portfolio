"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent, Ref } from "react";
import styles from "./project-card.module.css";

const allTechnologies = "All technologies";

export function TechnologyFilter({
  technologies,
  value,
  onSelect,
  inputRef,
}: {
  technologies: string[];
  value: string;
  onSelect: (technology: string) => void;
  inputRef: Ref<HTMLInputElement>;
}) {
  const id = useId();
  const listboxId = `${id}-options`;
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const listbox = useRef<HTMLUListElement>(null);
  const activeOption = useRef<HTMLLIElement>(null);
  const query = draft?.trim().toLowerCase() ?? "";
  const options = query
    ? technologies.filter((tag) => tag.toLowerCase().includes(query))
    : ["", ...technologies];

  useLayoutEffect(() => {
    if (open && listbox.current) listbox.current.scrollTop = 0;
  }, [open, query]);

  useLayoutEffect(() => {
    if (open) activeOption.current?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  function close() {
    setOpen(false);
    setDraft(null);
    setActiveIndex(-1);
  }

  function choose(technology: string) {
    onSelect(technology);
    close();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      if (!options.length) return;
      const last = options.length - 1;
      setActiveIndex(
        event.key === "ArrowDown"
          ? Math.min(activeIndex + 1, last)
          : activeIndex < 0 ? last : Math.max(activeIndex - 1, 0),
      );
    } else if (event.key === "Escape" && open) {
      event.preventDefault();
      close();
    } else if (event.key === "Enter" && open) {
      event.preventDefault();
      const option = options[activeIndex] ?? (query ? options[0] : undefined);
      if (option !== undefined) choose(option);
    }
  }

  return (
    <div className={styles.technology}>
      <label htmlFor={id}>Tech stack</label>
      <div className={styles.technologyField}>
        <input
          id={id}
          ref={inputRef}
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-activedescendant={
            open && activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined
          }
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          placeholder={open ? "Search technologies" : allTechnologies}
          value={draft ?? value}
          onFocus={(event) => {
            setOpen(true);
            event.currentTarget.select();
          }}
          onClick={(event) => {
            if (!open) {
              setOpen(true);
              event.currentTarget.select();
            }
          }}
          onChange={(event) => {
            setDraft(event.currentTarget.value);
            setActiveIndex(-1);
            setOpen(true);
          }}
          onKeyDown={handleKeyDown}
          onBlur={close}
        />
        <svg className={styles.technologyChevron} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="m2 4 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className={styles.technologyPopup} hidden={!open}>
          <ul
            id={listboxId}
            ref={listbox}
            role="listbox"
            aria-label="Technologies"
            tabIndex={-1}
            className={styles.technologyOptions}
          >
            {open ? options.map((option, index) => (
              <li
                key={option}
                id={`${listboxId}-${index}`}
                ref={index === activeIndex ? activeOption : undefined}
                role="option"
                aria-selected={activeIndex < 0 ? option === value : index === activeIndex}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(option)}
              >
                {option || allTechnologies}
              </li>
            )) : null}
          </ul>
          {open && options.length === 0 ? (
            <p className={styles.technologyEmpty} role="status">No matching technologies</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

