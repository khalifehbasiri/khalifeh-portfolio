import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { leetbridgeStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "leetbridge")!;
export const metadata = caseStudyMetadata(project, leetbridgeStory);

export default function LeetBridgeCaseStudy() {
  return <CaseStudy project={project} story={leetbridgeStory} />;
}
