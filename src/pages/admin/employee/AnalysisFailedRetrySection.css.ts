import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/design";

export const card = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.sm,
  overflow: "hidden",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.spacing["3"],
  padding: `${vars.spacing["4"]} ${vars.spacing["4"]}`,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const headerLeft = style({ display: "flex", flexDirection: "column", gap: "2px" });
export const titleRow = style({ display: "flex", alignItems: "baseline", gap: vars.spacing["2"] });

export const title = style({
  margin: 0,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textPrimary,
  letterSpacing: "-0.2px",
});

export const subtitle = style({
  margin: 0,
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
});

export const countBadge = style({
  display: "inline-flex",
  alignItems: "center",
  height: "20px",
  padding: `0 ${vars.spacing["2"]}`,
  borderRadius: vars.radius.full,
  fontSize: "11px",
  fontWeight: vars.fontWeight.semibold,
  backgroundColor: "#F3F4F6",
  color: vars.color.textSecondary,
});

export const actions = style({ display: "flex", alignItems: "center", gap: vars.spacing["2"] });

export const table = style({ width: "100%", borderCollapse: "collapse" });
export const thead = style({ borderBottom: `2px solid ${vars.color.border}` });
export const th = style({
  padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
  textAlign: "left",
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.textSecondary,
  backgroundColor: "#F9FAFB",
  whiteSpace: "nowrap",
});

export const tr = style({
  borderBottom: `1px solid ${vars.color.border}`,
  transition: `background-color ${vars.transition.fast}`,
  ":hover": { backgroundColor: "#F9FAFB" },
});

export const td = style({
  padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
  fontSize: vars.fontSize.sm,
  color: vars.color.textPrimary,
  verticalAlign: "middle",
});

export const tdSecondary = style([td, { color: vars.color.textSecondary }]);

export const tdMono = style([
  tdSecondary,
  {
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
  },
]);

export const checkboxCell = style({ width: "44px" });
export const checkbox = style({ width: "16px", height: "16px", cursor: "pointer" });

export const empty = style({
  padding: `${vars.spacing["10"]} ${vars.spacing["4"]}`,
  color: vars.color.textSecondary,
  fontSize: vars.fontSize.sm,
  textAlign: "center",
});

export const footer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.spacing["3"],
  padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
});

export const footerText = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });

