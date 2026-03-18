import { useState } from "react";
import type { OutboundAgentResponse } from "../../shared/api/generated/api.schemas";
import * as rs from "../admin-report/AdminReportPage.css";
import { ReportSection } from "../admin-report/ReportSection";
import * as ob from "./OutboundPage.css";
import { fmtDuration, fmtRate, getRankVariant } from "./outboundUtils";

interface Props {
  data?: OutboundAgentResponse;
  isPending: boolean;
}

const PAGE_SIZE = 6;

export function OutboundAgentSection({ data, isPending }: Props) {
  const [page, setPage] = useState(1);
  const agents     = data?.agents ?? [];
  const totalPages = Math.ceil(agents.length / PAGE_SIZE);
  const paged      = agents.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <ReportSection title="상담사별 아웃바운드 실적" isPending={isPending} hasData={agents.length > 0}>
      <table className={rs.table}>
        <thead>
          <tr>
            <th className={rs.th} style={{ width: "50px", textAlign: "center" }}>순위</th>
            <th className={rs.th}>상담사</th>
            <th className={rs.th} style={{ textAlign: "center" }}>발신</th>
            <th className={rs.th} style={{ textAlign: "center" }}>전환</th>
            <th className={rs.th} style={{ textAlign: "center" }}>전환율</th>
            <th className={rs.th} style={{ textAlign: "center" }}>평균통화</th>
          </tr>
        </thead>
        <tbody>
          {paged.map((a) => (
            <tr key={a.agentId} className={ob.campaignTr}>
              <td className={rs.td} style={{ textAlign: "center" }}>
                <span className={ob.rankBadgeVariant[getRankVariant(a.rank)]}>{a.rank}</span>
              </td>
              <td className={rs.td} style={{ fontWeight: 600 }}>{a.agentName ?? "-"}</td>
              <td className={rs.td} style={{ textAlign: "center" }}>{a.totalCount?.toLocaleString() ?? "-"}</td>
              <td className={rs.td} style={{ textAlign: "center" }}>{a.convertedCount?.toLocaleString() ?? "-"}</td>
              <td className={rs.td} style={{ textAlign: "center", fontWeight: 700, color: "#e6007e" }}>
                {fmtRate(a.conversionRate)}
              </td>
              <td className={rs.td} style={{ textAlign: "center", color: "#0984e3" }}>
                {fmtDuration(a.avgDurationSec)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", marginTop: "12px" }}>
          <button
            type="button"
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            style={{ padding: "4px 10px", border: "1px solid #e5e7eb", borderRadius: "6px", background: "#fff", cursor: page === 1 ? "not-allowed" : "pointer", color: page === 1 ? "#d1d5db" : "#374151" }}
          >‹</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
            <button
              key={pg}
              type="button"
              onClick={() => setPage(pg)}
              style={{ padding: "4px 10px", border: "1px solid", borderRadius: "6px", cursor: "pointer", fontWeight: pg === page ? 700 : 400, background: pg === page ? "#e6007e" : "#fff", borderColor: pg === page ? "#e6007e" : "#e5e7eb", color: pg === page ? "#fff" : "#374151" }}
            >{pg}</button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            style={{ padding: "4px 10px", border: "1px solid #e5e7eb", borderRadius: "6px", background: "#fff", cursor: page === totalPages ? "not-allowed" : "pointer", color: page === totalPages ? "#d1d5db" : "#374151" }}
          >›</button>
        </div>
      )}
    </ReportSection>
  );
}
