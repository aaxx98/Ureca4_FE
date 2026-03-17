import { createFileRoute } from "@tanstack/react-router";
import { ExcellentCasesPage } from "../../pages/consultation/excellent/ExcellentCasesPage";

export const Route = createFileRoute("/_app/excellent-cases")({
  component: ExcellentCasesPage,
});
