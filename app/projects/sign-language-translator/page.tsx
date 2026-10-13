import { projects } from "../../data/portfolio";
import { CaseStudy, caseStudyMetadata } from "../CaseStudy";
import { signLanguageStory } from "../case-studies";

const project = projects.find((entry) => entry.id === "sign-language-translator")!;
export const metadata = caseStudyMetadata(project, signLanguageStory);

export default function SignLanguageCaseStudy() {
  return <CaseStudy project={project} story={signLanguageStory} />;
}
