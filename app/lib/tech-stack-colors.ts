import { skillGroups } from "../data/portfolio";

const lightBadge = "border-border bg-background text-foreground";

export const skillGroupColors = {
  Languages: {
    heading: "text-foreground dark:text-emerald-300",
    badge: `${lightBadge} dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200`,
  },
  "Frameworks & Tools": {
    heading: "text-foreground dark:text-sky-300",
    badge: `${lightBadge} dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-200`,
  },
  Databases: {
    heading: "text-foreground dark:text-violet-300",
    badge: `${lightBadge} dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-200`,
  },
  Domains: {
    heading: "text-foreground dark:text-amber-300",
    badge: `${lightBadge} dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200`,
  },
} as const;

type SkillGroupLabel = keyof typeof skillGroupColors;

const projectOnlyTagGroups: Record<string, SkillGroupLabel> = {
  "Raspberry Pi": "Frameworks & Tools",
  FastAPI: "Frameworks & Tools",
  PySide6: "Frameworks & Tools",
  QML: "Frameworks & Tools",
  Pydantic: "Frameworks & Tools",
  SQLAlchemy: "Frameworks & Tools",
  Alembic: "Frameworks & Tools",
  WebSockets: "Frameworks & Tools",
  Electron: "Frameworks & Tools",
  LangChain: "Frameworks & Tools",
  LangGraph: "Frameworks & Tools",
  "Chrome Extensions": "Frameworks & Tools",
  "Manifest V3": "Frameworks & Tools",
  "GitHub API": "Frameworks & Tools",
  "Embedded Systems": "Domains",
  "Automotive Software": "Domains",
  "Automotive Diagnostics": "Domains",
  "AI Integration": "Domains",
  "Structured Outputs": "Domains",
  RAG: "Domains",
  "Hybrid Search": "Domains",
  "Tool Calling": "Domains",
  "AI Classification": "Domains",
  "Human Review": "Domains",
  "Model Inference": "Domains",
  "API Integration": "Domains",
  "Least Privilege": "Domains",
  "Recoverable Workflows": "Domains",
  SEO: "Domains",
  Multithreading: "Domains",
  Geospatial: "Domains",
  Bilingual: "Domains",
  "Data Validation": "Domains",
  UML: "Domains",
};

const neutralColors = {
  heading: "text-foreground",
  badge: `${lightBadge} dark:bg-surface-raised dark:text-muted`,
};

function isSkillGroupLabel(label: string): label is SkillGroupLabel {
  return label in skillGroupColors;
}

const techTagGroups = new Map<string, SkillGroupLabel>(
  Object.entries(projectOnlyTagGroups),
);

for (const group of skillGroups) {
  if (!isSkillGroupLabel(group.label)) continue;

  for (const skill of group.skills) {
    techTagGroups.set(skill, group.label);
  }
}

export function getSkillGroupColors(label: string) {
  return isSkillGroupLabel(label) ? skillGroupColors[label] : neutralColors;
}

export function getTechTagColors(tag: string) {
  const groupLabel = techTagGroups.get(tag);

  return groupLabel
    ? getSkillGroupColors(groupLabel).badge
    : neutralColors.badge;
}
