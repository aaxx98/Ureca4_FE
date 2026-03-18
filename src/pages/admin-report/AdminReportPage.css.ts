import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

const fadeIn = keyframes({ from: { opacity: 0, transform: "translateY(4px)" }, to: { opacity: 1, transform: "translateY(0)" } });

export const pageWrapper = style({ display: "flex", flexDirection: "column", height: "100%", overflowY: "auto" });
export const header = style({ padding: `${vars.spacing["8"]} ${vars.spacing["8"]} 0`, flexShrink: 0 });
export const title = style({ fontSize: vars.fontSize["2xl"], fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary, letterSpacing: "-0.4px", margin: "0 0 4px 0" });
export const subtitle = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
export const body = style({ padding: `${vars.spacing["4"]} ${vars.spacing["8"]} ${vars.spacing["6"]}`, display: "flex", flexDirection: "column", gap: vars.spacing["4"], animation: `${fadeIn} 0.35s ease` });
export const sectionCard = style({ backgroundColor: vars.color.surface, borderRadius: vars.radius.lg, padding: vars.spacing["6"], boxShadow: vars.shadow.card });
export const sectionTitle = style({ fontSize: vars.fontSize.md, fontWeight: vars.fontWeight.semibold, color: vars.color.textPrimary, margin: `0 0 ${vars.spacing["4"]} 0` });
export const subTitle = style({ fontSize: vars.fontSize.sm, fontWeight: vars.fontWeight.semibold, color: vars.color.textSecondary, margin: `${vars.spacing["4"]} 0 ${vars.spacing["2"]} 0` });
export const stateText = style({ textAlign: "center", padding: `${vars.spacing["8"]} 0`, color: vars.color.textSecondary, fontSize: vars.fontSize.sm });
export const twoCol = style({ display: "grid", gridTemplateColumns: "1fr 1fr", gap: vars.spacing["4"] });

/* ── Stat grid (reused pattern) ── */
export const statGrid = style({ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: vars.spacing["3"] });
export const statCard = style({ backgroundColor: "#F9FAFB", borderRadius: vars.radius.md, border: `1px solid ${vars.color.border}`, padding: vars.spacing["4"] });
export const statLabel = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary, marginBottom: vars.spacing["1"] });
export const statValue = style({ fontSize: vars.fontSize["2xl"], fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary });

/* ── Table ── */
export const tableWrap = style({ overflowX: "auto" });
export const table = style({ width: "100%", borderCollapse: "collapse", fontSize: vars.fontSize.sm });
export const th = style({ padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`, textAlign: "left", fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.semibold, color: vars.color.textSecondary, backgroundColor: "#F9FAFB", borderBottom: `1px solid ${vars.color.border}`, whiteSpace: "nowrap" });
export const td = style({ padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`, color: vars.color.textPrimary, borderBottom: `1px solid #F3F4F6`, whiteSpace: "nowrap" });
export const rankBadge = style({ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: vars.radius.full, backgroundColor: vars.color.primary, color: "#fff", fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.bold });

/* ── Risk grid ── */
export const riskGrid = style({ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: vars.spacing["3"], marginBottom: vars.spacing["4"] });
export const riskItem = style({ backgroundColor: "#FFF5F9", borderRadius: vars.radius.md, border: `1px solid ${vars.color.primaryLight}`, padding: vars.spacing["3"], textAlign: "center" });
export const riskLabel = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary, marginBottom: "4px" });
export const riskCount = style({ fontSize: vars.fontSize.xl, fontWeight: vars.fontWeight.bold, color: vars.color.primary });
export const surgeAlert = style({ padding: vars.spacing["3"], backgroundColor: "#FEF2F2", border: `1px solid #FCA5A5`, borderRadius: vars.radius.md, fontSize: vars.fontSize.xs, color: "#DC2626", marginTop: vars.spacing["3"] });

/* ── Bar ── */
export const barRow = style({ display: "flex", alignItems: "center", gap: vars.spacing["3"], marginBottom: vars.spacing["2"] });
export const barLabel = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary, width: "120px", flexShrink: 0 });
export const barTrack = style({ flex: 1, height: "6px", backgroundColor: "#E5E7EB", borderRadius: vars.radius.full, overflow: "hidden" });
export const barFill = style({ height: "100%", backgroundColor: vars.color.primary, borderRadius: vars.radius.full });
export const barPct = style({ fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.semibold, color: vars.color.textPrimary, width: "40px", textAlign: "right", flexShrink: 0 });

/* ── Keyword / Product list ── */
export const tagList = style({ display: "flex", flexWrap: "wrap", gap: vars.spacing["2"] });
export const tag = style({ display: "inline-flex", alignItems: "center", gap: "4px", padding: `3px 10px`, backgroundColor: "#F0F9FF", border: `1px solid #BAE6FD`, borderRadius: vars.radius.full, fontSize: vars.fontSize.xs, color: "#0369A1" });
export const tagCount = style({ fontWeight: vars.fontWeight.bold, color: "#075985" });

/* ── Slot cards ── */
export const slotGrid = style({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: vars.spacing["3"] });
export const slotCard = style({ backgroundColor: "#F9FAFB", borderRadius: vars.radius.md, border: `1px solid ${vars.color.border}`, padding: vars.spacing["4"] });
export const slotTime = style({ fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.semibold, color: vars.color.primary, marginBottom: vars.spacing["2"] });
export const slotStat = style({ fontSize: vars.fontSize.sm, color: vars.color.textSecondary });
export const slotStatVal = style({ fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary });
