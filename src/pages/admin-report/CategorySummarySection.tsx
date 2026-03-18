import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { CategorySummaryResponse } from "../../shared/api/generated/api.schemas";
import { ReportSection } from "./ReportSection";

const COLORS = ["#4472C4", "#70AD47", "#FFC000", "#7030A0", "#E74C3C", "#00B0F0", "#A0A0A0"];

interface Props {
  data: CategorySummaryResponse | undefined;
  isPending: boolean;
  period: string;
}

export function CategorySummarySection({ data, isPending, period }: Props) {
  const categories = data?.categories ?? [];
  const notice = period !== "daily" ? "일간 데이터 고정" : undefined;

  return (
    <ReportSection title="카테고리별 상담 빈도" isPending={isPending} hasData={categories.length > 0} notice={notice}>
      <div style={{ margin: "0 20%" }}>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie data={categories} dataKey="count" nameKey="name" cx="50%" cy="50%" innerRadius={65} outerRadius={110}>
            {categories.map((c, i) => (
              <Cell key={c.code ?? c.name ?? i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(v: number) => `${v.toLocaleString()}건`} />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px" }}>
        {categories.map((c, i) => (
          <div key={c.code ?? c.name ?? i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: COLORS[i % COLORS.length], flexShrink: 0 }} />
            <span style={{ fontSize: "12px", color: "#1A1A2E", flex: 1 }}>{c.name ?? "-"}</span>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#1A1A2E", width: "50px", textAlign: "right" }}>{c.count?.toLocaleString() ?? "-"}</span>
            <span style={{ fontSize: "11px", color: "#6B7280", width: "36px", textAlign: "right" }}>{c.rate?.toFixed(1) ?? "-"}%</span>
          </div>
        ))}
      </div>
      </div>
    </ReportSection>
  );
}
