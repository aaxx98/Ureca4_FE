import { style } from "@vanilla-extract/css";
import { vars } from "../../design";

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

  ":disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});

export const inputWithRightSlot = style({
  paddingRight: vars.spacing["10"],
});

export const rightSlot = style({
  position: "absolute",
  right: vars.spacing["3"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const errorMessage = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.error,
  marginTop: vars.spacing["1"],
});
