import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { tandemStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "tandem-insulin-pump-simulator")!;
export const metadata = caseStudyMetadata(project, tandemStory);

export default function TandemCaseStudy() {
  return <CaseStudy project={project} story={tandemStory} />;
}
