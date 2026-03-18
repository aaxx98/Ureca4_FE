import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { ChurnDefenseResponse, CustomerTypeDefense } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  summary: ChurnDefenseResponse | undefined;
  customerTypes: ChurnDefenseResponse | undefined;
  complaintReasons: ChurnDefenseResponse | undefined;
  actions: ChurnDefenseResponse | undefined;
  summaryPending: boolean;
  ctPending: boolean;
  crPending: boolean;
  actPending: boolean;
}

const F_COLOR = "#E879A8";
const M_COLOR = "#60A5FA";
const U_COLOR = "#9CA3AF";

function parseType(type: string): { ageGroup: string; gender: "F" | "M" | "U" } {
  const fmMatch = type.match(/^(.+?)([FM])$/);
  if (fmMatch) return { ageGroup: fmMatch[1].trim(), gender: fmMatch[2] as "F" | "M" };
  const unknownMatch = type.match(/^(.+?)\s*미상$/);
  if (unknownMatch) return { ageGroup: unknownMatch[1].trim(), gender: "U" };
  return { ageGroup: type, gender: "U" };
}

interface ChartEntry {
  ageGroup: string;
  F?: number;
  M?: number;
  U?: number;
  FRate?: number;
  MRate?: number;
  URate?: number;
}

function buildChartData(items: CustomerTypeDefense[]): ChartEntry[] {
  const map = new Map<string, ChartEntry>();
  for (const item of items) {
    const { ageGroup, gender } = parseType(item.type ?? "");
    if (!map.has(ageGroup)) map.set(ageGroup, { ageGroup });
    const entry = map.get(ageGroup);
    if (!entry) continue;
    if (gender === "F") { entry.F = item.attempts ?? 0; entry.FRate = item.successRate; }
    else if (gender === "M") { entry.M = item.attempts ?? 0; entry.MRate = item.successRate; }
    else { entry.U = item.attempts ?? 0; entry.URate = item.successRate; }
  }
  return Array.from(map.values()).sort((a, b) => a.ageGroup.localeCompare(b.ageGroup));
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ dataKey: string; value: number; payload: ChartEntry }>; label?: string }) {
  if (!active || !payload?.length) return null;
  const nameMap: Record<string, { label: string; color: string; rateKey: keyof ChartEntry }> = {
    F: { label: "여성", color: F_COLOR, rateKey: "FRate" },
    M: { label: "남성", color: M_COLOR, rateKey: "MRate" },
    U: { label: "미상", color: U_COLOR, rateKey: "URate" },
  };
  return (
    <div style={{ backgroundColor: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "10px 14px", fontSize: "12px" }}>
      <p style={{ fontWeight: 700, marginBottom: "6px", color: "#1A1A2E" }}>{label}</p>
      {payload.map((p) => {
        const meta = nameMap[p.dataKey];
        if (!meta) return null;
        const rate = p.payload[meta.rateKey] as number | undefined;
        return (
          <p key={p.dataKey} style={{ color: meta.color, margin: "2px 0" }}>
            {meta.label}: {p.value.toLocaleString()}건{rate != null ? ` (성공률 ${rate.toFixed(1)}%)` : ""}
          </p>
        );
      })}
    </div>
  );
}

