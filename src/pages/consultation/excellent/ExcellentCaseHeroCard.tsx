import type { WeeklyExcellentCaseResponse } from "../../../shared/api/generated/api.schemas";
import * as s from "./ExcellentCasesPage.css";

const CATEGORY_GRADIENT: Record<string, string> = {
  "해지방어":  "linear-gradient(135deg, #064E3B 0%, #059669 100%)",
  "불만처리":  "linear-gradient(135deg, #7F1D1D 0%, #DC2626 100%)",
  "가입안내":  "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
  "보험안내":  "linear-gradient(135deg, #4C1D95 0%, #8B5CF6 100%)",
  "민원대응":  "linear-gradient(135deg, #78350F 0%, #F59E0B 100%)",
  "VIP응대":   "linear-gradient(135deg, #881337 0%, #F43F5E 100%)",
  "아웃바운드": "linear-gradient(135deg, #164E63 0%, #0EA5E9 100%)",
};

function getGradient(category?: string) {
  if (!category) return "linear-gradient(135deg, #1E3A8A 0%, #4338CA 100%)";
  const key = Object.keys(CATEGORY_GRADIENT).find(k => category.includes(k));
  return key ? CATEGORY_GRADIENT[key] : "linear-gradient(135deg, #1E3A8A 0%, #4338CA 100%)";
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return iso.slice(0, 10).replace(/-/g, ".");
}

interface Props {
  item: WeeklyExcellentCaseResponse;
  onClick: () => void;
}

export function ExcellentCaseHeroCard({ item, onClick }: Props) {
  return (
    <div className={s.heroCard} onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}>
      <div className={s.heroInner} style={{ background: getGradient(item.smallCategory) }}>
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <div>
            <span className={s.heroLabel}>🏆 이번 주 TOP 케이스</span>
          </div>
          <h3 className={s.heroTitle}>{item.title ?? "제목 없음"}</h3>
          <div className={s.heroMeta}>
            <span className={s.heroMetaItem}>👤 {item.counselorName}</span>
            {item.smallCategory && (
              <span className={s.heroMetaItem}>📂 {item.smallCategory}</span>
            )}
            {item.selectedAt && (
              <span className={s.heroMetaItem}>📅 {formatDate(item.selectedAt)}</span>
            )}
            {item.score != null && (
              <span className={s.heroScoreBadge}>AI {item.score}점</span>
            )}
          </div>
          {item.adminReason && (
            <p style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "13px",
              fontStyle: "italic",
              marginTop: "8px",
              margin: "8px 0 0",
            }}>"{item.adminReason}"</p>
          )}
        </div>
      </div>
    </div>
  );
}
