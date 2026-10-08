import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { jobTrackerStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "job-tracker-ai")!;
export const metadata = caseStudyMetadata(project, jobTrackerStory);

export default function JobTrackerCaseStudy() {
  return <CaseStudy project={project} story={jobTrackerStory} />;
}
