import type { PerformanceSummaryResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  data: PerformanceSummaryResponse | undefined;
  isPending: boolean;
}

function PerfCard({ label, value, unit }: { label: string; value: string | number; unit: string }) {
  return (
    <div className={s.perfCard}>
      <p className={s.perfLabel}>{label}</p>
      <div className={s.perfNumArea}>
        <div className={s.perfNumRow}>
          <span className={s.perfNum}>{value}</span>
          <span className={s.perfUnit}>{unit}</span>
        </div>
      </div>
    </div>
  );
}

export function PerformanceSection({ data, isPending }: Props) {
  return (
    <ReportSection title="전체 상담 성과" isPending={isPending} hasData={!!data}>
      {data && (
        <div className={s.perfGrid}>
          <PerfCard label="📞 총 상담 건수" value={data.totalConsultCount?.toLocaleString() ?? "-"} unit="건" />
          <PerfCard label="👤 상담사 평균 처리 건수" value={data.avgConsultCountPerAgent?.toFixed(1) ?? "-"} unit="건" />
          <PerfCard label="⏱ 평균 처리 시간" value={data.avgDurationMinutes ?? "-"} unit="분" />
          <PerfCard label="⭐ 평균 만족도" value={data.avgSatisfiedScore?.toFixed(1) ?? "-"} unit="/5.0" />
        </div>
      )}
    </ReportSection>
  );
}
