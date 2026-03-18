import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../../shared/design";

/* ─── Animations ─── */

const overlayIn = keyframes({
  from: { opacity: 0 },
  to:   { opacity: 1 },
});
const overlayOut = keyframes({
  from: { opacity: 1 },
  to:   { opacity: 0 },
});
const modalIn = keyframes({
  from: { opacity: 0, transform: "scale(0.96) translateY(12px)" },
  to:   { opacity: 1, transform: "scale(1) translateY(0)" },
});
const modalOut = keyframes({
  from: { opacity: 1, transform: "scale(1) translateY(0)" },
  to:   { opacity: 0, transform: "scale(0.96) translateY(12px)" },
});

/* ─── Overlay ─── */

export const overlay = style({
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
  animation: `${overlayIn} 200ms ease forwards`,
});

export const overlayClosing = style([overlay, {
  animation: `${overlayOut} 180ms ease forwards`,
}]);

export const backdrop = style({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.45)",
  border: "none",
  cursor: "default",
  padding: 0,
});

/* ─── Modal Panel ─── */

export const modal = style({
  position: "relative",
  zIndex: 1,
  width: "min(760px, 90vw)",
  maxHeight: "85vh",
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.card,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  animation: `${modalIn} 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
});

export const modalClosing = style([modal, {
  animation: `${modalOut} 180ms ease forwards`,
}]);

/* ─── Header ─── */

export const header = style({
  padding: `${vars.spacing["5"]} ${vars.spacing["6"]}`,
  borderBottom: `1px solid ${vars.color.border}`,
  flexShrink: 0,
});

export const headerTop = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const titleRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["2"],
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  margin: 0,
});

export const consultNumber = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  marginTop: "3px",
});

export const closeBtn = style({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: vars.radius.md,
  backgroundColor: "transparent",
  color: vars.color.textSecondary,
  fontSize: "18px",
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  ":hover": { backgroundColor: "#F3F4F6", color: vars.color.textPrimary },
});

/* ─── Tabs ─── */

export const tabBar = style({
  display: "flex",
  gap: 0,
  padding: `0 ${vars.spacing["6"]}`,
  borderBottom: `1px solid ${vars.color.border}`,
  flexShrink: 0,
});

export const tab = style({
  padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.textSecondary,
  cursor: "pointer",
  border: "none",
  borderBottom: "2px solid transparent",
  backgroundColor: "transparent",
  transition: `all ${vars.transition.fast}`,
  whiteSpace: "nowrap",
  ":hover": { color: vars.color.textPrimary },
});

export const tabActive = style([tab, {
  color: vars.color.primary,
  borderBottomColor: vars.color.primary,
  fontWeight: vars.fontWeight.semibold,
}]);

/* ─── Content ─── */

export const body = style({
  flex: 1,
  overflowY: "auto",
  padding: vars.spacing["6"],
});

/* ─── Info Grid (기본정보 / AI 분석 등) ─── */

export const infoGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: `${vars.spacing["3"]} ${vars.spacing["6"]}`,
});

export const infoItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
});

export const infoLabel = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  fontWeight: vars.fontWeight.medium,
});

export const infoValue = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
});

export const infoFull = style([infoItem, {
  gridColumn: "1 / -1",
}]);

/* ─── Chat (원문 대화) ─── */

export const chatWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
});

export const chatSystemMsg = style({
  textAlign: "center",
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  backgroundColor: "#F3F4F6",
  borderRadius: vars.radius.full,
  padding: `4px ${vars.spacing["4"]}`,
  alignSelf: "center",
});

export const chatRow = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vars.spacing["2"],
});

export const chatRowRight = style([chatRow, {
  flexDirection: "row-reverse",
}]);

export const chatAvatar = style({
  width: "36px",
  height: "36px",
  borderRadius: vars.radius.full,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  flexShrink: 0,
  backgroundColor: "#94A3B8",
  color: "#FFFFFF",
});

export const chatAvatarCounselor = style([chatAvatar, {
  backgroundColor: "#60A5FA",
}]);

export const chatBubbleWrap = style({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  maxWidth: "70%",
});

export const chatMeta = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
});

export const chatMetaRight = style([chatMeta, { textAlign: "right" }]);

export const chatBubble = style({
  backgroundColor: "#F1F5F9",
  borderRadius: `${vars.radius.sm} ${vars.radius.lg} ${vars.radius.lg} ${vars.radius.lg}`,
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
  lineHeight: vars.lineHeight.normal,
});

export const chatBubbleCounselor = style([chatBubble, {
  backgroundColor: "#DBEAFE",
  color: "#1E40AF",
  borderRadius: `${vars.radius.lg} ${vars.radius.sm} ${vars.radius.lg} ${vars.radius.lg}`,
}]);

export const chatNotice = style({
  backgroundColor: "#FFFBEB",
  border: `1px solid #FDE68A`,
  borderRadius: vars.radius.md,
  padding: vars.spacing["3"],
  fontSize: vars.fontSize.xs,
  color: "#92400E",
  marginTop: vars.spacing["2"],
});

