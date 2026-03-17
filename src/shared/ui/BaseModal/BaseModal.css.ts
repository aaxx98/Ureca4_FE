import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../design";

/* ─── Animations ─── */

const overlayIn  = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
const overlayOut = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } });

const modalIn = keyframes({
  from: { opacity: 0, transform: "scale(0.96) translateY(12px)" },
  to:   { opacity: 1, transform: "scale(1) translateY(0)" },
});
const modalOut = keyframes({
  from: { opacity: 1, transform: "scale(1) translateY(0)" },
  to:   { opacity: 0, transform: "scale(0.96) translateY(12px)" },
});

/* ─── Overlay ─── */

export const overlay = style({
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
  animation: `${overlayIn} 200ms ease forwards`,
});

export const overlayClosing = style([overlay, {
  animation: `${overlayOut} 180ms ease forwards`,
}]);

export const backdrop = style({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.45)",
  border: "none",
  cursor: "default",
  padding: 0,
});

/* ─── Modal Panel ─── */

const modalBase = style({
  position: "relative",
  zIndex: 1,
  maxHeight: "85vh",
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.card,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

export const modal = style([modalBase, {
  width: "min(480px, 90vw)",
  animation: `${modalIn} 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
}]);

export const modalLg = style([modalBase, {
  width: "min(760px, 90vw)",
  animation: `${modalIn} 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
}]);

export const modalClosing = style([modalBase, {
  width: "min(480px, 90vw)",
  animation: `${modalOut} 180ms ease forwards`,
}]);

export const modalLgClosing = style([modalBase, {
  width: "min(760px, 90vw)",
  animation: `${modalOut} 180ms ease forwards`,
}]);

/* ─── Header ─── */

export const header = style({
  padding: `${vars.spacing["5"]} ${vars.spacing["6"]}`,
  borderBottom: `1px solid ${vars.color.border}`,
  flexShrink: 0,
});

export const headerTop = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  margin: 0,
});

export const subTitle = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  marginTop: "3px",
});

export const closeBtn = style({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: vars.radius.md,
  backgroundColor: "transparent",
  color: vars.color.textSecondary,
  fontSize: "18px",
  cursor: "pointer",
  flexShrink: 0,
  transition: `all ${vars.transition.fast}`,
  selectors: {
    "&:hover": { backgroundColor: "#F3F4F6", color: vars.color.textPrimary },
  },
});

/* ─── Body ─── */

export const body = style({
  flex: 1,
  overflowY: "auto",
  padding: vars.spacing["6"],
});

/* ─── Footer ─── */

export const footer = style({
  padding: `${vars.spacing["4"]} ${vars.spacing["6"]}`,
  borderTop: `1px solid ${vars.color.border}`,
  flexShrink: 0,
  display: "flex",
  justifyContent: "flex-start",
});

export const closeFooterBtn = style({
  padding: `${vars.spacing["2"]} ${vars.spacing["5"]}`,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.textPrimary,
  backgroundColor: vars.color.surface,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  selectors: {
    "&:hover": { backgroundColor: "#F9FAFB" },
  },
});
