import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

/* ── Page structure ── */

export const body = style({
  flex: 1,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
});

export const stickyHeader = style({
  position: "sticky",
  top: 0,
  zIndex: 10,
  backgroundColor: "#F0F3F8",
  padding: `${vars.spacing["4"]} ${vars.spacing["5"]} 0`,
  flexShrink: 0,
});

export const title = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  letterSpacing: "-0.3px",
  margin: 0,
  paddingBottom: vars.spacing["3"],
  borderBottom: "1px solid #E5E9F0",
});

export const scrollContent = style({
  flex: 1,
  padding: vars.spacing["5"],
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["8"],
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  scrollMarginTop: "72px",
});

/* ── Content pane ── */

export const pane = style({
  maxWidth: "680px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["3"],
});

/* ── Profile strip ── */

export const profileStrip = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["3"],
  backgroundColor: "#fff",
  border: "1px solid #E5E9F0",
  borderRadius: vars.radius.lg,
  padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
});

export const avatar = style({
  width: "52px",
  height: "52px",
  borderRadius: vars.radius.full,
  background: `linear-gradient(135deg, #4F63D2, #6C8EF5)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: vars.fontWeight.bold,
  color: "#fff",
  flexShrink: 0,
});

export const profileTexts = style({
  flex: 1,
  minWidth: 0,
});

export const profileName = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  lineHeight: 1.2,
});

export const profileMeta = style({
  fontSize: vars.fontSize.sm,
  color: "#374151",
  marginTop: "2px",
});

export const profileSub = style({
  fontSize: "11px",
  color: "#9CA3AF",
  marginTop: "3px",
});

export const badgeActive = style({
  fontSize: "10px",
  fontWeight: vars.fontWeight.semibold,
  color: "#059669",
  backgroundColor: "#D1FAE5",
  border: "1px solid #A7F3D0",
  padding: `2px ${vars.spacing["2"]}`,
  borderRadius: vars.radius.full,
  flexShrink: 0,
});

export const badgeInactive = style({
  fontSize: "10px",
  fontWeight: vars.fontWeight.semibold,
  color: "#9CA3AF",
  backgroundColor: "#F3F4F6",
  border: "1px solid #E5E7EB",
  padding: `2px ${vars.spacing["2"]}`,
  borderRadius: vars.radius.full,
  flexShrink: 0,
});

/* ── Feedback ── */

export const feedbackOk = style({
  fontSize: vars.fontSize.sm,
  color: "#059669",
  backgroundColor: "#ECFDF5",
  border: "1px solid #A7F3D0",
  borderRadius: vars.radius.md,
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
});

export const feedbackErr = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.error,
  backgroundColor: "#FEF2F2",
  border: "1px solid #FECACA",
  borderRadius: vars.radius.md,
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
});

/* ── Form card ── */

export const formCard = style({
  backgroundColor: "#fff",
  border: "1px solid #E5E9F0",
  borderRadius: vars.radius.lg,
  padding: vars.spacing["5"],
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
});

export const formGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: `${vars.spacing["4"]} ${vars.spacing["5"]}`,
});

export const fieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const hint = style({
  fontSize: "11px",
  color: "#9CA3AF",
  marginTop: "3px",
});

export const genderField = style({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const selectLabel = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.textPrimary,
});

export const select = style({
  height: "44px",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: `0 28px 0 ${vars.spacing["4"]}`,
  fontSize: vars.fontSize.md,
  color: vars.color.textPrimary,
  backgroundColor: "#fff",
  appearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  outline: "none",
  transition: `border-color ${vars.transition.fast}`,
  ":focus": { borderColor: vars.color.primary },
});

export const formActions = style({
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: vars.spacing["1"],
  borderTop: "1px solid #F3F4F6",
});

/* ── Password form ── */

export const passwordForm = style({
  backgroundColor: "#fff",
  border: "1px solid #E5E9F0",
  borderRadius: vars.radius.lg,
  padding: vars.spacing["5"],
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
  width: "100%",
});

export const cardSectionTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textPrimary,
  paddingBottom: vars.spacing["4"],
  borderBottom: "1px solid #F3F4F6",
  margin: 0,
});

export const passwordGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: `0 ${vars.spacing["4"]}`,
});

export const eyeBtn = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  color: "#9CA3AF",
  padding: 0,
  ":hover": { color: vars.color.textPrimary },
});

/* ── Notification settings ── */

export const notificationCardHeader = style({
  display: "flex",
  alignItems: "center",
  padding: `${vars.spacing["4"]} ${vars.spacing["5"]}`,
  borderBottom: "1px solid #F3F4F6",
});

export const notificationCardTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textPrimary,
  margin: 0,
});

export const notificationCard = style({
  backgroundColor: "#fff",
  border: "1px solid #E5E9F0",
  borderRadius: vars.radius.lg,
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  overflow: "hidden",
});

export const notificationRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.spacing["5"]} ${vars.spacing["5"]}`,
  minHeight: "72px",
  gap: vars.spacing["4"],
});

export const notificationRowBorder = style({
  borderBottom: "1px solid #F3F4F6",
});

export const notificationInfo = style({
  flex: 1,
  minWidth: 0,
});

export const notificationLabel = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.textPrimary,
  lineHeight: 1.4,
});

export const notificationDescription = style({
  fontSize: vars.fontSize.sm,
  color: "#6B7280",
  marginTop: "3px",
});

/* Toggle switch */

export const toggle = style({
  flexShrink: 0,
  position: "relative",
  width: "48px",
  height: "28px",
  borderRadius: vars.radius.full,
  border: "none",
  cursor: "pointer",
  transition: `background-color ${vars.transition.fast}`,
  padding: 0,
  ":disabled": { opacity: 0.5, cursor: "not-allowed" },
});

export const toggleOn = style({
  backgroundColor: vars.color.primary,
});

export const toggleOff = style({
  backgroundColor: "#D1D5DB",
});

export const toggleThumb = style({
  position: "absolute",
  top: "3px",
  width: "22px",
  height: "22px",
  borderRadius: vars.radius.full,
  backgroundColor: "#fff",
  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
  transition: `left ${vars.transition.fast}`,
  selectors: {
    [`${toggleOn} &`]: { left: "23px" },
    [`${toggleOff} &`]: { left: "3px" },
  },
});

/* ── States ── */

export const stateText = style({
  fontSize: vars.fontSize.sm,
  color: "#6B7280",
  textAlign: "center",
  padding: vars.spacing["8"],
});

export const stateError = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.error,
  textAlign: "center",
  padding: vars.spacing["8"],
});
