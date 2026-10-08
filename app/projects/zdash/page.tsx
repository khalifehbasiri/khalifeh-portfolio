import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { zdashStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "zdash")!;
export const metadata = caseStudyMetadata(project, zdashStory);

export default function ZDashCaseStudy() {
  return <CaseStudy project={project} story={zdashStory} />;
}
