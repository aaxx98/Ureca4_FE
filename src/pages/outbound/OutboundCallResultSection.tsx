import type { OutboundCallResultResponse } from "../../shared/api/generated/api.schemas";
import { ReportSection } from "../admin-report/ReportSection";
import * as ob from "./OutboundPage.css";
import { fmtRate } from "./outboundUtils";

interface Props {
  data?: OutboundCallResultResponse;
  isPending: boolean;
}

export function OutboundCallResultSection({ data, isPending }: Props) {
  const dist = data?.distribution;

  return (
    <ReportSection title="발신 결과 분포" isPending={isPending} hasData={!!dist}>
      {dist && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "8px" }}>
          <div className={ob.distCardVariant.green}>
            <p className={ob.distLabelVariant.green}>CONVERTED</p>
            <p className={ob.distValueVariant.green}>{dist.converted?.count?.toLocaleString() ?? "-"}</p>
            <p className={ob.distRateVariant.green}>{fmtRate(dist.converted?.rate)}</p>
          </div>
          <div className={ob.distCardVariant.red}>
            <p className={ob.distLabelVariant.red}>REJECTED</p>
            <p className={ob.distValueVariant.red}>{dist.rejected?.count?.toLocaleString() ?? "-"}</p>
            <p className={ob.distRateVariant.red}>{fmtRate(dist.rejected?.rate)}</p>
          </div>
        </div>
      )}
    </ReportSection>
  );
}
