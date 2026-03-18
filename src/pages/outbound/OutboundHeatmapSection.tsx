import type { OutboundHeatmapResponse } from "../../shared/api/generated/api.schemas";
import { ReportSection } from "../admin-report/ReportSection";
import * as ob from "./OutboundPage.css";
import { DAY_LABELS, getHeatLevel } from "./outboundUtils";

interface Props {
  data?: OutboundHeatmapResponse;
  isPending: boolean;
}

const LEGEND_COLORS = ["#ffeef5", "#ffb8d4", "#ff7eb3", "#e6007e", "#a8005c"];

export function OutboundHeatmapSection({ data, isPending }: Props) {
  const rows = data?.rows ?? [];

  const WEEKDAYS = DAY_LABELS.slice(0, 5); // 월~금만

  const headerCells = [
    <div key="empty" className={ob.heatmapHeader} />,
    ...WEEKDAYS.map((d) => <div key={d} className={ob.heatmapHeader}>{d}</div>),
  ];

  const bodyCells = rows.flatMap((row) => [
    <div key={`t-${row.hour}`} className={ob.heatmapTime}>{row.hour}시</div>,
    ...(row.days ?? []).slice(0, 5).map((rate, i) => {
      const lvl = getHeatLevel(rate);
      return (
        <div
          key={`${row.hour}-${i}`}
          className={`${ob.heatmapCell} ${ob.heatLevelVariant[lvl]}`}
          title={`${WEEKDAYS[i]} ${row.hour}시: ${rate.toFixed(1)}%`}
        >
          {rate > 0 ? `${rate.toFixed(0)}%` : ""}
        </div>
      );
    }),
  ]);

  return (
    <ReportSection title="시간대 × 요일 전환율 히트맵" isPending={isPending} hasData={rows.length > 0}>
      <div className={ob.heatmapWrap}>
        <div className={ob.heatmapGrid}>
          {headerCells}
          {bodyCells}
        </div>
        <div className={ob.heatmapLegendWrap}>
          <span className={ob.heatmapLegendLabel}>낮음</span>
          {LEGEND_COLORS.map((c) => (
            <div key={c} style={{ width: "20px", height: "10px", backgroundColor: c, borderRadius: "2px" }} />
          ))}
          <span className={ob.heatmapLegendLabel}>높음</span>
        </div>
      </div>
    </ReportSection>
  );
}
