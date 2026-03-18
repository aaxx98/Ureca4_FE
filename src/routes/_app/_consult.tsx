import { createFileRoute, Outlet } from "@tanstack/react-router";
import { getRole } from "../../shared/api/roleStore";
import { hasAccess, MENU_KEYS } from "../../shared/config/roles";
import { ROUTES } from "../../shared/config/routes";
import { ContextNavItem } from "../../shared/ui/ContextNavItem";
import { AnalysisIcon, ConsultationIcon } from "../../shared/ui/icons";
import { AppSidebar } from "../../widgets/AppSidebar/AppSidebar";

export const Route = createFileRoute("/_app/_consult")({
  component: ConsultLayout,
});

function ConsultLayout() {
  const role = getRole();

  return (
    <>
      <AppSidebar label="상담업무">
        <ContextNavItem icon={<ConsultationIcon />} label="상담내역"    to={ROUTES.CONSULT} />
        {role && hasAccess(role, MENU_KEYS.RESULT_WRITE) && (
          <ContextNavItem icon={<ConsultationIcon />} label="결과서 작성" to={ROUTES.CONSULT_RESULT} />
        )}
        <ContextNavItem icon={<ConsultationIcon />} label="상담요약"    to={ROUTES.SUMMARY} />
        <ContextNavItem icon={<AnalysisIcon />}     label="상담분석" />
      </AppSidebar>
      <Outlet />
    </>
  );
}
