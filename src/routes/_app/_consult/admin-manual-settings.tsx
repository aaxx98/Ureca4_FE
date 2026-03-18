import { createFileRoute } from "@tanstack/react-router";
import { AdminManualSettingsPage } from "../../../pages/admin/manual/AdminManualSettingsPage";

export const Route = createFileRoute("/_app/_consult/admin-manual-settings")({
  component: AdminManualSettingsPage,
});
