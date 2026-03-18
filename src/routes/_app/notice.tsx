import { createFileRoute } from "@tanstack/react-router";
import { NoticePage } from "../../pages/consultation/notice/NoticePage";

export const Route = createFileRoute("/_app/notice")({
  component: NoticePage,
});
