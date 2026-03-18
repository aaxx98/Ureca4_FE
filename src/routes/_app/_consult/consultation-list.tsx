import { createFileRoute } from "@tanstack/react-router";
import { ConsultationListPage } from "../../../pages/consultation/list/ConsultationListPage";

export const Route = createFileRoute("/_app/_consult/consultation-list")({
  component: ConsultationListPage,
});
