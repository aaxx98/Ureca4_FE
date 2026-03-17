import { createFileRoute } from "@tanstack/react-router";
import { ConsultationListPage } from "../../pages/consultation/list/ConsultationListPage";

export const Route = createFileRoute("/_app/consultation-list")({
  component: ConsultationListPage,
});
