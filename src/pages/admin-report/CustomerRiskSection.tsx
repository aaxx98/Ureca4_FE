import type { CustomerRiskCompareResponse, CustomerRiskResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  risk: CustomerRiskResponse | undefined;
  compare: CustomerRiskCompareResponse | undefined;
  riskPending: boolean;
  comparePending: boolean;
  period: string;
}

const RISK_LABELS: { key: keyof CustomerRiskResponse; label: string; emoji: string }[] = [
  { key: "fraudSuspect", label: "사기 의심", emoji: "🕵️" },
  { key: "maliciousComplaint", label: "악성 민원", emoji: "😡" },
  { key: "policyAbuse", label: "정책 악용", emoji: "⚖️" },
  { key: "excessiveCompensation", label: "과도한 보상", emoji: "💸" },
  { key: "repeatedComplaint", label: "반복 민원", emoji: "🔁" },
  { key: "phishingVictim", label: "피싱 피해", emoji: "🎣" },
  { key: "churnRisk", label: "해지 위험", emoji: "🚨" },
];

const KEY_TO_LABEL: Record<string, string> = Object.fromEntries(
  RISK_LABELS.map(({ key, label }) => [key, label])
);

function ChangeRateBadge({ rate }: { rate?: number }) {
  if (rate == null) return null;
  const isUp = rate > 0;
  const isFlat = rate === 0;
  return (
    <span style={{
      fontSize: "10px",
      fontWeight: 700,
      color: isFlat ? "#6B7280" : isUp ? "#DC2626" : "#16A34A",
      marginTop: "2px",
    }}>
      {isFlat ? "=" : isUp ? `▲${rate.toFixed(1)}%` : `▼${Math.abs(rate).toFixed(1)}%`}
    </span>
  );
}

function riskCardStyle(changeRate: number | undefined): React.CSSProperties {
  if (changeRate == null) return { backgroundColor: "#FFF5F9", border: "1px solid #FBCFE8" };
  if (changeRate >= 50) return { backgroundColor: "#FFF5F9", border: "1px solid #FBCFE8" };
  if (changeRate > 0)   return { backgroundColor: "#FFFFFF", border: "1px solid #D1D5DB" };
  if (changeRate === 0) return { backgroundColor: "#FFFFFF", border: "1px solid #D1D5DB" };
  return { backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE" };
}

export function CustomerRiskSection({ risk, compare, riskPending, comparePending, period }: Props) {
  const isPending = riskPending || comparePending;
  const hasData = !!(risk || compare);
  const notice = period === "weekly" ? "주간 미지원 · 일간 데이터" : undefined;

  const changes = compare?.changes ?? {};

  return (
    <ReportSection title="고객 특이사항" isPending={isPending} hasData={hasData} notice={notice}>
      {compare && (
        <p style={{ fontSize: "11px", color: "#6B7280", marginBottom: "8px" }}>
          비교 기간: <strong>{compare.compareDate}</strong> → <strong>{compare.baseDate}</strong>
        </p>
      )}
      {risk && (
        <>
          <div className={s.riskGrid}>
            {RISK_LABELS.map(({ key, label, emoji }) => {
              const changeRate = changes[key]?.changeRate;
              return (
                <div key={key} className={s.riskItem} style={riskCardStyle(changeRate)}>
                  <p className={s.riskLabel}>{emoji} {label}</p>
                  <p className={s.riskCount}>{(risk[key] as number | undefined) ?? "-"}</p>
                  <ChangeRateBadge rate={changeRate} />
                </div>
              );
            })}
            <div className={s.riskItem} style={riskCardStyle(compare?.changes?.totalRiskCount?.changeRate)}>
              <p className={s.riskLabel}>⚠️ 총 위험 건수</p>
              <p className={s.riskCount}>{risk.totalRiskCount ?? "-"}</p>
              <ChangeRateBadge rate={compare?.changes?.totalRiskCount?.changeRate} />
            </div>
          </div>
          {risk.surgeAlerts?.surgeDetected && (
            <p className={s.surgeAlert}>
              ⚠ 급증 감지: {risk.surgeAlerts.surgeTypes?.map((t) => KEY_TO_LABEL[t] ?? t).join(", ")} ({risk.surgeAlerts.changeRate?.toFixed(1)}% 변화)
            </p>
          )}
        </>
      )}
    </ReportSection>
  );
}
