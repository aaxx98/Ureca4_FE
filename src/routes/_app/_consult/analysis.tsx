import { createFileRoute } from "@tanstack/react-router";
import { AnalysisPage } from "../../../pages/analysis/AnalysisPage";

export const Route = createFileRoute("/_app/_consult/analysis")({
  component: AnalysisPage,
});
