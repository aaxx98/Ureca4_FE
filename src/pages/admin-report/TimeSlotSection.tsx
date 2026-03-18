import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { TimeSlotTrendResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

const COLORS = ["#4472C4", "#70AD47", "#FFC000", "#7030A0", "#E74C3C", "#00B0F0", "#A0A0A0"];

interface Props {
  data: TimeSlotTrendResponse | undefined;
  isPending: boolean;
  period: string;
}

export function TimeSlotSection({ data, isPending, period }: Props) {
  const slots = data?.timeSlotTrend ?? [];
  const notice = period !== "daily" ? "일간 데이터 고정" : undefined;

  const allCategories = Array.from(
    new Set(slots.flatMap((slot) => slot.categoryBreakdown?.map((c) => c.name ?? "") ?? []))
  );

  const chartData = slots.map((slot) => {
    const entry: Record<string, unknown> = { slot: slot.slot ?? "" };
    slot.categoryBreakdown?.forEach((c) => { entry[c.name ?? ""] = c.count ?? 0; });
    return entry;
  });

  return (
    <ReportSection title="시간대별 이슈 트렌드" isPending={isPending} hasData={slots.length > 0} notice={notice}>
      <p className={s.subTitle} style={{ marginTop: 0 }}>시간대별 카테고리 분포</p>
      <div style={{ margin: "0 20%" }}>
      <ResponsiveContainer width="100%" height={336}>
        <BarChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
          <XAxis dataKey="slot" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Legend iconSize={10} wrapperStyle={{ fontSize: "11px" }} />
          {allCategories.map((cat, i) => (
            <Bar key={cat} dataKey={cat} stackId="a" fill={COLORS[i % COLORS.length]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
        {slots.map((slot) => (
          <div key={slot.slot ?? slot.consultCount} style={{ flex: 1, textAlign: "center" }}>
            <p style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>{slot.slot}</p>
            <p style={{ fontSize: "20px", fontWeight: "700", color: "#1A1A2E", lineHeight: 1 }}>{slot.consultCount?.toLocaleString() ?? "-"}건</p>
            <p style={{ fontSize: "11px", color: "#6B7280", marginTop: "2px" }}>평균 {slot.avgDuration ?? "-"}분</p>
          </div>
        ))}
      </div>
      </div>
    </ReportSection>
  );
}
