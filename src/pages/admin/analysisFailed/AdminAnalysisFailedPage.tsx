import * as layout from "../../../shared/ui/pageLayout.css";
import { AdminSidebar } from "../../../widgets/AdminSidebar/AdminSidebar";
import { AnalysisFailedRetrySection } from "../employee/AnalysisFailedRetrySection";
import * as s from "./AdminAnalysisFailedPage.css";

export function AdminAnalysisFailedPage() {
  return (
    <>
      <AdminSidebar />

      <main className={layout.main}>
        <div className={s.pageHeader}>
          <div className={s.headerRow}>
            <div>
              <h1 className={s.title}>AI 분석 복구 관리</h1>
              <p className={s.subtitle}>실패한 AI 분석을 조회하고 선택 항목을 재요청합니다.</p>
            </div>
          </div>
        </div>

        <div className={s.body}>
          <AnalysisFailedRetrySection />
        </div>
      </main>
    </>
  );
}

