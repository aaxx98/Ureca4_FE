import type { ProductCount, SubscriptionAnalysisResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  products: SubscriptionAnalysisResponse | undefined;
  ageGroups: SubscriptionAnalysisResponse | undefined;
  productsPending: boolean;
  agePending: boolean;
  period: string;
}

const AGE_COLORS: Record<string, { color: string; bg: string }> = {
  "10대": { color: "#7C3AED", bg: "#F5F3FF" },
  "20대": { color: "#2563EB", bg: "#DBEAFE" },
  "30대": { color: "#059669", bg: "#D1FAE5" },
  "40대": { color: "#D97706", bg: "#FEF3C7" },
  "50대": { color: "#DC2626", bg: "#FEE2E2" },
  "60대": { color: "#DB2777", bg: "#FCE7F3" },
};

function getAgeColor(ageGroup: string) {
  for (const key of Object.keys(AGE_COLORS)) {
    if (ageGroup.includes(key)) return AGE_COLORS[key];
  }
  return { color: "#6B7280", bg: "#F3F4F6" };
}

function ProductRankList({ items }: { items: ProductCount[] }) {
  if (items.length === 0) return <p style={{ fontSize: "12px", color: "#6B7280" }}>데이터 없음</p>;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((p, i) => (
        <div key={`${p.productId ?? i}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 0", borderBottom: i < items.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "12px", fontWeight: "700", color: i < 3 ? "#E1006A" : "#9CA3AF", width: "16px", textAlign: "center" }}>{i + 1}</span>
            <span style={{ fontSize: "13px", color: "#1A1A2E" }}>{p.productName ?? "-"}</span>
          </div>
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#1A1A2E" }}>{p.count?.toLocaleString() ?? "-"}건</span>
        </div>
      ))}
    </div>
  );
}

const cardBase: React.CSSProperties = { borderRadius: "10px", padding: "16px 18px", margin: "0 12.5%" };

export function SubscriptionSection({ products, ageGroups, productsPending, agePending }: Props) {
  const isPending = productsPending || agePending;
  const hasData = !!(products || ageGroups);

  return (
    <ReportSection title="구독 상품 분석" isPending={isPending} hasData={hasData}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ ...cardBase, backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0" }}>
          <p className={s.subTitle} style={{ margin: "0 0 16px 0" }}>🟢 신규 가입 TOP 6</p>
          <ProductRankList items={products?.newSubscriptions ?? []} />
        </div>
        <div style={{ ...cardBase, backgroundColor: "#FFF5F5", border: "1px solid #FECACA" }}>
          <p className={s.subTitle} style={{ margin: "0 0 16px 0" }}>🔴 해지 TOP 6</p>
          <ProductRankList items={products?.canceledSubscriptions ?? []} />
        </div>
        <div style={{ ...cardBase, backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE" }}>
          <p className={s.subTitle} style={{ margin: "0 0 16px 0" }}>📊 연령대별 선호 상품</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {(ageGroups?.byAgeGroup ?? []).map((ag, i) => {
              const { color, bg } = getAgeColor(ag.ageGroup ?? "");
              return (
                <div key={`${ag.ageGroup ?? i}`} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", color, backgroundColor: bg, borderRadius: "4px", padding: "2px 6px", flexShrink: 0, whiteSpace: "nowrap" }}>{ag.ageGroup}</span>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {(ag.preferredProducts ?? []).map((p, pi) => (
                      <span key={`${p.productId ?? pi}`} style={{ fontSize: "12px", color: "#1A1A2E" }}>
                        <span style={{ fontWeight: "700", color: pi === 0 ? "#E1006A" : "#9CA3AF" }}>{pi + 1}. </span>
                        {p.productName ?? "-"}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ReportSection>
  );
}
