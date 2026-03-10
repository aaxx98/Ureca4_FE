import { style } from "@vanilla-extract/css";
import { vars } from "../../design";

export const tab = style({
  display: "flex",
  alignItems: "center",
  gap: "7px",
  padding: `0 ${vars.spacing["4"]}`,
  height: "100%",
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: "rgba(255,255,255,0.92)",
  cursor: "pointer",
  borderBottom: "2px solid transparent",
  transition: `all ${vars.transition.fast}`,
  textDecoration: "none",
  whiteSpace: "nowrap",

  ":hover": {
    color: "#FFFFFF",
  },
});

export const tabActive = style({
  color: "#FFFFFF",
  borderBottomColor: vars.color.primary,

  ":hover": {
    color: "#FFFFFF",
  },
});

export const tabDisabled = style({
  opacity: 0.35,
  cursor: "default",
  pointerEvents: "none",
});
