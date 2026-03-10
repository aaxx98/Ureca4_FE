import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

const dropdownIn = keyframes({
  from: { opacity: 0, transform: "translateY(-6px) scale(0.97)" },
  to: { opacity: 1, transform: "translateY(0) scale(1)" },
});

export const wrapper = style({
  position: "relative",
});

export const avatar = style({
  width: "28px",
  height: "28px",
  borderRadius: vars.radius.full,
  background: `linear-gradient(135deg, ${vars.color.primary}, #ff6b9d)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: vars.fontWeight.bold,
  color: "#FFFFFF",
  cursor: "pointer",
  flexShrink: 0,
  border: "none",
  padding: 0,
});

export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 10,
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "default",
});

export const panel = style({
  position: "absolute",
  top: "calc(100% + 10px)",
  right: 0,
  zIndex: 20,
  width: "200px",
  backgroundColor: "#0e1f3d",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: vars.radius.lg,
  boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
  overflow: "hidden",
  animation: `${dropdownIn} 0.18s ease`,
  transformOrigin: "top right",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["3"],
  padding: vars.spacing["4"],
  borderBottom: "1px solid rgba(255,255,255,0.07)",
});

export const headerAvatar = style({
  width: "34px",
  height: "34px",
  borderRadius: vars.radius.full,
  background: `linear-gradient(135deg, #E1006A, #ff6b9d)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  color: "#FFFFFF",
  flexShrink: 0,
});

export const name = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: "rgba(255,255,255,0.85)",
  margin: 0,
  lineHeight: "1.3",
});

export const role = style({
  fontSize: vars.fontSize.xs,
  color: "rgba(255,255,255,0.55)",
  margin: 0,
  marginTop: "2px",
});

export const menu = style({
  padding: `${vars.spacing["2"]} 0`,
});

export const menuItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing["3"],
  width: "100%",
  padding: `${vars.spacing["2"]} ${vars.spacing["4"]}`,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: "rgba(255,255,255,0.8)",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  textAlign: "left",
  transition: `all ${vars.transition.fast}`,

  ":hover": {
    backgroundColor: "rgba(255,255,255,0.05)",
    color: "rgba(255,255,255,0.9)",
  },
});

export const menuItemDanger = style({
  color: "#f87171",

  ":hover": {
    backgroundColor: "rgba(239,68,68,0.1)",
    color: "#f87171",
  },
});
