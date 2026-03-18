import type { SubscriptionAnalysisResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  products: SubscriptionAnalysisResponse | undefined;
  ageGroups: SubscriptionAnalysisResponse | undefined;
  productsPending: boolean;
  agePending: boolean;
}

export function SubscriptionSection({ products, ageGroups, productsPending, agePending }: Props) {
  const isPending = productsPending || agePending;
  const hasData = !!(products || ageGroups);

  return (
    <ReportSection title="구독 상품 분석" isPending={isPending} hasData={hasData}>
      <div className={s.twoCol}>
        <div>
          <p className={s.subTitle}>신규 가입 TOP 6</p>
          <div className={s.tagList}>
            {(products?.newSubscriptions ?? []).map((p, i) => (
              <span key={`new-${p.productId ?? i}`} className={s.tag}>
                {p.productName} <span className={s.tagCount}>{p.count?.toLocaleString()}</span>
              </span>
            ))}
          </div>
          <p className={s.subTitle}>해지 TOP 6</p>
          <div className={s.tagList}>
            {(products?.canceledSubscriptions ?? []).map((p, i) => (
              <span key={`cancel-${p.productId ?? i}`} className={s.tag}>
                {p.productName} <span className={s.tagCount}>{p.count?.toLocaleString()}</span>
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className={s.subTitle}>연령대별 선호 상품</p>
          {(ageGroups?.byAgeGroup ?? []).map((ag, i) => (
            <div key={`${ag.ageGroup}-${i}`} style={{ marginBottom: "8px" }}>
              <p className={s.statLabel}>{ag.ageGroup}</p>
              <div className={s.tagList}>
                {(ag.preferredProducts ?? []).map((p, pi) => (
                  <span key={`${p.productId}-${pi}`} className={s.tag}>
                    {p.productName} <span className={s.tagCount}>{p.count}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ReportSection>
  );
}
