import { permanentRedirect } from "next/navigation";

export default function LegacyZ32TelemetryPage() {
  permanentRedirect("/projects/zdash");
}
