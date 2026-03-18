import type { AgentSatisfactionResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AnalysisPage.css";

interface Props {
  satisfaction: AgentSatisfactionResponse | undefined;
  isPending: boolean;
}

export function SatisfactionSection({ satisfaction, isPending }: Props) {
  if (isPending) return <p className={s.stateText}>불러오는 중...</p>;
  if (!satisfaction) return <p className={s.stateText}>데이터가 없습니다.</p>;

  const { satisfactionScore, teamAvgSatisfactionScore, responseRate } = satisfaction;

  return (
    <div>
      <div className={s.satMain}>
        <div>
          <span className={s.satScore}>{satisfactionScore?.toFixed(1) ?? "-"}</span>
          <span className={s.satUnit}>/ 5.0점</span>
        </div>
        {teamAvgSatisfactionScore != null && (
          <p className={s.satTeam}>팀 평균: {teamAvgSatisfactionScore.toFixed(1)}점</p>
        )}
      </div>
      <div className={s.satResponseRow}>
        <span className={s.satResponseLabel}>응답률</span>
        <span className={s.satResponseValue}>
          {responseRate != null ? `${responseRate.toFixed(1)}%` : "-"}
        </span>
      </div>
    </div>
  );
}
