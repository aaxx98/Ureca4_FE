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
    <div className={s.satWrap}>
      <div className={s.satScoreBlock}>
        <span className={s.satScoreBig}>{satisfactionScore?.toFixed(1) ?? "-"}</span>
        <div className={s.satScoreMeta}>
          <span className={s.satOutOf}>/ 5.0점</span>
          {teamAvgSatisfactionScore != null && (
            <span className={s.satTeam}>팀 평균 {teamAvgSatisfactionScore.toFixed(1)}점</span>
          )}
        </div>
      </div>
      <div className={s.satStars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} style={{ color: (satisfactionScore ?? 0) >= star ? "#E1006A" : "#E5E7EB", fontSize: "24px" }}>★</span>
        ))}
      </div>
      <div className={s.satResponseRow}>
        <span className={s.satResponseLabel}>응답률</span>
        <span className={s.satResponseValue}>{responseRate?.toFixed(1) ?? "-"}%</span>
      </div>
    </div>
  );
}
