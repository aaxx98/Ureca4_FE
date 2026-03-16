import { createFileRoute, Outlet } from "@tanstack/react-router";
import * as layout from "../shared/ui/pageLayout.css";
import { AppTopbar } from "../widgets/AppTopbar/AppTopbar";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className={layout.layout}>
      <AppTopbar />
      <div className={layout.body}>
        <Outlet />
      </div>
    </div>
  );
}
