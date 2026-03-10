import { createFileRoute } from "@tanstack/react-router";
import { OAuthCallbackPage } from "../pages/oauth/OAuthCallbackPage";

export const Route = createFileRoute("/oauth")({
  validateSearch: (search) => ({
    code: search["code"] as string | undefined,
  }),
  component: OAuthCallbackPage,
});
