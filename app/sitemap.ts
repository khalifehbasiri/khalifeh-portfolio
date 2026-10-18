import type { MetadataRoute } from "next";
import { projects } from "./data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/resume", ...projects.map((project) => `/projects/${project.id}`)].map(
    (path) => ({ url: `https://kbasiri.com${path}` }),
  );
}
