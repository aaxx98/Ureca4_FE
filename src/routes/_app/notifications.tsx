import { createFileRoute } from "@tanstack/react-router";
import { NotificationPage } from "../../pages/home/NotificationPage";

export const Route = createFileRoute("/_app/notifications")({
  component: NotificationPage,
});
