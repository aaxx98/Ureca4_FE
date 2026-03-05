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

export const fieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["1"],
});

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.textPrimary,
});

export const inputWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const input = style({
  width: "100%",
  height: "44px",
  padding: `0 ${vars.spacing["4"]}`,
  fontSize: vars.fontSize.md,
  color: vars.color.textPrimary,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  outline: "none",
  transition: `border-color ${vars.transition.fast}`,

  "::placeholder": {
    color: vars.color.textDisabled,
  },

  ":focus": {
    borderColor: vars.color.borderFocus,
  },
});

export const inputWithToggle = style({
  paddingRight: vars.spacing["10"],
});

export const toggleButton = style({
  position: "absolute",
  right: vars.spacing["3"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: vars.color.textSecondary,
  padding: vars.spacing["1"],
  borderRadius: vars.radius.sm,

  ":hover": {
    color: vars.color.textPrimary,
  },
});

export const errorMessage = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.error,
  marginTop: vars.spacing["1"],
});

export const submitButton = style({
  width: "100%",
  height: "48px",
  marginTop: vars.spacing["3"],
  backgroundColor: vars.color.primary,
  color: vars.color.textInverse,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  border: "none",
  borderRadius: vars.radius.md,
  cursor: "pointer",
  transition: `background-color ${vars.transition.fast}`,
  letterSpacing: "0.02em",

  ":hover": {
    backgroundColor: vars.color.primaryHover,
  },

  ":disabled": {
    backgroundColor: vars.color.textDisabled,
    cursor: "not-allowed",
  },
});

export const globalErrorBox = style({
  backgroundColor: vars.color.errorLight,
  border: `1px solid ${vars.color.error}`,
  borderRadius: vars.radius.md,
  padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.error,
});