export function ChurnDefenseSection({ summary, customerTypes, complaintReasons, actions, summaryPending, ctPending, crPending, actPending }: Props) {
  const isPending = summaryPending || ctPending || crPending || actPending;
  const hasData = !!(summary || customerTypes || complaintReasons || actions);

  const ctItems = customerTypes?.byCustomerType ?? [];
  const chartData = buildChartData(ctItems);
  const hasF = chartData.some((d) => d.F != null);
  const hasM = chartData.some((d) => d.M != null);
  const hasU = chartData.some((d) => d.U != null);
  const reasons = complaintReasons?.complaintReasons ?? [];

  return (
    <ReportSection title="해지방어 분석" isPending={isPending} hasData={hasData} notice="월간 데이터">
      {summary && (
        <div className={s.statGrid} style={{ marginBottom: "8px" }}>
          {[
            { label: "시도 건수", value: `${summary.totalAttempts ?? "-"}건` },
            { label: "성공 건수", value: `${summary.successCount ?? "-"}건` },
            { label: "성공률", value: `${summary.successRate?.toFixed(1) ?? "-"}%` },
            { label: "평균 소요 시간", value: `${summary.avgDurationSec ?? "-"}초` },
          ].map(({ label, value }) => (
            <div key={label} className={s.statCard}>
              <p className={s.statLabel}>{label}</p>
              <p className={s.statValue}>{value}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", gap: "0", alignItems: "center", margin: "0 5%" }}>
        {/* Left: 고객 유형별 해지 분석 */}
        {chartData.length > 0 && (
          <div style={{ flex: 1, minWidth: 0, padding: "16px 16px 16px 0" }}>
            <p className={s.subTitle} style={{ marginTop: 0 }}>고객 유형별 해지 분석</p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: "8px" }}>
              {hasF && <LegendDot color={F_COLOR} label="여성" />}
              {hasM && <LegendDot color={M_COLOR} label="남성" />}
              {hasU && <LegendDot color={U_COLOR} label="미상" />}
            </div>
            <div style={{ maxWidth: "80%", margin: "0 auto" }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 4 }} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="ageGroup" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip content={<CustomTooltip />} />
                {hasF && (
                  <Bar dataKey="F" name="여성" fill={F_COLOR} radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="F" position="top" style={{ fontSize: "10px", fill: F_COLOR, fontWeight: 600 }} formatter={(v: number) => `${v}`} />
                    {chartData.map((entry) => (
                      <Cell key={`F-${entry.ageGroup}`} fill={F_COLOR} fillOpacity={entry.FRate != null && entry.FRate >= 50 ? 1 : 0.55} />
                    ))}
                  </Bar>
                )}
                {hasM && (
                  <Bar dataKey="M" name="남성" fill={M_COLOR} radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="M" position="top" style={{ fontSize: "10px", fill: M_COLOR, fontWeight: 600 }} formatter={(v: number) => `${v}`} />
                    {chartData.map((entry) => (
                      <Cell key={`M-${entry.ageGroup}`} fill={M_COLOR} fillOpacity={entry.MRate != null && entry.MRate >= 50 ? 1 : 0.55} />
                    ))}
                  </Bar>
                )}
                {hasU && (
                  <Bar dataKey="U" name="미상" fill={U_COLOR} radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="U" position="top" style={{ fontSize: "10px", fill: U_COLOR, fontWeight: 600 }} formatter={(v: number) => `${v}`} />
                    {chartData.map((entry) => (
                      <Cell key={`U-${entry.ageGroup}`} fill={U_COLOR} fillOpacity={entry.URate != null && entry.URate >= 50 ? 1 : 0.55} />
                    ))}
                  </Bar>
                )}
              </BarChart>
            </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Divider */}
        {chartData.length > 0 && reasons.length > 0 && (
          <div style={{ width: "1px", backgroundColor: "#E5E7EB", alignSelf: "stretch", flexShrink: 0 }} />
        )}

        {/* Right: 불만 사유별 방어율 */}
        {reasons.length > 0 && (
          <div style={{ flex: 1, minWidth: 0, padding: "16px 0 16px 16px", display: "flex", flexDirection: "column" }}>
            <p className={s.subTitle} style={{ marginTop: 0, marginBottom: "34px" }}>불만 사유별 방어율</p>
            <div style={{ maxWidth: "80%", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "14px", flex: 1, justifyContent: "center" }}>
              {reasons.map((r, i) => (
                <div key={`${r.reason}-${i}`} className={s.barRow}>
                  <span className={s.barLabel}>{r.reason}</span>
                  <div className={s.barTrack}>
                    <div className={s.barFill} style={{ width: `${Math.min(r.successRate ?? 0, 100)}%` }} />
                  </div>
                  <span className={s.barPct}>{r.successRate?.toFixed(1) ?? "-"}%</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {(actions?.byAction ?? []).length > 0 && (
        <>
          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: "0 0 16px 0" }} />
          <p className={s.subTitle} style={{ marginBottom: "8px", marginLeft: "15%" }}>상담사 액션별 현황</p>
          <div style={{ margin: "0 15%" }}>
            <div className={s.tableWrap} style={{ margin: "8px 0 16px" }}>
              <table className={s.table}>
                <thead><tr><th className={s.th}>순위</th><th className={s.th}>액션</th><th className={s.th}>시도</th><th className={s.th}>성공률</th></tr></thead>
                <tbody>
                  {(actions?.byAction ?? []).map((a, i) => (
                    <tr key={`${a.action}-${i}`}>
                      <td className={s.td} style={{ color: i < 3 ? "#E1006A" : "#9CA3AF", fontWeight: 700, padding: "3px 12px" }}>{i + 1}</td>
                      <td className={s.td} style={{ padding: "3px 12px" }}>{a.action}</td>
                      <td className={s.td} style={{ padding: "3px 12px" }}>{a.attempts?.toLocaleString() ?? "-"}건</td>
                      <td className={s.td} style={{ padding: "3px 12px" }}>{a.successRate?.toFixed(1) ?? "-"}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </ReportSection>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ fontSize: "11px", display: "flex", alignItems: "center", gap: "4px" }}>
      <span style={{ width: "10px", height: "10px", borderRadius: "2px", backgroundColor: color, display: "inline-block" }} />
      {label}
    </span>
  );
}
