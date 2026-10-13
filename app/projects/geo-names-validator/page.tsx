import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { geoNamesStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "geo-names-validator")!;
export const metadata = caseStudyMetadata(project, geoNamesStory);

export default function GeoNamesCaseStudy() {
  return <CaseStudy project={project} story={geoNamesStory} />;
}
