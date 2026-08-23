import { skillGroups } from "../data/portfolio";

export const skillGroupColors = {
  Languages: {
    heading: "text-emerald-300",
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  },
  "Frameworks & Tools": {
    heading: "text-sky-300",
    badge: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  },
  Databases: {
    heading: "text-violet-300",
    badge: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  },
  Domains: {
    heading: "text-amber-300",
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  },
} as const;

type SkillGroupLabel = keyof typeof skillGroupColors;

const projectOnlyTagGroups: Record<string, SkillGroupLabel> = {
  "Raspberry Pi": "Frameworks & Tools",
  FastAPI: "Frameworks & Tools",
  WebSockets: "Frameworks & Tools",
  Electron: "Frameworks & Tools",
  "Embedded Systems": "Domains",
  "Automotive Software": "Domains",
  SEO: "Domains",
  Multithreading: "Domains",
  Geospatial: "Domains",
  Bilingual: "Domains",
  "Data Validation": "Domains",
};

const neutralColors = {
  heading: "text-foreground",
  badge: "border-border bg-surface-raised text-muted",
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

  return groupLabel ? getSkillGroupColors(groupLabel).badge : neutralColors.badge;
}
