import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/design";

export const pageWrapper = style({
  flex: 1,
  overflowY: "auto",
});

export const header = style({
  padding: `${vars.spacing["8"]} ${vars.spacing["8"]} 0`,
  flexShrink: 0,
});

export const headerRow = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: vars.spacing["4"],
});

export const title = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  letterSpacing: "-0.4px",
  margin: 0,
});

export const subtitle = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  marginTop: "5px",
});

export const refreshBtn = style({
  padding: `${vars.spacing["2"]} ${vars.spacing["4"]}`,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.surface,
  color: vars.color.textPrimary,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  cursor: "pointer",
  whiteSpace: "nowrap",
  flexShrink: 0,
  marginTop: "4px",
  transition: `all ${vars.transition.fast}`,
  selectors: {
    "&:hover": { backgroundColor: "#F3F4F6", borderColor: vars.color.textSecondary },
    "&:disabled": { opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" },
  },
});

/* ─── Body Layout ─── */

export const body = style({
  display: "flex",
  gap: vars.spacing["6"],
  padding: vars.spacing["6"],
  paddingLeft: vars.spacing["8"],
  paddingRight: vars.spacing["8"],
  alignItems: "flex-start",
  maxWidth: "960px",
  margin: "0 auto",
  width: "100%",
  boxSizing: "border-box",
});

export const contentArea = style({
  flex: 1,
  minWidth: 0,
  maxWidth: "640px",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
});

/* ─── Progress Panel ─── */

export const progressPanel = style({
  width: "220px",
  flexShrink: 0,
  position: "sticky",
  top: vars.spacing["6"],
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.sm,
  padding: vars.spacing["4"],
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["3"],
});

export const progressTitle = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textSecondary,
  margin: 0,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
});

export const progressCount = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  margin: 0,
});

export const progressBar = style({
  height: "6px",
  backgroundColor: "#E5E7EB",
  borderRadius: vars.radius.full,
  overflow: "hidden",
});

export const progressFill = style({
  height: "100%",
  backgroundColor: "#10B981",
  borderRadius: vars.radius.full,
  transition: `width ${vars.transition.fast}`,
});

export const progressList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const progressItem = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: vars.fontSize.xs,
});

export const checkDone = style({
  width: "16px",
  height: "16px",
  borderRadius: vars.radius.full,
  backgroundColor: "#10B981",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
  fontWeight: vars.fontWeight.bold,
  flexShrink: 0,
});

export const checkEmpty = style({
  width: "16px",
  height: "16px",
  borderRadius: vars.radius.full,
  border: `1.5px solid #D1D5DB`,
  backgroundColor: "#F9FAFB",
  flexShrink: 0,
});

export const progressLabelDone = style({
  color: vars.color.textPrimary,
});

export const progressLabel = style({
  color: "#9CA3AF",
});

export const chatBtn = style({
  marginTop: vars.spacing["1"],
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.surface,
  color: vars.color.textSecondary,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  cursor: "pointer",
  textAlign: "center",
  transition: `all ${vars.transition.fast}`,
  selectors: {
    "&:hover": { backgroundColor: "#F3F4F6", color: vars.color.textPrimary },
  },
});

/* ─── Notice ─── */

export const noticeCard = style({
  backgroundColor: "#EFF6FF",
  border: "1px solid #BFDBFE",
  borderRadius: vars.radius.lg,
  padding: vars.spacing["4"],
  flexShrink: 0,
});

export const noticeTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: "#1D4ED8",
  margin: `0 0 ${vars.spacing["1"]} 0`,
});

export const noticeText = style({
  fontSize: vars.fontSize.xs,
  color: "#3B82F6",
  margin: 0,
  lineHeight: vars.lineHeight.normal,
});

/* ─── Card ─── */

export const card = style({
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  boxShadow: vars.shadow.sm,
  flexShrink: 0,
});

