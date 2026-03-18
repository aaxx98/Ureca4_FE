import type { ConsultationAiAnalysisDto } from "../../../shared/api/generated/api.schemas";
import * as s from "./ConsultationDetailModal.css";

interface Props {
  ai?: ConsultationAiAnalysisDto;
}

export function ConsultationDetailAiAnalysis({ ai }: Props) {
  if (!ai) return <p className={s.stateText}>AI 분석 데이터가 없습니다.</p>;

  const isOTB = ai.categoryCode?.includes("OTB") ?? false;
  const isCHN = ai.categoryCode?.includes("CHN") ?? false;

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

      {isOTB && (
        <>
          {ai.outboundReport != null && (
            <div className={s.aiCard}>
              <p className={s.aiCardLabel}>아웃바운드 리포트</p>
              <p className={ai.outboundReport ? s.aiCardValue : s.aiCardEmpty}>
                {ai.outboundReport ?? "–"}
              </p>
            </div>
          )}

          {ai.outboundCallResult != null && (
            <div className={s.aiCard}>
              <p className={s.aiCardLabel}>아웃바운드 콜 결과</p>
              <p className={ai.outboundCallResult ? s.aiCardValue : s.aiCardEmpty}>
                {ai.outboundCallResult ?? "–"}
              </p>
            </div>
          )}

          <div className={s.aiCard}>
            <p className={s.aiCardLabel}>AI 요약문</p>
            <p className={ai.rawSummary ? s.aiCardValue : s.aiCardEmpty}>
              {ai.rawSummary ?? "–"}
            </p>
          </div>
        </>
      )}

      {isCHN && (
        <>
          <div className={s.aiCard}>
            <p className={s.aiCardLabel}>불만 사유</p>
            <p className={ai.complaintReason ? s.aiCardValue : s.aiCardEmpty}>
              {ai.complaintReason ?? "–"}
            </p>
          </div>

          <div className={s.aiTwoCol}>
            <div className={s.aiCard}>
              <p className={s.aiCardLabel}>방어 시도</p>
              <p className={ai.defenseAttempted != null ? s.aiCardValue : s.aiCardEmpty}>
                {ai.defenseAttempted != null ? (ai.defenseAttempted ? "시도함" : "미시도") : "–"}
              </p>
            </div>
            <div className={s.aiCard}>
              <p className={s.aiCardLabel}>방어 성공 여부</p>
              <p className={ai.defenseSuccess != null ? s.aiCardValue : s.aiCardEmpty}>
                {ai.defenseSuccess != null ? (ai.defenseSuccess ? "성공" : "실패") : "–"}
              </p>
            </div>
          </div>

          {ai.defenseActions && (
            <div className={s.aiCard}>
              <p className={s.aiCardLabel}>방어 액션</p>
              <p className={s.aiCardValue}>{ai.defenseActions}</p>
            </div>
          )}

          <div className={s.aiCard}>
            <p className={s.aiCardLabel}>AI 요약문</p>
            <p className={ai.rawSummary ? s.aiCardValue : s.aiCardEmpty}>
              {ai.rawSummary ?? "–"}
            </p>
          </div>
        </>
      )}

      {!isOTB && !isCHN && (
        <div className={s.aiCard}>
          <p className={s.aiCardLabel}>AI 요약문</p>
          <p className={ai.rawSummary ? s.aiCardValue : s.aiCardEmpty}>
            {ai.rawSummary ?? "–"}
          </p>
        </div>
      )}
    </>
  );
}
