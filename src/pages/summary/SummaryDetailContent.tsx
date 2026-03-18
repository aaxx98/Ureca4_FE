import type { ConsultationSummaryDetailResponse } from "../../shared/api/generated/api.schemas";
import { RISK_LEVEL_MAP, RISK_TYPE_MAP } from "../../shared/config/meta";
import * as s from "./SummaryPage.css";

function BoolBadge({ value, trueLabel, falseLabel, warn = false }: { value?: boolean; trueLabel: string; falseLabel: string; warn?: boolean }) {
  if (value == null) return null;
  const cls = value ? (warn ? s.boolBadgeWarn : s.boolBadgeYes) : s.boolBadgeNo;
  return <span className={cls}>{value ? trueLabel : falseLabel}</span>;
}

interface Props {
  data: ConsultationSummaryDetailResponse;
}

export function SummaryDetailContent({ data }: Props) {
  const { summary, cancellation, riskFlags, iam, outbound } = data;
  const hasCancellation = cancellation?.intent != null || cancellation?.defenseAttempted != null || cancellation?.defenseSuccess != null;

  return (
    <div className={s.detailContent}>

      {/* AI 요약 */}
      {summary?.content && (
        <section className={s.contentSection}>
          <p className={s.contentSectionTitle}>AI 요약</p>
          <div className={s.summaryBox}>{summary.content}</div>
          {(summary.keywords?.length ?? 0) > 0 && (
            <div className={s.keywordsRow}>
              {summary.keywords?.map((kw) => <span key={kw} className={s.keyword}>#{kw}</span>)}
            </div>
          )}
        </section>
      )}

      {/* 해지 분석 */}
      {hasCancellation && (
        <section className={s.contentSection}>
          <p className={s.contentSectionTitle}>해지 분석</p>
          <div className={s.boolBadgeRow}>
            <span className={s.boolBadgeLabel}>해지 의도</span>
            <BoolBadge value={cancellation?.intent} trueLabel="⚠ 있음" falseLabel="없음" warn />
            <span className={s.boolBadgeSep} />
            <span className={s.boolBadgeLabel}>방어 시도</span>
            <BoolBadge value={cancellation?.defenseAttempted} trueLabel="완료" falseLabel="미시도" />
            <span className={s.boolBadgeSep} />
            <span className={s.boolBadgeLabel}>방어 성공</span>
            <BoolBadge value={cancellation?.defenseSuccess} trueLabel="성공" falseLabel="실패" />
          </div>
          {cancellation?.complaintReasons && (
            <div className={s.infoRow} style={{ marginBottom: "8px" }}>
              <span className={s.infoRowLabel}>불만 사유</span>
              <span className={s.infoRowValue}>{cancellation.complaintReasons}</span>
            </div>
          )}
          {(cancellation?.defenseActions?.length ?? 0) > 0 && (
            <div className={s.keywordsRow}>
              {cancellation?.defenseActions?.map((a) => <span key={a} className={s.defenseTag}>{a}</span>)}
            </div>
          )}
        </section>
      )}

      {/* 리스크 플래그 */}
      {(riskFlags?.length ?? 0) > 0 && (
        <section className={s.contentSection}>
          <p className={s.contentSectionTitle}>리스크 플래그</p>
          <div className={s.riskList}>
            {riskFlags?.map((rf) => {
              const lvl = (rf.riskLevel ?? "LOW") as keyof typeof s.riskLevelBadge;
              return (
                <div key={`${rf.riskType}-${rf.riskLevel}`} className={s.riskRow}>
                  <span className={s.riskLevelBadge[lvl] ?? s.riskLevelBadge.LOW}>
                    {RISK_LEVEL_MAP[rf.riskLevel ?? ""] ?? rf.riskLevel}
                  </span>
                  <span className={s.riskType}>{RISK_TYPE_MAP[rf.riskType ?? ""] ?? rf.riskType}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* IAM 분석 */}
      {iam && (iam.issue || iam.action || iam.memo || (iam.matchKeyword?.length ?? 0) > 0) && (
        <section className={s.contentSection}>
          <p className={s.contentSectionTitle}>IAM 분석</p>
          {(iam.issue || iam.action) && (
            <div className={s.iamGrid}>
              <div>
                <p className={s.iamFieldLabel}>이슈</p>
                <p className={s.iamFieldValue}>{iam.issue || "-"}</p>
              </div>
              <div className={s.iamDivider} />
              <div>
                <p className={s.iamFieldLabel}>조치</p>
                <p className={s.iamFieldValue}>{iam.action || "-"}</p>
              </div>
            </div>
          )}
          {(iam.matchKeyword?.length ?? 0) > 0 && (
            <div className={s.keywordsRow}>
              {iam.matchKeyword?.map((k) => <span key={k} className={s.keyword}>{k}</span>)}
            </div>
          )}
          {iam.memo && <div className={s.summaryBoxBlue} style={{ marginTop: "8px" }}>{iam.memo}</div>}
        </section>
      )}

      {/* 아웃바운드 */}
      {outbound?.callResult && (
        <section className={s.contentSection}>
          <p className={s.contentSectionTitle}>아웃바운드</p>
          <div className={s.infoRow} style={{ marginBottom: "8px" }}>
            <span className={s.infoRowLabel}>결과</span>
            <span className={s.infoRowValue}>{outbound.callResult}</span>
          </div>
          {outbound.outboundReport && <div className={s.summaryBoxGray}>{outbound.outboundReport}</div>}
        </section>
      )}

    </div>
  );
}
