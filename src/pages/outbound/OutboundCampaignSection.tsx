import type { OutboundCampaignResponse } from "../../shared/api/generated/api.schemas";
import * as rs from "../admin-report/AdminReportPage.css";
import { ReportSection } from "../admin-report/ReportSection";
import * as ob from "./OutboundPage.css";
import { fmtDuration, fmtRate, fmtRevenue } from "./outboundUtils";

interface Props {
  data?: OutboundCampaignResponse;
  isPending: boolean;
}

export function OutboundCampaignSection({ data, isPending }: Props) {
  const campaigns = data?.campaigns ?? [];
  const total = data?.total;

  return (
    <ReportSection title="캠페인 성과 현황" isPending={isPending} hasData={campaigns.length > 0}>
      <div className={rs.tableWrap}>
        <table className={rs.table}>
          <thead>
            <tr>
              <th className={rs.th}>카테고리</th>
              <th className={rs.th}>상태</th>
              <th className={rs.th} style={{ textAlign: "center" }}>총 발신</th>
              <th className={rs.th} style={{ textAlign: "center" }}>전환율</th>
              <th className={rs.th} style={{ textAlign: "center" }}>AHT</th>
              <th className={rs.th} style={{ textAlign: "center" }}>CSAT</th>
              <th className={rs.th} style={{ textAlign: "right" }}>매출기여</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => {
              const rateClass = (c.conversionRate ?? 0) >= 70 ? ob.convRateGreen : ob.convRate;
              return (
                <tr key={c.categoryCode} className={ob.campaignTr}>
                  <td className={rs.td}>
                    {c.categoryName ?? "-"}
                    <br /><span style={{ fontSize: "11px", color: "#b2bec3" }}>{c.categoryCode}</span>
                  </td>
                  <td className={rs.td}>
                    <span className={ob.statusBadgeVariant[c.isActive ? "active" : "done"]}>
                      {c.isActive ? "진행중" : "종료"}
                    </span>
                  </td>
                  <td className={rs.td} style={{ textAlign: "center" }}>{c.totalCount?.toLocaleString() ?? "-"}</td>
                  <td className={rs.td} style={{ textAlign: "center" }}>
                    <span className={rateClass}>{fmtRate(c.conversionRate)}</span>
                  </td>
                  <td className={rs.td} style={{ textAlign: "center", color: "#0984e3" }}>{fmtDuration(c.avgDurationSec)}</td>
                  <td className={rs.td} style={{ textAlign: "center" }}>{c.avgSatisfiedScore?.toFixed(1) ?? "-"}</td>
                  <td className={rs.td} style={{ textAlign: "right", fontWeight: 700, color: "#e6007e" }}>{c.estimatedRevenue ? fmtRevenue(c.estimatedRevenue) : <span style={{ color: "#888" }}>-</span>}</td>
                </tr>
              );
            })}
          </tbody>
          {total && (
            <tfoot>
              <tr className={ob.campaignFooter}>
                <td className={rs.td} colSpan={2}>합계</td>
                <td className={rs.td} style={{ textAlign: "center" }}>{total.totalCount?.toLocaleString() ?? "-"}</td>
                <td className={rs.td} style={{ textAlign: "center" }}>{fmtRate(total.conversionRate)}</td>
                <td className={rs.td} style={{ textAlign: "center", color: "#0984e3" }}>{fmtDuration(total.avgDurationSec)}</td>
                <td className={rs.td} style={{ textAlign: "center" }}>{total.avgSatisfiedScore?.toFixed(1) ?? "-"}</td>
                <td className={rs.td} style={{ textAlign: "right" }}>{fmtRevenue(total.estimatedRevenue)}</td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </ReportSection>
  );
}
