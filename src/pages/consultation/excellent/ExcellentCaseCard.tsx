import type { WeeklyExcellentCaseResponse } from "../../../shared/api/generated/api.schemas";
import * as s from "./ExcellentCasesPage.css";

const CATEGORY_COLORS: Record<string, { strip: string; badge: string; text: string }> = {
  "해지방어":  { strip: "#059669", badge: "#ECFDF5", text: "#065F46" },
  "불만처리":  { strip: "#DC2626", badge: "#FEF2F2", text: "#991B1B" },
  "가입안내":  { strip: "#2563EB", badge: "#EFF6FF", text: "#1E40AF" },
  "보험안내":  { strip: "#7C3AED", badge: "#F5F3FF", text: "#5B21B6" },
  "민원대응":  { strip: "#D97706", badge: "#FFFBEB", text: "#92400E" },
  "VIP응대":   { strip: "#E11D48", badge: "#FFF1F2", text: "#9F1239" },
  "아웃바운드": { strip: "#0891B2", badge: "#ECFEFF", text: "#164E63" },
};

function getColor(category?: string) {
  if (!category) return { strip: "#64748B", badge: "#F8FAFC", text: "#334155" };
  const key = Object.keys(CATEGORY_COLORS).find(k => category.includes(k));
  return key ? CATEGORY_COLORS[key] : { strip: "#64748B", badge: "#F8FAFC", text: "#334155" };
}

function getScoreColor(score?: number) {
  if (!score) return "#94A3B8";
  if (score >= 90) return "#F59E0B";
  if (score >= 80) return "#64748B";
  return "#10B981";
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return iso.slice(0, 10).replace(/-/g, ".");
}

interface Props {
  item: WeeklyExcellentCaseResponse;
  onClick: () => void;
}

export function ExcellentCaseCard({ item, onClick }: Props) {
  const color   = getColor(item.smallCategory);
  const initial = item.counselorName?.charAt(0) ?? "?";

  return (
    <div className={s.caseCard} onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}>
      <div className={s.caseCardStrip} style={{ backgroundColor: color.strip }} />
      <div className={s.caseCardBody}>
        <div className={s.caseCardHeader}>
          <span
            className={s.categoryPill}
            style={{ backgroundColor: color.badge, color: color.text }}
          >
            {item.smallCategory ?? "기타"}
          </span>
          <div
            className={s.scoreBadge}
            style={{ background: `linear-gradient(135deg, ${getScoreColor(item.score)}, ${getScoreColor(item.score)}CC)` }}
          >
            {item.score ?? "-"}
          </div>
        </div>

        <p className={s.caseTitle}>{item.title ?? "제목 없음"}</p>

        {item.rawSummary && (
          <p className={s.caseSummary}>{item.rawSummary}</p>
        )}

        {item.adminReason && (
          <p className={s.adminReason}>"{item.adminReason}"</p>
        )}

        <div className={s.caseCardFooter}>
          <div className={s.counselorChip}>
            <div className={s.counselorAvatar}>{initial}</div>
            {item.counselorName}
          </div>
          <span className={s.dateText}>{formatDate(item.selectedAt)}</span>
        </div>
      </div>
    </div>
  );
}
