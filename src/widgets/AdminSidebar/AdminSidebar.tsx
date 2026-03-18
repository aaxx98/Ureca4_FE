import { ROUTES } from "../../shared/config/routes";
import { ContextNavItem } from "../../shared/ui/ContextNavItem";
import { BookIcon, UserIcon } from "../../shared/ui/icons";
import { AppSidebar } from "../AppSidebar/AppSidebar";

export function AdminSidebar() {
  return (
    <AppSidebar label="관리">
      {/* 1. 직원 계정 관리 */}
      <ContextNavItem 
        icon={<UserIcon />} 
        label="직원 계정 관리" 
        to={ROUTES.ADMIN_EMPLOYEES} 
      />
      
      {/* 2. 매뉴얼 관리 (순서 변경) */}
      <ContextNavItem
        icon={<BookIcon />}
        label="매뉴얼 관리"
        to={ROUTES.ADMIN_MANUAL}
      />

      {/* 3. AI 분석 복구 관리 (순서 변경) */}
      <ContextNavItem 
        icon={<UserIcon />} 
        label="AI 분석 복구 관리" 
        to={ROUTES.ADMIN_ANALYSIS_FAILED} 
      />
    </AppSidebar>
  );
}