/* ─── AI Analysis ─── */

export const aiBanner = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  backgroundColor: "#EFF6FF",
  border: `1px solid #BFDBFE`,
  borderRadius: vars.radius.md,
  padding: vars.spacing["4"],
  marginBottom: vars.spacing["4"],
});

export const aiBannerLeft = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["1"],
});

export const aiBannerTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: "#1D4ED8",
});

export const aiBannerSub = style({
  fontSize: vars.fontSize.xs,
  color: "#3B82F6",
});

export const aiBannerCode = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: "#1D4ED8",
  letterSpacing: "0.05em",
  alignSelf: "flex-start",
});

export const aiCard = style({
  backgroundColor: vars.color.surface,
  border: `1px solid #BFDBFE`,
  borderRadius: vars.radius.md,
  padding: vars.spacing["4"],
  marginBottom: vars.spacing["3"],
});

export const aiCardLabel = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  fontWeight: vars.fontWeight.medium,
  marginBottom: vars.spacing["2"],
});

export const aiCardValue = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
  lineHeight: vars.lineHeight.normal,
});

export const aiCardEmpty = style([aiCardValue, {
  color: vars.color.textSecondary,
}]);

export const aiTwoCol = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: vars.spacing["3"],
  marginBottom: vars.spacing["3"],
});

/* ─── History Timeline ─── */

export const timeline = style({
  display: "flex",
  flexDirection: "column",
  gap: 0,
  position: "relative",
  paddingLeft: "28px",
});

export const timelineItem = style({
  position: "relative",
  paddingBottom: vars.spacing["5"],
  ":last-child": { paddingBottom: 0 },
  selectors: {
    "&:not(:last-child)::before": {
      content: '""',
      position: "absolute",
      left: "-15px",
      top: "17px",
      bottom: 0,
      width: "2px",
      backgroundColor: vars.color.border,
    },
  },
});

export const timelineDotPrimary = style({
  position: "absolute",
  left: "-22px",
  top: "3px",
  width: "14px",
  height: "14px",
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.primary,
  flexShrink: 0,
});

export const timelineDotSecondary = style({
  position: "absolute",
  left: "-22px",
  top: "3px",
  width: "14px",
  height: "14px",
  borderRadius: vars.radius.full,
  border: `2px solid #94A3B8`,
  backgroundColor: vars.color.surface,
  flexShrink: 0,
});

export const timelineHeader = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: vars.spacing["3"],
  marginBottom: "2px",
});

export const timelineTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textPrimary,
});

export const timelineTime = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  flexShrink: 0,
});

export const timelineDesc = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  marginTop: "2px",
});

export const timelineDescBox = style({
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.sm,
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  fontSize: vars.fontSize.xs,
  color: vars.color.textPrimary,
  marginTop: vars.spacing["2"],
  lineHeight: vars.lineHeight.normal,
});

/* ─── Info Cards (기본정보 / IAM) ─── */

export const infoCardGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: vars.spacing["3"],
});

export const fieldStack = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
});

export const fieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["2"],
});

export const fieldLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: "#475569",
});

export const fieldLabelAi = style([fieldLabel, {
  color: "#3B82F6",
}]);

export const fieldBox = style({
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: vars.spacing["3"],
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
  lineHeight: vars.lineHeight.normal,
});

export const fieldBoxMultiline = style([fieldBox, {
  whiteSpace: "pre-wrap",
}]);

export const fieldBoxAi = style([fieldBoxMultiline, {
  backgroundColor: "#EFF6FF",
  border: `1px solid #BFDBFE`,
  color: "#1E3A8A",
}]);

export const fieldBoxAccent = style([fieldBoxMultiline, {
  borderLeft: `3px solid #BFDBFE`,
  paddingLeft: vars.spacing["4"],
}]);

export const fieldGroupFull = style([fieldGroup, {
  gridColumn: "1 / -1",
}]);

export const starRow = style({
  display: "flex",
  alignItems: "center",
  gap: "3px",
});

export const starFilled = style({
  fontSize: "24px",
  color: "#F59E0B",
  lineHeight: 1,
});

export const starEmpty = style({
  fontSize: "24px",
  color: "#D1D5DB",
  lineHeight: 1,
});

export const starCount = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  marginLeft: vars.spacing["2"],
});

/* ─── Footer ─── */

export const footer = style({
  padding: `${vars.spacing["4"]} ${vars.spacing["6"]}`,
  borderTop: `1px solid ${vars.color.border}`,
  flexShrink: 0,
  display: "flex",
  justifyContent: "flex-start",
});

export const closeFooterBtn = style({
  padding: `${vars.spacing["2"]} ${vars.spacing["5"]}`,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.textPrimary,
  backgroundColor: vars.color.surface,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  ":hover": { backgroundColor: "#F9FAFB" },
});

/* ─── Empty/Loading ─── */

export const stateText = style({
  textAlign: "center",
  padding: `${vars.spacing["8"]} 0`,
  color: vars.color.textSecondary,
  fontSize: vars.fontSize.sm,
});
