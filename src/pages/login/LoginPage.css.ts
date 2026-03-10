import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

export const pageContainer = style({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.bgPage,
  padding: vars.spacing["4"],
});

export const card = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.card,
  padding: `${vars.spacing["12"]} ${vars.spacing["10"]}`,
  width: "100%",
  maxWidth: "420px",
});

export const logoSection = style({
  textAlign: "center",
  marginBottom: vars.spacing["8"],
});

export const logoMark = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.spacing["2"],
  marginBottom: vars.spacing["3"],
});

export const logoU = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
  letterSpacing: "-0.5px",
});

export const logoPlus = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  letterSpacing: "-0.5px",
});

export const serviceTitle = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textSecondary,
  fontWeight: vars.fontWeight.medium,
  letterSpacing: "0.02em",
});

export const divider = style({
  height: "1px",
  backgroundColor: vars.color.border,
  marginBottom: vars.spacing["8"],
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["5"],
});

export const orDivider = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["3"],
  marginTop: vars.spacing["1"],

  "::before": {
    content: '""',
    flex: 1,
    height: "1px",
    backgroundColor: vars.color.border,
  },
  "::after": {
    content: '""',
    flex: 1,
    height: "1px",
    backgroundColor: vars.color.border,
  },
});

export const orDividerText = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  whiteSpace: "nowrap",
  flexShrink: 0,
});

export const globalErrorBox = style({
  backgroundColor: vars.color.errorLight,
  border: `1px solid ${vars.color.error}`,
  borderRadius: vars.radius.md,
  padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.error,
});
