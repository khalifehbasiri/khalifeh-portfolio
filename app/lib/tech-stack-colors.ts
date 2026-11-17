import { skillGroups } from "../data/portfolio";

const skillGroupColors = {
  language: "border-emerald-600/30 bg-emerald-100/75 text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200",
  tool: "border-sky-600/30 bg-sky-100/75 text-sky-800 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-200",
  data: "border-violet-600/30 bg-violet-100/75 text-violet-800 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-200",
  practice: "border-amber-600/30 bg-amber-100/75 text-amber-800 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200",
} as const;

const techTagGroups = new Map<string, keyof typeof skillGroupColors>();

for (const group of skillGroups) {
  for (const [skill] of group.skills) {
    techTagGroups.set(skill, group.tone);
  }
}

export function getTechTagColors(tag: string) {
  const tone = techTagGroups.get(tag);

  return tone
    ? skillGroupColors[tone]
    : "border-border bg-background text-foreground dark:bg-surface-raised dark:text-muted";
}
