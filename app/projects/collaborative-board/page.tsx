import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { collaborativeBoardStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "collaborative-board")!;
export const metadata = caseStudyMetadata(project, collaborativeBoardStory);

export default function CollaborativeBoardCaseStudy() {
  return <CaseStudy project={project} story={collaborativeBoardStory} />;
}
