import type { QualityAnalysisResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AnalysisPage.css";
import { QualityBar } from "./QualityBar";

interface Props {
  quality: QualityAnalysisResponse | undefined;
  isPending?: boolean;
}

const QUALITY_BARS: { label: string; key: keyof QualityAnalysisResponse }[] = [
  { label: "사과 표현", key: "apologyRate" },
  { label: "마무리 인사", key: "closingRate" },
  { label: "친절 표현", key: "courtesyRate" },
  { label: "신속 응대", key: "promptnessRate" },
  { label: "정확 응대", key: "accuracyRate" },
  { label: "대기 안내", key: "waitingGuideRate" },
];

export function QualitySection({ quality, isPending }: Props) {
  if (isPending) return <p className={s.stateText}>불러오는 중...</p>;
  if (!quality) return <p className={s.stateText}>데이터가 없습니다.</p>;

  return (
    <div>
      <div className={s.qualityMeta}>
        <span>분석 건수: {quality.analyzedCount ?? "-"}건</span>
        <span>
          공감 표현: {quality.empathyCount ?? "-"}회 (건당{" "}
          {quality.avgEmpathyPerConsult?.toFixed(1) ?? "-"}회)
        </span>
      </div>
      <div className={s.qualityGrid}>
        {QUALITY_BARS.map(({ label, key }) => (
          <QualityBar key={key} label={label} value={quality[key] as number | undefined} />
        ))}
      </div>
      <div className={s.scoreRow}>
        <span className={s.scoreLabel}>종합 점수</span>
        <span className={s.scoreValue}>{quality.totalScore?.toFixed(2) ?? "-"}</span>
        <span className={s.scoreMax}>/ 5.0</span>
      </div>
    </div>
  );
}
