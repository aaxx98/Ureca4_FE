import { createFileRoute } from "@tanstack/react-router";
import { AdminExcellentCasesPage } from "../../pages/admin/excellentCases/AdminExcellentCasesPage";

export const Route = createFileRoute("/_app/admin-excellent-cases")({
  component: AdminExcellentCasesPage,
});
