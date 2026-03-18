import type { TimeSlotTrendResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  data: TimeSlotTrendResponse | undefined;
  isPending: boolean;
}

export function TimeSlotSection({ data, isPending }: Props) {
  const slots = data?.timeSlotTrend ?? [];
  return (
    <ReportSection title="시간대별 이슈 트렌드" isPending={isPending} hasData={slots.length > 0}>
      <div className={s.slotGrid}>
        {slots.map((slot, i) => (
          <div key={`${slot.slot}-${i}`} className={s.slotCard}>
            <p className={s.slotTime}>{slot.slot ?? "-"}</p>
            <p className={s.slotStat}>
              상담 건수 <span className={s.slotStatVal}>{slot.consultCount?.toLocaleString() ?? "-"}건</span>
            </p>
            <p className={s.slotStat}>
              평균 시간 <span className={s.slotStatVal}>{slot.avgDuration?.toFixed(0) ?? "-"}초</span>
            </p>
            {slot.categoryBreakdown && slot.categoryBreakdown.length > 0 && (
              <div className={s.tagList} style={{ marginTop: "8px" }}>
                {slot.categoryBreakdown.slice(0, 3).map((c, ci) => (
                  <span key={`${c.code}-${ci}`} className={s.tag}>
                    {c.name} <span className={s.tagCount}>{c.count}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
