import type { Project } from "../data/portfolio";
import theme from "./project-theme.module.css";

export function ProjectStatus({ status }: { status: Project["status"] }) {
  return (
    <span
      className={`${theme.status} ${status.startsWith("Live") ? theme.live : status === "In development" ? theme.development : ""}`}
    >
      {status}
    </span>
  );
}
