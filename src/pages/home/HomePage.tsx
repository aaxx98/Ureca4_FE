import { ROUTES } from "../../shared/config/routes";
import { ContextNavItem } from "../../shared/ui/ContextNavItem";
import { CalendarIcon, EmptyIcon, HomeIcon, NoticeIcon } from "../../shared/ui/icons";
import * as layout from "../../shared/ui/pageLayout.css";
import { AppTopbar } from "../../widgets/AppTopbar/AppTopbar";
import * as s from "./HomePage.css";

const today = new Date().toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short",
});

export function HomePage() {
  return (
    <div className={layout.layout}>
      <AppTopbar />

      <div className={layout.body}>
        <aside className={layout.contextPanel}>
          <div className={layout.contextLabel}>홈</div>
          <ContextNavItem to={ROUTES.HOME} icon={<HomeIcon />} label="개요" />
          <ContextNavItem icon={<NoticeIcon />} label="공지사항" badge={2} />
          <ContextNavItem icon={<CalendarIcon />} label="내 일정" />
        </aside>

        <main className={layout.main}>
          <div className={layout.contentHeader}>
            <p className={layout.breadcrumb}>
              홈 <span className={layout.breadcrumbAccent}>/ 개요</span>
            </p>
            <h1 className={layout.contentTitle}>개요</h1>
            <p className={layout.contentSub}>{today}</p>
          </div>

          <div className={layout.contentBody}>
            <div className={s.statsRow}>
              <div className={s.statCard}>
                <p className={s.statLabel}>오늘의 상담</p>
                <p className={s.statEmpty}>—</p>
              </div>
              <div className={s.statCard}>
                <p className={s.statLabel}>이번 주 상담</p>
                <p className={s.statEmpty}>—</p>
              </div>
              <div className={s.statCard}>
                <p className={s.statLabel}>전체 상담</p>
                <p className={s.statEmpty}>—</p>
              </div>
            </div>

            <div className={s.recentSection}>
              <div className={s.recentHeader}>
                <p className={s.sectionTitle}>최근 상담 기록</p>
                <span className={s.sectionBadge}>준비 중</span>
              </div>
              <div className={s.emptyState}>
                <EmptyIcon />
                <p className={s.emptyText}>표시할 데이터가 없습니다</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
