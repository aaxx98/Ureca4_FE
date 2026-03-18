import type { PerformanceSummaryResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  data: PerformanceSummaryResponse | undefined;
  isPending: boolean;
}

export function PerformanceSection({ data, isPending }: Props) {
  return (
    <ReportSection title="전체 상담 성과" isPending={isPending} hasData={!!data}>
      {data && (
        <div className={s.statGrid}>
          <div className={s.statCard}>
            <p className={s.statLabel}>총 상담 건수</p>
            <p className={s.statValue}>{data.totalConsultCount?.toLocaleString() ?? "-"}</p>
          </div>
          <div className={s.statCard}>
            <p className={s.statLabel}>상담사 평균 처리</p>
            <p className={s.statValue}>{data.avgConsultCountPerAgent?.toFixed(1) ?? "-"}</p>
          </div>
          <div className={s.statCard}>
            <p className={s.statLabel}>평균 처리 시간</p>
            <p className={s.statValue}>{data.avgDurationMinutes?.toFixed(0) ?? "-"}초</p>
          </div>
          <div className={s.statCard}>
            <p className={s.statLabel}>평균 만족도</p>
            <p className={s.statValue}>{data.avgSatisfiedScore?.toFixed(1) ?? "-"}</p>
          </div>
        </div>
      )}
    </ReportSection>
  );
}
