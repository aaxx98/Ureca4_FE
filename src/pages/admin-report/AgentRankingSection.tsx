import type { AgentRankingResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

const MEDALS: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

interface Props {
  data: AgentRankingResponse | undefined;
  isPending: boolean;
}

export function AgentRankingSection({ data, isPending }: Props) {
  const agents = data?.agents ?? [];
  return (
    <ReportSection title="상담사 성과 순위 TOP 10" isPending={isPending} hasData={agents.length > 0}>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.th}>순위</th>
              <th className={s.th}>상담사</th>
              <th className={s.th}>처리 건수</th>
              <th className={s.th}>평균 시간</th>
              <th className={s.th}>만족도</th>
              <th className={s.th}>품질 점수</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((a) => {
              const isTop3 = (a.rank ?? 99) <= 3;
              const cell = isTop3 ? s.tdTop3 : s.td;
              const medal = a.rank != null ? MEDALS[a.rank] : undefined;
              return (
                <tr key={a.agentId}>
                  <td className={cell}>
                    <span className={s.rankNum}>{a.rank}</span>
                    {medal && <span style={{ marginLeft: "4px" }}>{medal}</span>}
                  </td>
                  <td className={cell}>{a.agentName ?? "-"}</td>
                  <td className={cell}>{a.consultCount?.toLocaleString() ?? "-"}건</td>
                  <td className={cell}>{a.avgDurationMinutes ?? "-"}분</td>
                  <td className={cell} style={{ fontWeight: "bold" }}>
                    {a.avgSatisfiedScore?.toFixed(1) ?? "-"}<span style={{ fontWeight: "normal", color: "#6B7280" }}>/5.0</span>
                  </td>
                  <td className={cell} style={{ fontWeight: "bold" }}>
                    {a.qualityScore?.toFixed(1) ?? "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </ReportSection>
  );
}
