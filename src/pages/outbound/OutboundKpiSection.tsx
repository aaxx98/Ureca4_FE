import type { OutboundKpiResponse } from "../../shared/api/generated/api.schemas";
import { ReportSection } from "../admin-report/ReportSection";
import * as ob from "./OutboundPage.css";
import { fmtDuration, fmtRate, fmtRevenue } from "./outboundUtils";

interface Props {
  data?: OutboundKpiResponse;
  isPending: boolean;
}

export function OutboundKpiSection({ data, isPending }: Props) {
  return (
    <ReportSection title="KPI 요약" isPending={isPending} hasData={!!data}>
      <div className={ob.kpiGrid}>
        <div className={ob.kpiCardHighlight}>
          <p className={ob.kpiLabelVariant.light}>총 건 수</p>
          <p className={ob.kpiValueVariant.light}>{data?.totalCount?.toLocaleString() ?? "-"}</p>
        </div>

        <div className={ob.kpiCard}>
          <p className={ob.kpiLabelVariant.normal}>전환율</p>
          <p className={ob.kpiValueVariant.normal}>{fmtRate(data?.conversionRate)}</p>
        </div>

        <div className={ob.kpiCard}>
          <p className={ob.kpiLabelVariant.normal}>전환 성공</p>
          <p className={ob.kpiValueVariant.normal}>{data?.convertedCount?.toLocaleString() ?? "-"}</p>
        </div>

        <div className={ob.kpiCard}>
          <p className={ob.kpiLabelVariant.normal}>거절 건수</p>
          <p className={ob.kpiValueVariant.normal}>{data?.rejectedCount?.toLocaleString() ?? "-"}</p>
        </div>

        <div className={ob.kpiCard}>
          <p className={ob.kpiLabelVariant.normal}>평균 통화 시간</p>
          <p className={ob.kpiValueVariant.normal} style={{ fontSize: "22px" }}>{fmtDuration(data?.avgDurationSec)}</p>
        </div>

        <div className={ob.kpiCard}>
          <p className={ob.kpiLabelVariant.normal}>예상 매출 기여</p>
          <p className={ob.kpiValueVariant.normal} style={{ fontSize: "18px" }}>{fmtRevenue(data?.estimatedRevenue)}</p>
        </div>
      </div>
    </ReportSection>
  );
}
