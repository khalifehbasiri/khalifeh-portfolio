import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { storageExplorerStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "storage-explorer")!;
export const metadata = caseStudyMetadata(project, storageExplorerStory);

export default function StorageExplorerCaseStudy() {
  return <CaseStudy project={project} story={storageExplorerStory} />;
}
