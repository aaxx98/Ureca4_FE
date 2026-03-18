import { createFileRoute } from "@tanstack/react-router";
import { SummaryPage } from "../../../pages/summary/SummaryPage";

export const Route = createFileRoute("/_app/_consult/summary")({
  component: SummaryPage,
});
