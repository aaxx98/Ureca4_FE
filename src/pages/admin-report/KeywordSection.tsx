import type { GetKeywordCustomerTypes200, GetKeywordLongTerm200, GetKeywordTop200 } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  top: GetKeywordTop200 | undefined;
  longTerm: GetKeywordLongTerm200 | undefined;
  customerTypes: GetKeywordCustomerTypes200 | undefined;
  topPending: boolean;
  ltPending: boolean;
  ctPending: boolean;
}

function KeywordTags({ data }: { data: Record<string, unknown> | undefined }) {
  if (!data) return <p style={{ fontSize: "12px", color: "#6B7280" }}>데이터 없음</p>;
  const entries = Object.entries(data).slice(0, 10);
  return (
    <div className={s.tagList}>
      {entries.map(([key, val]) => (
        <span key={key} className={s.tag}>
          {key} {val != null && <span className={s.tagCount}>{String(val)}</span>}
        </span>
      ))}
    </div>
  );
}

export function KeywordSection({ top, longTerm, customerTypes, topPending, ltPending, ctPending }: Props) {
  const isPending = topPending || ltPending || ctPending;
  const hasData = !!(top || longTerm || customerTypes);

  return (
    <ReportSection title="키워드 분석" isPending={isPending} hasData={hasData}>
      <p className={s.subTitle}>상위 키워드</p>
      <KeywordTags data={top} />
      <p className={s.subTitle}>장기 상위 유지 키워드</p>
      <KeywordTags data={longTerm} />
      <p className={s.subTitle}>고객 유형별 키워드</p>
      <KeywordTags data={customerTypes} />
    </ReportSection>
  );
}
