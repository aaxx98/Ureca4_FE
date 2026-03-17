import type { ConsultationAiAnalysisDto } from "../../../shared/api/generated/api.schemas";
import * as s from "./ConsultationDetailModal.css";

interface Props {
  ai?: ConsultationAiAnalysisDto;
}

export function ConsultationDetailAiAnalysis({ ai }: Props) {
  if (!ai) return <p className={s.stateText}>AI 분석 데이터가 없습니다.</p>;

  return (
    <>
      {(ai.categoryName || ai.categoryCode) && (
        <div className={s.aiBanner}>
          <div className={s.aiBannerLeft}>
            <span className={s.aiBannerTitle}>
              🤖 AI 분석 결과 — {ai.categoryName ?? ""}
            </span>
          </div>
          {ai.categoryCode && <span className={s.aiBannerCode}>{ai.categoryCode}</span>}
        </div>
      )}

      <div className={s.aiCard}>
        <p className={s.aiCardLabel}>AI 요약문</p>
        <p className={ai.rawSummary ? s.aiCardValue : s.aiCardEmpty}>
          {ai.rawSummary ?? "–"}
        </p>
      </div>

      <div className={s.aiTwoCol}>
        <div className={s.aiCard}>
          <p className={s.aiCardLabel}>불만 사유</p>
          <p className={ai.complaintReason ? s.aiCardValue : s.aiCardEmpty}>
            {ai.complaintReason ?? "–"}
          </p>
        </div>
        <div className={s.aiCard}>
          <p className={s.aiCardLabel}>방어 성공 여부</p>
          <p className={ai.defenseSuccess != null ? s.aiCardValue : s.aiCardEmpty}>
            {ai.defenseSuccess != null ? (ai.defenseSuccess ? "성공" : "실패") : "–"}
          </p>
        </div>
      </div>

      <div className={s.aiCard}>
        <p className={s.aiCardLabel}>추출 키워드</p>
        <p className={ai.defenseActions ? s.aiCardValue : s.aiCardEmpty}>
          {ai.defenseActions ?? "–"}
        </p>
      </div>

      {(ai.hasIntent != null || ai.defenseAttempted != null) && (
        <div className={s.aiTwoCol}>
          {ai.hasIntent != null && (
            <div className={s.aiCard}>
              <p className={s.aiCardLabel}>이탈 의도</p>
              <p className={s.aiCardValue}>{ai.hasIntent ? "있음" : "없음"}</p>
            </div>
          )}
          {ai.defenseAttempted != null && (
            <div className={s.aiCard}>
              <p className={s.aiCardLabel}>방어 시도</p>
              <p className={s.aiCardValue}>{ai.defenseAttempted ? "시도함" : "미시도"}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
