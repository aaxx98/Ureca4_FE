import type { OutboundOptimalTimeResponse } from "../../shared/api/generated/api.schemas";
import { ReportSection } from "../admin-report/ReportSection";
import * as ob from "./OutboundPage.css";
import { fmtRate } from "./outboundUtils";

interface Props {
  data?: OutboundOptimalTimeResponse;
  isPending: boolean;
}

export function OutboundOptimalTimeSection({ data, isPending }: Props) {
  const recs = data?.recommendations ?? [];

  return (
    <ReportSection title="카테고리별 최적 연락 시간 추천" isPending={isPending} hasData={recs.length > 0}>
      <div className={ob.optimalGrid}>
        {recs.map((r) => (
          <div key={r.categoryCode} className={ob.optimalCard}>
            <p className={ob.optimalCat}>{r.categoryName ?? "-"}</p>
            <p className={ob.optimalTime}>{r.bestHourRange ?? "-"}</p>
            <p className={ob.optimalRate}>전환율 {fmtRate(r.bestConversionRate)}</p>
            {r.bestDays && r.bestDays.length > 0 && (
              <p className={ob.optimalDay}>{r.bestDays.join(" · ")}요일 최적</p>
            )}
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
