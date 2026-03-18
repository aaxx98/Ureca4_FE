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
  period: string;
}

interface TopKeywordItem {
  keyword?: string;
  count?: number;
  rank?: number;
  changeRate?: number;
}

interface NewKeywordItem {
  keyword?: string;
  count?: number;
}

interface CustomerTypeGroup {
  customerType?: string;
  keywords?: string[] | NewKeywordItem[];
}

const CT_COLORS: Record<string, { bg: string; color: string }> = {
  "VVIP": { bg: "#FDF2F8", color: "#9D174D" },
  "VIP": { bg: "#EFF6FF", color: "#1D4ED8" },
  "DIAMOND": { bg: "#F0FDF4", color: "#15803D" },
  "해지위험": { bg: "#FEF2F2", color: "#DC2626" },
};

function getCtColor(name: string) {
  for (const key of Object.keys(CT_COLORS)) {
    if (name.includes(key)) return CT_COLORS[key];
  }
  return { bg: "#F3F4F6", color: "#6B7280" };
}

function ChangeRateBadge({ rate }: { rate?: number }) {
  if (rate == null) return <span style={{ fontSize: "11px", color: "#9CA3AF" }}>-</span>;
  const isUp = rate > 0;
  const isFlat = rate === 0;
  return (
    <span style={{ fontSize: "11px", fontWeight: 600, color: isFlat ? "#6B7280" : isUp ? "#16A34A" : "#DC2626" }}>
      {isFlat ? "=" : isUp ? `▲${rate.toFixed(1)}%` : `▼${Math.abs(rate).toFixed(1)}%`}
    </span>
  );
}

function TopKeywordList({ items, newKeywords }: { items: TopKeywordItem[]; newKeywords: string[] }) {
  if (items.length === 0) return <p className={s.kwEmptyMsg}>상위 키워드 없음</p>;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((item, i) => {
        const isNew = newKeywords.includes(item.keyword ?? "");
        return (
          <div key={`${item.keyword ?? ""}-${i}`} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "12px 0", borderBottom: i < items.length - 1 ? "1px solid #F3F4F6" : "none" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: i < 3 ? "#E1006A" : "#9CA3AF", width: "18px", textAlign: "center", flexShrink: 0 }}>{i + 1}</span>
            <span style={{ fontSize: "13px", color: "#1A1A2E", flex: 1 }}>#{item.keyword ?? "-"}</span>
            {isNew && (
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#0369A1", backgroundColor: "#E0F2FE", borderRadius: "4px", padding: "1px 5px", flexShrink: 0 }}>NEW</span>
            )}
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#1A1A2E", flexShrink: 0, width: "36px", textAlign: "right" }}>{item.count?.toLocaleString() ?? "-"}</span>
            <div style={{ flexShrink: 0, width: "52px", textAlign: "right" }}>
              <ChangeRateBadge rate={item.changeRate} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LongTermKeywords({ items }: { items: TopKeywordItem[] }) {
  if (items.length === 0) return <p className={s.kwEmptyMsg}>장기 상위 유지 키워드 없음</p>;
  return (
    <div className={s.tagList}>
      {items.map((item, i) => (
        <span key={`${item.keyword ?? ""}-${i}`} className={s.tag}>
          #{item.keyword ?? "-"}
          <span className={s.tagCount}>{item.count?.toLocaleString()}</span>
        </span>
      ))}
    </div>
  );
}

function CustomerTypeKeywords({ groups }: { groups: CustomerTypeGroup[] }) {
  if (groups.length === 0) return <p className={s.kwEmptyMsg}>고객 유형별 키워드 없음</p>;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {groups.map((g, i) => {
        const name = g.customerType ?? `그룹${i + 1}`;
        const { bg, color } = getCtColor(name);
        const keywords = (g.keywords ?? []) as Array<string | NewKeywordItem>;
        return (
          <div key={name}>
            <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, color, backgroundColor: bg, borderRadius: "4px", padding: "2px 8px", marginBottom: "6px" }}>{name}</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {keywords.map((k) => {
                const word = typeof k === "string" ? k : k.keyword ?? "-";
                return (
                  <span key={word} style={{ fontSize: "12px", color: "#1A1A2E", backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "2px 10px" }}>
                    #{word}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function KeywordSection({ top, longTerm, customerTypes, topPending, ltPending, ctPending, period }: Props) {
  const isPending = topPending || ltPending || ctPending;
  const hasData = !!(top || longTerm || customerTypes);
  const notice = period === "daily" ? "장기·유형 키워드: 일간 미지원 · 주간 데이터" : undefined;

  const topData = top as Record<string, unknown> | undefined;
  const ltData = longTerm as Record<string, unknown> | undefined;
  const ctData = customerTypes as Record<string, unknown> | undefined;

  const topItems: TopKeywordItem[] = Array.isArray(topData?.topKeywords) ? (topData?.topKeywords as TopKeywordItem[]) : [];
  const newItems: NewKeywordItem[] = Array.isArray(topData?.newKeywords) ? (topData?.newKeywords as NewKeywordItem[]) : [];
  const newKeywordNames = newItems.map((n) => n.keyword ?? "").filter(Boolean);

  const ltItems: TopKeywordItem[] = Array.isArray(ltData?.longTermTopKeywords) ? (ltData?.longTermTopKeywords as TopKeywordItem[]) : [];

  // customerTypes may be array at root or nested under a key
  let ctGroups: CustomerTypeGroup[] = [];
  if (ctData) {
    const firstArrayKey = Object.keys(ctData).find((k) => Array.isArray(ctData[k]));
    if (firstArrayKey) ctGroups = ctData[firstArrayKey] as CustomerTypeGroup[];
  }

  const divider = <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: "28px 0" }} />;

  return (
    <ReportSection title="키워드 분석" isPending={isPending} hasData={hasData} notice={notice}>
      <div style={{ padding: "0 20px", display: "flex", gap: "0" }}>
        {/* Left: 전체 키워드 빈도 순위 */}
        <div style={{ flex: 3, minWidth: 0, paddingRight: "24px" }}>
          <p className={s.subTitle} style={{ marginTop: 0, marginBottom: "12px" }}>전체 키워드 빈도 순위</p>
          <TopKeywordList items={topItems} newKeywords={newKeywordNames} />
        </div>

        {/* Vertical divider */}
        <div style={{ width: "1px", backgroundColor: "#E5E7EB", flexShrink: 0, alignSelf: "stretch" }} />

        {/* Right: 장기 상위 유지 + 고객 유형별 키워드 stacked */}
        <div style={{ flex: 2, minWidth: 0, paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "0" }}>
          <div>
            <p className={s.subTitle} style={{ marginTop: 0, marginBottom: "12px" }}>상위 유지 키워드</p>
            <LongTermKeywords items={ltItems} />
          </div>
          {divider}
          <div>
            <p className={s.subTitle} style={{ marginTop: 0, marginBottom: "12px" }}>고객 유형별 키워드</p>
            <CustomerTypeKeywords groups={ctGroups} />
          </div>
        </div>
      </div>
    </ReportSection>
  );
}
