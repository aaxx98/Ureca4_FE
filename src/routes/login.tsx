import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginPage } from "../pages/login/LoginPage";
import { getAccessToken } from "../shared/api/tokenStore";
import { ROUTES } from "../shared/config/routes";

export const Route = createFileRoute("/login")({
  beforeLoad: () => {
    if (getAccessToken()) {
      throw redirect({ to: ROUTES.HOME });
    }
  },
  component: LoginPage,
});
