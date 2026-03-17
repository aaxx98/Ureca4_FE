import { createFileRoute } from "@tanstack/react-router";
import { ConsultationResultPage } from "../../pages/consultation/result/ConsultationResultPage";

export const Route = createFileRoute("/_app/consultation-result")({
  component: ConsultationResultPage,
});
