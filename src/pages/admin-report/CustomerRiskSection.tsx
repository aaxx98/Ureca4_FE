import type { CustomerRiskCompareResponse, CustomerRiskResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  risk: CustomerRiskResponse | undefined;
  compare: CustomerRiskCompareResponse | undefined;
  riskPending: boolean;
  comparePending: boolean;
}

const RISK_LABELS: { key: keyof CustomerRiskResponse; label: string }[] = [
  { key: "fraudSuspect", label: "사기 의심" },
  { key: "maliciousComplaint", label: "악성 민원" },
  { key: "policyAbuse", label: "정책 악용" },
  { key: "excessiveCompensation", label: "과도한 보상" },
  { key: "repeatedComplaint", label: "반복 민원" },
  { key: "phishingVictim", label: "피싱 피해" },
  { key: "churnRisk", label: "해지 위험" },
];

export function CustomerRiskSection({ risk, compare, riskPending, comparePending }: Props) {
  const isPending = riskPending || comparePending;
  const hasData = !!(risk || compare);

  return (
    <ReportSection title="고객 특이사항" isPending={isPending} hasData={hasData}>
      {risk && (
        <>
          <div className={s.riskGrid}>
            {RISK_LABELS.map(({ key, label }) => (
              <div key={key} className={s.riskItem}>
                <p className={s.riskLabel}>{label}</p>
                <p className={s.riskCount}>{(risk[key] as number | undefined) ?? "-"}</p>
              </div>
            ))}
            <div className={s.riskItem}>
              <p className={s.riskLabel}>총 위험 건수</p>
              <p className={s.riskCount}>{risk.totalRiskCount ?? "-"}</p>
            </div>
          </div>
          {risk.surgeAlerts?.surgeDetected && (
            <p className={s.surgeAlert}>
              ⚠ 급증 감지: {risk.surgeAlerts.surgeTypes?.join(", ")} ({risk.surgeAlerts.changeRate?.toFixed(1)}% 변화)
            </p>
          )}
        </>
      )}
      {compare && (
        <>
          <p className={s.subTitle}>기간 비교 ({compare.compareDate} → {compare.baseDate})</p>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th className={s.th}>유형</th>
                  <th className={s.th}>증감</th>
                  <th className={s.th}>증감율</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(compare.changes ?? {}).map(([key, detail]) => (
                  <tr key={key}>
                    <td className={s.td}>{key}</td>
                    <td className={s.td}>{detail.diff != null ? (detail.diff > 0 ? `+${detail.diff}` : detail.diff) : "-"}</td>
                    <td className={s.td}>{detail.changeRate?.toFixed(1) ?? "-"}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </ReportSection>
  );
}
