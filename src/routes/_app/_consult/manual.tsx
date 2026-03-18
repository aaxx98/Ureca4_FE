import { createFileRoute } from "@tanstack/react-router";
import { ManualPage } from "../../../pages/manual/ManualPage";

export const Route = createFileRoute("/_app/_consult/manual")({
  component: ManualPage,
});
