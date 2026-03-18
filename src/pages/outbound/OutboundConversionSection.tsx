import type { OutboundConversionResponse } from "../../shared/api/generated/api.schemas";
import { ReportSection } from "../admin-report/ReportSection";
import * as ob from "./OutboundPage.css";
import { fmtRate } from "./outboundUtils";

interface Props {
  data?: OutboundConversionResponse;
  isPending: boolean;
}

export function OutboundConversionSection({ data, isPending }: Props) {
  const categories = data?.categories ?? [];
  const maxRate = Math.max(...categories.map((c) => c.conversionRate ?? 0), 1);

  return (
    <ReportSection title="카테고리별 전환율" isPending={isPending} hasData={categories.length > 0}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
        {categories.map((c) => (
          <div
            key={c.categoryCode}
            style={{ display: "grid", gridTemplateColumns: "120px 1fr 60px", alignItems: "center", gap: "10px" }}
          >
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#555" }}>{c.categoryName ?? "-"}</span>
            <div className={ob.barTrack}>
              <div
                className={ob.barFillGradient}
                style={{ width: `${((c.conversionRate ?? 0) / maxRate) * 100}%` }}
              >
                {(c.convertedCount != null && c.totalCount != null) && (
                  <span className={ob.barCountText}>{c.convertedCount}/{c.totalCount}</span>
                )}
              </div>
            </div>
            <span className={ob.barValueText}>{fmtRate(c.conversionRate)}</span>
          </div>
        ))}
      </div>
    </ReportSection>
  );
}
