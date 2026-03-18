import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/design";

/* ─── Page Header ─── */

export const pageHeader = style({
  backgroundImage: "linear-gradient(135deg, #0F2557 0%, #1D4ED8 60%, #6D28D9 100%)",
  backgroundColor: "#0F2557",
  padding: `${vars.spacing["8"]} ${vars.spacing["8"]} ${vars.spacing["6"]}`,
  flexShrink: 0,
});

export const headerBadge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: `3px ${vars.spacing["3"]}`,
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.xs,
  color: "rgba(255,255,255,0.85)",
  backgroundColor: "rgba(255,255,255,0.1)",
  marginBottom: vars.spacing["2"],
});

export const headerTitle = style({
  fontSize: vars.fontSize["3xl"],
  fontWeight: vars.fontWeight.bold,
  color: "#FFFFFF",
  margin: `0 0 4px 0`,
  letterSpacing: "-0.6px",
});

export const headerSubtitle = style({
  fontSize: vars.fontSize.sm,
  color: "rgba(255,255,255,0.65)",
  margin: 0,
});

/* ─── Stat Box Filter (4-column grid) ─── */

export const statBoxGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: vars.spacing["3"],
  marginBottom: vars.spacing["2"],
});

export const statBox = style({
  backgroundColor: vars.color.surface,
  border: `2px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.spacing["4"],
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  ":hover": {
    borderColor: "#94A3B8",
    boxShadow: vars.shadow.sm,
  },
});

export const statBoxAll = style([statBox, {
  selectors: {
    "&[data-active='true']": {
      borderColor: "#1D4ED8",
      backgroundColor: "#EFF6FF",
    },
  },
}]);

export const statBoxPending = style([statBox, {
  selectors: {
    "&[data-active='true']": {
      borderColor: "#D97706",
      backgroundColor: "#FFFBEB",
    },
  },
}]);

export const statBoxSelected = style([statBox, {
  selectors: {
    "&[data-active='true']": {
      borderColor: "#059669",
      backgroundColor: "#ECFDF5",
    },
  },
}]);

export const statBoxRejected = style([statBox, {
  selectors: {
    "&[data-active='true']": {
      borderColor: "#DC2626",
      backgroundColor: "#FEF2F2",
    },
  },
}]);

export const statBoxCount = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  lineHeight: 1,
  marginBottom: "4px",
});

export const statBoxLabel = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  fontWeight: vars.fontWeight.medium,
});

/* ─── Content Area ─── */

export const content = style({
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  padding: vars.spacing["6"],
  paddingLeft: vars.spacing["8"],
  paddingRight: vars.spacing["8"],
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
});

/* ─── Toolbar ─── */

export const toolbar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.spacing["3"],
  flexWrap: "wrap",
});

export const toolbarLeft = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["2"],
  flexWrap: "wrap",
});

export const toolbarRight = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["2"],
});

export const searchWrap = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const searchInput = style({
  width: "220px",
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  paddingLeft: "34px",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
  backgroundColor: vars.color.surface,
  outline: "none",
  transition: `border-color ${vars.transition.fast}`,
  ":focus": { borderColor: vars.color.primary },
  "::placeholder": { color: vars.color.textSecondary },
});

export const searchIcon = style({
  position: "absolute",
  left: "10px",
  pointerEvents: "none",
  color: vars.color.textSecondary,
});

export const filterSelect = style({
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.textSecondary,
  backgroundColor: vars.color.surface,
  cursor: "pointer",
  outline: "none",
});

/* ─── Sort Row ─── */

export const sortRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const sectionTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textPrimary,
  margin: 0,
});

/* ─── Cases Grid ─── */

export const casesGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: vars.spacing["4"],
});

/* ─── Candidate Card ─── */

export const caseCard = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  boxShadow: vars.shadow.sm,
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  transition: `transform ${vars.transition.fast}, box-shadow ${vars.transition.fast}`,
  border: `1px solid ${vars.color.border}`,
  ":hover": {
    transform: "translateY(-3px)",
    boxShadow: vars.shadow.md,
  },
});

export const caseCardStrip = style({
  height: "4px",
  flexShrink: 0,
});

export const caseCardBody = style({
  padding: vars.spacing["4"],
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["3"],
  flex: 1,
});

export const caseCardHeader = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: vars.spacing["2"],
});

export const categoryPill = style({
  padding: `2px ${vars.spacing["2"]}`,
  borderRadius: vars.radius.full,
  fontSize: "11px",
  fontWeight: vars.fontWeight.semibold,
  flexShrink: 0,
  backgroundColor: "#EFF6FF",
  color: "#1E40AF",
});

export const scoreBadge = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  color: "#FFFFFF",
  flexShrink: 0,
});

export const caseTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textPrimary,
  lineHeight: vars.lineHeight.normal,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  margin: 0,
});

export const caseCardFooter = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "auto",
  paddingTop: vars.spacing["2"],
  borderTop: `1px solid ${vars.color.border}`,
});

export const counselorChip = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
});

export const counselorAvatar = style({
  width: "24px",
  height: "24px",
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.primary,
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: vars.fontWeight.bold,
  flexShrink: 0,
});

export const dateText = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
});

/* ─── Status Badge ─── */

export const statusBadgePending = style({
  display: "inline-flex",
  alignItems: "center",
  padding: `2px ${vars.spacing["2"]}`,
  borderRadius: vars.radius.full,
  fontSize: "11px",
  fontWeight: vars.fontWeight.semibold,
  backgroundColor: "#FEF3C7",
  color: "#92400E",
});

export const statusBadgeSelected = style({
  display: "inline-flex",
  alignItems: "center",
  padding: `2px ${vars.spacing["2"]}`,
  borderRadius: vars.radius.full,
  fontSize: "11px",
  fontWeight: vars.fontWeight.semibold,
  backgroundColor: "#DCFCE7",
  color: "#166534",
});

export const statusBadgeRejected = style({
  display: "inline-flex",
  alignItems: "center",
  padding: `2px ${vars.spacing["2"]}`,
  borderRadius: vars.radius.full,
  fontSize: "11px",
  fontWeight: vars.fontWeight.semibold,
  backgroundColor: "#FEF2F2",
  color: "#991B1B",
});

/* ─── Empty / State ─── */

export const stateText = style({
  textAlign: "center",
  padding: `${vars.spacing["16"]} 0`,
  color: vars.color.textSecondary,
  fontSize: vars.fontSize.sm,
});
