import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

/* ─── Stats ─── */

export const statsRow = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: vars.spacing["4"],
});

export const statCard = style({
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E9F0",
  borderRadius: vars.radius.lg,
  padding: `${vars.spacing["5"]} ${vars.spacing["6"]}`,
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",

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

export const statLabel = style({
  fontSize: "10px",
  fontWeight: vars.fontWeight.semibold,
  color: "#6B7280",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  margin: 0,
  marginBottom: vars.spacing["3"],
});

export const statEmpty = style({
  fontSize: "34px",
  fontWeight: vars.fontWeight.bold,
  color: "#D1D5DB",
  margin: 0,
  lineHeight: "1",
  letterSpacing: "-1px",
});

/* ─── Recent Section ─── */

export const recentSection = style({
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E9F0",
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
});

export const recentHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.spacing["4"]} ${vars.spacing["5"]}`,
  borderBottom: "1px solid #F0F3F8",
});

export const sectionTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textPrimary,
  margin: 0,
});

export const sectionBadge = style({
  fontSize: "10px",
  backgroundColor: "#F3F4F6",
  color: "#9CA3AF",
  padding: `2px ${vars.spacing["2"]}`,
  borderRadius: vars.radius.sm,
});

export const emptyState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "130px",
  gap: vars.spacing["2"],
  color: "#D1D5DB",
});

export const emptyText = style({
  fontSize: vars.fontSize.sm,
  color: "#6B7280",
  margin: 0,
});
