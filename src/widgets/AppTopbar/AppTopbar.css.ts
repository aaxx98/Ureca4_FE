import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

export const topbar = style({
  height: "52px",
  flexShrink: 0,
  backgroundColor: "#0a1628",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  display: "flex",
  alignItems: "center",
  paddingLeft: vars.spacing["6"],
  paddingRight: vars.spacing["6"],
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["2"],
  marginRight: vars.spacing["8"],
  flexShrink: 0,
});

export const logoMark = style({
  width: "28px",
  height: "28px",
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "9px",
  fontWeight: vars.fontWeight.bold,
  lineHeight: "1.2",
  textAlign: "center",
  color: "#FFFFFF",
});

export const logoName = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: "rgba(255,255,255,0.85)",
  letterSpacing: "-0.2px",
  whiteSpace: "nowrap",
});

export const tabs = style({
  display: "flex",
  alignItems: "stretch",
  height: "100%",
  gap: "2px",
});

export const topbarRight = style({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["3"],
});

export const statusBadge = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: vars.fontSize.xs,
  color: "rgba(255,255,255,0.8)",
  backgroundColor: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  padding: `4px ${vars.spacing["3"]}`,
  borderRadius: vars.radius.full,
});
