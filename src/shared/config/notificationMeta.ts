import { ROUTES } from "./routes";

export const NOTIFICATION_TYPE_META: Record<string, { label: string; icon: string; bg: string; color: string; route: string }> = {
  NOTICE:        { label: "공지사항", icon: "📢", bg: "#EFF6FF", color: "#1E40AF", route: ROUTES.NOTICE },
  URGENT:        { label: "긴급",     icon: "🚨", bg: "#FEE2E2", color: "#991B1B", route: ROUTES.NOTICE },
  POLICY_CHANGE: { label: "정책변경", icon: "📋", bg: "#FEF3C7", color: "#92400E", route: ROUTES.NOTICE },
  EVENT:         { label: "이벤트",   icon: "📅", bg: "#F5F3FF", color: "#5B21B6", route: ROUTES.NOTICE },
  BEST_PRACTICE: { label: "우수사례", icon: "⭐", bg: "#ECFDF5", color: "#065F46", route: ROUTES.EXCELLENT },
};
