import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { floxyStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "floxy-landing-page")!;
export const metadata = caseStudyMetadata(project, floxyStory);

export default function FloxyCaseStudy() {
  return <CaseStudy project={project} story={floxyStory} />;
}
