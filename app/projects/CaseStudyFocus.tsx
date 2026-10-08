import { getTechTagColors } from "../lib/tech-stack-colors";

export function CaseStudyFocus({ topics }: { topics: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2" aria-label="Engineering focus">
      {topics.map((topic) => (
        <span
          key={topic}
          className={`rounded-md border px-2 py-1 font-mono text-xs ${getTechTagColors(topic)}`}
        >
          {topic}
        </span>
      ))}
    </div>
  );
}
