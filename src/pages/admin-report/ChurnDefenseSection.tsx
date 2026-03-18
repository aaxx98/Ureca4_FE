import type { ChurnDefenseResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  summary: ChurnDefenseResponse | undefined;
  customerTypes: ChurnDefenseResponse | undefined;
  complaintReasons: ChurnDefenseResponse | undefined;
  actions: ChurnDefenseResponse | undefined;
  summaryPending: boolean;
  ctPending: boolean;
  crPending: boolean;
  actPending: boolean;
}

export function ChurnDefenseSection({ summary, customerTypes, complaintReasons, actions, summaryPending, ctPending, crPending, actPending }: Props) {
  const isPending = summaryPending || ctPending || crPending || actPending;
  const hasData = !!(summary || customerTypes || complaintReasons || actions);

  return (
    <ReportSection title="해지방어 분석" isPending={isPending} hasData={hasData}>
      {summary && (
        <div className={s.statGrid} style={{ marginBottom: "16px" }}>
          {[
            { label: "시도 건수", value: `${summary.totalAttempts ?? "-"}건` },
            { label: "성공 건수", value: `${summary.successCount ?? "-"}건` },
            { label: "성공률", value: `${summary.successRate?.toFixed(1) ?? "-"}%` },
            { label: "평균 소요 시간", value: `${summary.avgDurationSec ?? "-"}초` },
          ].map(({ label, value }) => (
            <div key={label} className={s.statCard}>
              <p className={s.statLabel}>{label}</p>
              <p className={s.statValue}>{value}</p>
            </div>
          ))}
        </div>
      )}

      {(complaintReasons?.complaintReasons ?? []).length > 0 && (
        <>
          <p className={s.subTitle}>불만 사유별 방어율</p>
          {complaintReasons!.complaintReasons!.map((r, i) => (
            <div key={`${r.reason}-${i}`} className={s.barRow}>
              <span className={s.barLabel}>{r.reason}</span>
              <div className={s.barTrack}>
                <div className={s.barFill} style={{ width: `${Math.min(r.successRate ?? 0, 100)}%` }} />
              </div>
              <span className={s.barPct}>{r.successRate?.toFixed(1) ?? "-"}%</span>
            </div>
          ))}
        </>
      )}

      {(customerTypes?.byCustomerType ?? []).length > 0 && (
        <>
          <p className={s.subTitle}>고객 유형별 해지 분석</p>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead><tr><th className={s.th}>유형</th><th className={s.th}>주요 불만 사유</th><th className={s.th}>건수</th><th className={s.th}>방어 성공률</th></tr></thead>
              <tbody>
                {customerTypes!.byCustomerType!.map((ct, i) => (
                  <tr key={`${ct.type}-${i}`}>
                    <td className={s.td}>{ct.type}</td>
                    <td className={s.td}>{ct.mainComplaintReason ?? "-"}</td>
                    <td className={s.td}>{ct.attempts?.toLocaleString() ?? "-"}건</td>
                    <td className={s.td}>{ct.successRate?.toFixed(1) ?? "-"}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {(actions?.byAction ?? []).length > 0 && (
        <>
          <p className={s.subTitle}>상담사 액션별 현황</p>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead><tr><th className={s.th}>액션</th><th className={s.th}>시도</th><th className={s.th}>성공률</th></tr></thead>
              <tbody>
                {actions!.byAction!.map((a, i) => (
                  <tr key={`${a.action}-${i}`}>
                    <td className={s.td}>{a.action}</td>
                    <td className={s.td}>{a.attempts?.toLocaleString() ?? "-"}건</td>
                    <td className={s.td}>{a.successRate?.toFixed(1) ?? "-"}%</td>
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
