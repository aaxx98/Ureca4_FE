import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

/* ─── Profile Header Card ─── */

export const profileCard = style({
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E9F0",
  borderRadius: vars.radius.lg,
  padding: `${vars.spacing["5"]} ${vars.spacing["6"]}`,
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["4"],
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  position: "relative",
  overflow: "hidden",

  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    backgroundColor: vars.color.primary,
    opacity: 0.7,
  },
});

export const profileAvatar = style({
  width: "52px",
  height: "52px",
  borderRadius: vars.radius.full,
  background: `linear-gradient(135deg, ${vars.color.primary}, #ff6b9d)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  fontWeight: vars.fontWeight.bold,
  color: "#FFFFFF",
  flexShrink: 0,
});

export const profileInfo = style({
  flex: 1,
});

export const profileName = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  margin: 0,
  letterSpacing: "-0.3px",
});

export const profileMeta = style({
  fontSize: vars.fontSize.sm,
  color: "#6B7280",
  margin: 0,
  marginTop: "3px",
});

export const badgeActive = style({
  fontSize: "11px",
  fontWeight: vars.fontWeight.semibold,
  color: "#059669",
  backgroundColor: "#D1FAE5",
  border: "1px solid #A7F3D0",
  padding: `3px ${vars.spacing["3"]}`,
  borderRadius: vars.radius.full,
  flexShrink: 0,
});

export const badgeInactive = style({
  fontSize: "11px",
  fontWeight: vars.fontWeight.semibold,
  color: "#9CA3AF",
  backgroundColor: "#F3F4F6",
  border: "1px solid #E5E7EB",
  padding: `3px ${vars.spacing["3"]}`,
  borderRadius: vars.radius.full,
  flexShrink: 0,
});

/* ─── Info Grid ─── */

export const infoGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: vars.spacing["4"],
});

export const infoSection = style({
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E9F0",
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
});

export const sectionTitle = style({
  fontSize: "10px",
  fontWeight: vars.fontWeight.semibold,
  color: "#6B7280",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  margin: 0,
  padding: `${vars.spacing["4"]} ${vars.spacing["5"]}`,
  borderBottom: "1px solid #F0F3F8",
});

export const infoRows = style({
  display: "flex",
  flexDirection: "column",
});

export const infoRow = style({
  display: "flex",
  alignItems: "center",
  padding: `${vars.spacing["3"]} ${vars.spacing["5"]}`,
  borderBottom: "1px solid #F9FAFB",

  ":last-child": {
    borderBottom: "none",
  },
});

export const infoLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: "#9CA3AF",
  width: "88px",
  flexShrink: 0,
});

export const infoValue = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
  fontWeight: vars.fontWeight.medium,
});

/* ─── States ─── */

export const loadingState = style({
  fontSize: vars.fontSize.sm,
  color: "#6B7280",
  padding: vars.spacing["8"],
  textAlign: "center",
});

export const errorState = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.error,
  padding: vars.spacing["8"],
  textAlign: "center",
});
