import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { atelierStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "gallery-web-app")!;
export const metadata = caseStudyMetadata(project, atelierStory);

export default function AtelierCaseStudy() {
  return <CaseStudy project={project} story={atelierStory} />;
}
