import { createFileRoute } from "@tanstack/react-router";
import { AdminManualListPage } from "../../../pages/admin/manual/AdminManualListPage";

export const Route = createFileRoute("/_app/_consult/admin-manual")({
  component: AdminManualListPage,
});
