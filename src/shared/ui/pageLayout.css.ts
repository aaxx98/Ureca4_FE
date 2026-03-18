import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../design";

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(6px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

/* ─── Root ─── */

export const layout = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "#F0F3F8",
  overflow: "hidden",
});

/* ─── Body (topbar 아래 영역 전체) ─── */

export const body = style({
  display: "flex",
  height: "calc(100vh - 52px)",
  overflow: "hidden",
});

/* ─── Context Panel (좌측 사이드바) ─── */

export const contextPanel = style({
  width: "200px",
  flexShrink: 0,
  backgroundColor: "#0e1f3d",
  borderRight: "1px solid rgba(255,255,255,0.06)",
  display: "flex",
  flexDirection: "column",
  padding: `${vars.spacing["4"]} ${vars.spacing["2"]}`,
  gap: "2px",
  overflowY: "auto",
  overflowX: "hidden",
});

export const contextLabel = style({
  fontSize: "10px",
  fontWeight: vars.fontWeight.semibold,
  color: "rgba(255,255,255,0.78)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: `0 ${vars.spacing["2"]}`,
  marginBottom: vars.spacing["2"],
});

export const contextItem = style({
  display: "flex",
  alignItems: "center",
  gap: "9px",
  padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: "rgba(255,255,255,0.95)",
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  textDecoration: "none",
  width: "100%",
  background: "none",
  border: "none",
  textAlign: "left",

  ":hover": {
    backgroundColor: "rgba(255,255,255,0.07)",
    color: "#FFFFFF",
  },
});

export const contextItemActive = style({
  backgroundColor: "rgba(225, 0, 106, 0.14)",
  color: vars.color.primary,

  ":hover": {
    backgroundColor: "rgba(225, 0, 106, 0.18)",
    color: vars.color.primary,
  },
});

export const contextItemDisabled = style({
  opacity: 0.55,
  cursor: "default",
  pointerEvents: "none",
});

export const contextBadge = style({
  marginLeft: "auto",
  fontSize: "10px",
  backgroundColor: "#E1006A",
  color: "#FFFFFF",
  padding: `1px ${vars.spacing["2"]}`,
  borderRadius: vars.radius.full,
  fontWeight: 600,
  minWidth: "18px",
  textAlign: "center",
});

export const contextGroupLabel = style({
  fontSize: "10px",
  fontWeight: vars.fontWeight.semibold,
  color: "rgba(255,255,255,0.4)",
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  padding: `${vars.spacing["3"]} ${vars.spacing["2"]} ${vars.spacing["1"]}`,
  marginTop: vars.spacing["1"],
});

export const contextGroupToggle = style([contextItem, {
  marginTop: vars.spacing["1"],
  justifyContent: "space-between",
  color: "rgba(255,255,255,0.85)",
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  border: "none",
  width: "100%",
  textAlign: "left",
}]);

export const contextSubWrap = style({
  maxHeight: "0",
  overflow: "hidden",
  transition: "max-height 0.25s ease",
});

export const contextSubWrapOpen = style({
  maxHeight: "200px",
});

export const contextSubItem = style([contextItem, {
  paddingLeft: "40px",
  fontSize: vars.fontSize.sm,
  color: "rgba(255,255,255,0.7)",
  gap: "8px",
  selectors: {
    [`&:hover`]: {
      color: "rgba(255,255,255,0.95)",
    },
  },
}]);

/* ─── Main ─── */

export const main = style({
  flex: 1,
  width: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: "#F0F3F8",
});

export const contentHeader = style({
  padding: `${vars.spacing["8"]} ${vars.spacing["8"]} 0`,
  flexShrink: 0,
});

export const breadcrumb = style({
  fontSize: vars.fontSize.xs,
  color: "#6B7280",
  marginBottom: "6px",
});

export const breadcrumbAccent = style({
  color: "#374151",
});

export const contentTitle = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.textPrimary,
  letterSpacing: "-0.4px",
  lineHeight: vars.lineHeight.tight,
  margin: 0,
});

export const contentSub = style({
  fontSize: vars.fontSize.xs,
  color: "#6B7280",
  marginTop: "5px",
});

export const contentBody = style({
  flex: 1,
  padding: vars.spacing["6"],
  paddingLeft: vars.spacing["8"],
  paddingRight: vars.spacing["8"],
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["5"],
  animation: `${fadeIn} 0.35s ease`,
});
