import type { AgentRankingResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

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
            {agents.map((a) => (
              <tr key={a.agentId}>
                <td className={s.td}><span className={s.rankBadge}>{a.rank}</span></td>
                <td className={s.td}>{a.agentName ?? "-"}</td>
                <td className={s.td}>{a.consultCount?.toLocaleString() ?? "-"}건</td>
                <td className={s.td}>{a.avgDurationMinutes?.toFixed(0) ?? "-"}초</td>
                <td className={s.td}>{a.avgSatisfiedScore?.toFixed(1) ?? "-"}</td>
                <td className={s.td}>{a.qualityScore?.toFixed(1) ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ReportSection>
  );
}
