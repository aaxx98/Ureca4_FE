import { style } from "@vanilla-extract/css";
import { vars } from "../../design";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing["2"],
  height: "48px",
  padding: `0 ${vars.spacing["5"]}`,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  borderRadius: vars.radius.md,
  border: "none",
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  letterSpacing: "0.02em",
  textDecoration: "none",
  whiteSpace: "nowrap",

  ":disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
});

export const fullWidth = style({
  width: "100%",
});

/* ── Variants ── */

export const primary = style({
  backgroundColor: vars.color.primary,
  color: vars.color.textInverse,

  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: vars.color.primaryHover,
    },
  },

  ":disabled": {
    backgroundColor: vars.color.textDisabled,
  },
});

export const secondary = style({
  backgroundColor: "#FFFFFF",
  color: "#3C4043",
  border: `1px solid ${vars.color.border}`,

  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: "#F8F9FA",
      borderColor: "#DADCE0",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
  },
});

export const ghost = style({
  backgroundColor: "transparent",
  color: vars.color.textPrimary,
  border: "none",
  height: "auto",
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,

  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: vars.color.bgPage,
    },
  },
});

export const icon = style({
  backgroundColor: "transparent",
  border: "none",
  height: "auto",
  padding: vars.spacing["1"],
  color: vars.color.textSecondary,
  borderRadius: vars.radius.sm,

  selectors: {
    "&:hover:not(:disabled)": {
      color: vars.color.textPrimary,
    },
  },
});
