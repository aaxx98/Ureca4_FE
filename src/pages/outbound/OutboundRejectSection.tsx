import { Cell, Label, Pie, PieChart, Tooltip } from "recharts";
import type { OutboundCallResultResponse } from "../../shared/api/generated/api.schemas";
import { ReportSection } from "../admin-report/ReportSection";
import { fmtRate } from "./outboundUtils";

interface Props {
  data?: OutboundCallResultResponse;
  isPending: boolean;
}

const COLORS = ["#e6007e", "#ff6b9d", "#ffb8d4", "#ffeef5", "#d1d5db"];

export function OutboundRejectSection({ data, isPending }: Props) {
  const reasons      = data?.rejectReasons ?? [];
  const totalRejected = data?.distribution?.rejected?.count ?? 0;

  return (
    <ReportSection title="거절 사유 분석" isPending={isPending} hasData={reasons.length > 0}>
      <div style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "8px" }}>

        <PieChart width={240} height={240} style={{ flexShrink: 0 }}>
          <Pie
            data={reasons}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={58}
            outerRadius={108}
          >
            {reasons.map((r, i) => (
              <Cell key={r.code ?? i} fill={COLORS[i % COLORS.length]} />
            ))}
            <Label
              content={({ viewBox }: any) => {
                const cx = viewBox?.cx;
                const cy = viewBox?.cy;
                if (cx == null || cy == null) return null;
                return (
                  <text textAnchor="middle">
                    <tspan x={cx} y={cy - 4} fontSize="20" fontWeight="700" fill="#e6007e">
                      {totalRejected.toLocaleString()}
                    </tspan>
                    <tspan x={cx} y={cy + 13} fontSize="10" fill="#888">
                      REJECTED
                    </tspan>
                  </text>
                );
              }}
              position="center"
            />
          </Pie>
          <Tooltip formatter={(v) => [`${Number(v).toLocaleString()}건`]} />
        </PieChart>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          {reasons.map((r, i) => (
            <div key={r.code ?? i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "3px", backgroundColor: COLORS[i % COLORS.length], flexShrink: 0 }} />
              <span style={{ fontSize: "12px", color: "#555", flex: 1 }}>{r.name ?? "-"}</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#555", minWidth: "40px", textAlign: "right" }}>
                {fmtRate(r.rate)}
              </span>
            </div>
          ))}
        </div>

      </div>
    </ReportSection>
  );
}
