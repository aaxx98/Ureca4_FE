import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { getRole } from "../../shared/api/roleStore";
import { hasAccess, MENU_KEYS } from "../../shared/config/roles";
import { ROUTES } from "../../shared/config/routes";
import { ContextNavItem } from "../../shared/ui/ContextNavItem";
import { SidebarNavGroup } from "../../shared/ui/SidebarNavGroup";
import { AnalysisIcon, BookIcon, ConsultationIcon, SettingsIcon } from "../../shared/ui/icons";
import * as layout from "../../shared/ui/pageLayout.css";
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
        {role && hasAccess(role, MENU_KEYS.CONSULTATION_ANALYSIS) && (
          <ContextNavItem icon={<AnalysisIcon />} label="상담분석" to={ROUTES.ANALYSIS} />
        )}
        {role && hasAccess(role, MENU_KEYS.ADMIN_REPORT) && (
          <ContextNavItem icon={<AnalysisIcon />} label="분석 리포트" to={ROUTES.ADMIN_REPORT} />
        )}
        {role && hasAccess(role, MENU_KEYS.ADMIN_REPORT) && (
          <ContextNavItem icon={<AnalysisIcon />} label="아웃바운드" to={ROUTES.OUTBOUND_REPORT} />
        )}
        {role === "관리자" ? (
          <SidebarNavGroup icon={<BookIcon />} label="메뉴얼">
            <Link
              to={ROUTES.ADMIN_MANUAL}
              className={layout.contextSubItem}
              activeProps={{ className: `${layout.contextSubItem} ${layout.contextItemActive}` }}
            >
              <BookIcon />
              현재 목록 조회
            </Link>
            <Link
              to={ROUTES.ADMIN_MANUAL_SETTINGS}
              className={layout.contextSubItem}
              activeProps={{ className: `${layout.contextSubItem} ${layout.contextItemActive}` }}
            >
              <SettingsIcon />
              설정
            </Link>
          </SidebarNavGroup>
        ) : (
          <ContextNavItem icon={<BookIcon />} label="메뉴얼" to={ROUTES.MANUAL} />
        )}
      </AppSidebar>
      <Outlet />
    </>
  );
}
