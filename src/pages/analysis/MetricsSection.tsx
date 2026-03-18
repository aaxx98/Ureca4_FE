import type { AgentMetricsResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AnalysisPage.css";
import { StatCard } from "./StatCard";

interface Props {
  metrics: AgentMetricsResponse | undefined;
  isPending: boolean;
}

function fmt(v: number | undefined) {
  return v != null ? v.toFixed(1) : undefined;
}

export function MetricsSection({ metrics, isPending }: Props) {
  if (isPending) return <p className={s.stateText}>불러오는 중...</p>;
  if (!metrics) return <p className={s.stateText}>데이터가 없습니다.</p>;

  return (
    <div className={s.statGrid}>
      <StatCard
        label="상담 건수"
        value={metrics.myConsultCount != null ? `${metrics.myConsultCount}건` : undefined}
        teamValue={metrics.teamAvgConsultCount != null ? `${metrics.teamAvgConsultCount}건` : undefined}
      />
      <StatCard
        label="평균 상담 시간"
        value={metrics.myAvgDuration}
        teamValue={metrics.teamAvgDuration}
      />
      <StatCard
        label="품질 점수"
        value={fmt(metrics.myQualityScore)}
        teamValue={fmt(metrics.teamAvgQualityScore)}
      />
      <StatCard
        label="만족도"
        value={fmt(metrics.mySatisfactionScore)}
        teamValue={fmt(metrics.teamAvgSatisfactionScore)}
      />
      <StatCard
        label="IAM 일치율"
        value={metrics.iamMatchRate != null ? `${metrics.iamMatchRate.toFixed(1)}%` : undefined}
      />
    </div>
  );
}
