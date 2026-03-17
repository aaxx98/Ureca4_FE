import { ROUTES } from "../../shared/config/routes";
import {
  AnalysisIcon,
  ConsultationIcon,
  HomeIcon,
  OnlineIndicator,
  UPlusLogoIcon,
} from "../../shared/ui/icons";
import { NavTab } from "../../shared/ui/NavTab/NavTab";
import * as s from "./AppTopbar.css";
import { UserDropdown } from "./UserDropdown";

export function AppTopbar() {
  return (
    <header className={s.topbar}>
      <div className={s.logo}>
        <UPlusLogoIcon height={28} color="white" />
        <span className={s.logoName}>상담관리</span>
      </div>

      <nav className={s.tabs}>
        <NavTab to={ROUTES.HOME} icon={<HomeIcon />} label="홈" />
        <NavTab icon={<ConsultationIcon />} label="상담 업무" to={ROUTES.CONSULT} />
        <NavTab icon={<AnalysisIcon />} label="대시보드" to={ROUTES.EXCELLENT} />
      </nav>

      <div className={s.topbarRight}>
        <div className={s.statusBadge}>
          <OnlineIndicator />
          시스템 정상
        </div>
        <UserDropdown />
      </div>
    </header>
  );
}
