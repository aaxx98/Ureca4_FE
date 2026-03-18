import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/design";

export const pageHeader = style({
  padding: `${vars.spacing["8"]} ${vars.spacing["8"]} 0`,
  flexShrink: 0,
});

export const headerRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const title = style({
  margin: 0,
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  letterSpacing: "-0.4px",
});

export const subtitle = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  marginTop: "5px",
  marginBottom: 0,
});

export const body = style({
  flex: 1,
  padding: vars.spacing["6"],
  paddingLeft: vars.spacing["8"],
  paddingRight: vars.spacing["8"],
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["4"],
});