export const cardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.spacing["4"]} ${vars.spacing["5"]}`,
  borderBottom: `1px solid ${vars.color.border}`,
  backgroundColor: "#FAFAFA",
});

export const cardTitleRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["2"],
});

export const cardTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textPrimary,
  margin: 0,
});

export const cardMeta = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  fontWeight: vars.fontWeight.medium,
  letterSpacing: "0.04em",
});

export const cardMetaEditable = style([cardMeta, {
  color: vars.color.primary,
}]);

export const aiBadge = style({
  display: "inline-flex",
  alignItems: "center",
  padding: `2px ${vars.spacing["2"]}`,
  backgroundColor: "#EFF6FF",
  border: "1px solid #BFDBFE",
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.xs,
  color: "#1D4ED8",
  fontWeight: vars.fontWeight.medium,
});

export const cardBody = style({
  padding: vars.spacing["5"],
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["3"],
});

/* ─── Grid Layouts ─── */

export const grid2 = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: vars.spacing["3"],
});

export const grid3 = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: vars.spacing["3"],
});

/* ─── Field ─── */

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const fieldLabel = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  fontWeight: vars.fontWeight.medium,
});

export const fieldValue = style({
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  backgroundColor: "#F9FAFB",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
  minHeight: "38px",
  display: "flex",
  alignItems: "center",
});

export const fieldValuePlaceholder = style([fieldValue, {
  color: "#9CA3AF",
  fontStyle: "italic",
}]);

export const textarea = style({
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
  backgroundColor: vars.color.surface,
  resize: "vertical",
  fontFamily: "inherit",
  lineHeight: vars.lineHeight.normal,
  outline: "none",
  selectors: {
    "&:focus": { borderColor: vars.color.borderFocus },
  },
});

export const textareaError = style({
  borderColor: "#EF4444",
  selectors: {
    "&::placeholder": { color: "#EF4444" },
  },
});

/* ─── Footer ─── */

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  paddingBottom: vars.spacing["4"],
  flexShrink: 0,
});

export const submitBtn = style({
  padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
  backgroundColor: vars.color.primary,
  border: `1px solid ${vars.color.primary}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: "#FFFFFF",
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  selectors: {
    "&:hover": { backgroundColor: vars.color.primaryHover },
    "&:disabled": { opacity: 0.6, cursor: "not-allowed" },
  },
});

/* ─── State ─── */

export const stateText = style({
  textAlign: "center",
  padding: `${vars.spacing["16"]} 0`,
  color: vars.color.textSecondary,
  fontSize: vars.fontSize.sm,
});

export const successMsg = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.success,
  fontWeight: vars.fontWeight.medium,
  alignSelf: "center",
  marginRight: "auto",
});

/* ─── Product Table ─── */

export const productTableWrapper = style({
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  overflow: "hidden",
});

export const productTableHeader = style({
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr 2fr 1fr",
  gap: vars.spacing["3"],
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  backgroundColor: "#F3F4F6",
  borderBottom: `1px solid ${vars.color.border}`,
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  fontWeight: vars.fontWeight.semibold,
});

export const productTableRow = style({
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr 2fr 1fr",
  gap: vars.spacing["3"],
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
  backgroundColor: "#F9FAFB",
  selectors: {
    "&:not(:last-child)": { borderBottom: `1px solid ${vars.color.border}` },
  },
});

export const productTableCell = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

/* ─── Progress Panel Sections ─── */

export const sectionItem = style({
  display: "flex",
  flexDirection: "column",
});

export const sectionHeader = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["2"],
  padding: `6px ${vars.spacing["1"]}`,
  cursor: "pointer",
  background: "none",
  border: "none",
  width: "100%",
  textAlign: "left",
  borderRadius: vars.radius.sm,
  selectors: {
    "&:hover": { backgroundColor: "#F3F4F6" },
  },
});

export const sectionChevron = style({
  fontSize: "9px",
  color: vars.color.textSecondary,
  flexShrink: 0,
  width: "10px",
});

export const sectionLabel = style({
  flex: 1,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textPrimary,
});

export const sectionLabelDone = style({
  flex: 1,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: "#10B981",
});

export const subList = style({
  listStyle: "none",
  margin: `0 0 ${vars.spacing["1"]} 0`,
  padding: `0 0 0 20px`,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const subItem = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: vars.fontSize.xs,
});
