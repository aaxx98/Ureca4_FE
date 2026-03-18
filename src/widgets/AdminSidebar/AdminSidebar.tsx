import { ROUTES } from "../../shared/config/routes";
import { ContextNavItem } from "../../shared/ui/ContextNavItem";
import { UserIcon } from "../../shared/ui/icons";
import { AppSidebar } from "../AppSidebar/AppSidebar";

export function AdminSidebar() {
  return (
    <AppSidebar label="관리">
      <ContextNavItem icon={<UserIcon />} label="직원 계정 관리" to={ROUTES.ADMIN_EMPLOYEES} />
      <ContextNavItem icon={<UserIcon />} label="AI 분석 복구 관리" to={ROUTES.ADMIN_ANALYSIS_FAILED} />
    </AppSidebar>
  );
}
