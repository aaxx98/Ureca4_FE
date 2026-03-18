import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

const fadeIn = keyframes({ from: { opacity: 0, transform: "translateY(4px)" }, to: { opacity: 1, transform: "translateY(0)" } });

export const pageWrapper = style({ display: "flex", flexDirection: "column", height: "100%", overflowY: "auto" });
export const header = style({ padding: `${vars.spacing["8"]} ${vars.spacing["8"]} 0`, flexShrink: 0 });
export const title = style({ fontSize: vars.fontSize["2xl"], fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary, letterSpacing: "-0.4px", margin: "0 0 4px 0" });
export const subtitle = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
export const body = style({ padding: `${vars.spacing["3"]} ${vars.spacing["8"]} ${vars.spacing["6"]}`, display: "flex", flexDirection: "column", gap: vars.spacing["3"], animation: `${fadeIn} 0.35s ease` });
export const sectionCard = style({ backgroundColor: vars.color.surface, borderRadius: vars.radius.lg, padding: vars.spacing["4"], boxShadow: vars.shadow.card, display: "flex", flexDirection: "column" });
export const sectionTitleRow = style({ display: "flex", alignItems: "center", gap: vars.spacing["2"], marginBottom: vars.spacing["8"] });
export const sectionTitle = style({ fontSize: vars.fontSize.md, fontWeight: vars.fontWeight.semibold, color: vars.color.textPrimary, margin: 0 });
export const noticeBadge = style({ fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.semibold, color: "#92400E", backgroundColor: "#FEF3C7", border: "1px solid #FDE68A", borderRadius: vars.radius.full, padding: "1px 8px" });
export const subTitle = style({ fontSize: vars.fontSize.sm, fontWeight: vars.fontWeight.semibold, color: vars.color.textSecondary, margin: `${vars.spacing["3"]} 0 ${vars.spacing["1"]} 0` });
export const stateText = style({ textAlign: "center", padding: `${vars.spacing["4"]} 0`, color: vars.color.textSecondary, fontSize: vars.fontSize.sm });
export const twoCol = style({ display: "grid", gridTemplateColumns: "1fr 1fr", gap: vars.spacing["3"] });

/* ── Stat grid (reused pattern) ── */
export const statGrid = style({ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: vars.spacing["2"] });
export const statCard = style({ backgroundColor: "#F9FAFB", borderRadius: vars.radius.md, border: `1px solid ${vars.color.border}`, padding: `${vars.spacing["3"]} ${vars.spacing["3"]}` });
export const statLabel = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary, marginBottom: "2px" });
export const statValue = style({ fontSize: vars.fontSize.xl, fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary });

/* ── Performance cards (3 squares) ── */
export const perfGrid = style({ display: "grid", gridTemplateColumns: "1fr 1fr", gap: vars.spacing["3"], flex: 1 });
export const perfCard = style({ backgroundColor: "#F9FAFB", borderRadius: vars.radius.md, border: `1px solid ${vars.color.border}`, padding: vars.spacing["4"], display: "flex", flexDirection: "column", minHeight: "140px" });
export const perfLabel = style({ fontSize: vars.fontSize.sm, color: vars.color.textSecondary });
export const perfNumArea = style({ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" });
export const perfNumRow = style({ display: "flex", alignItems: "flex-end", gap: "6px" });
export const perfNum = style({ fontSize: "64px", fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary, lineHeight: "1" });
export const perfUnit = style({ fontSize: vars.fontSize["2xl"], fontWeight: vars.fontWeight.semibold, color: vars.color.textSecondary, paddingBottom: "6px" });

/* ── Table ── */
export const tableWrap = style({ overflowX: "auto" });
export const table = style({ width: "100%", borderCollapse: "collapse", fontSize: vars.fontSize.sm });
export const th = style({ padding: `6px ${vars.spacing["3"]}`, textAlign: "left", fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.semibold, color: vars.color.textSecondary, backgroundColor: "#F9FAFB", borderBottom: `1px solid ${vars.color.border}`, whiteSpace: "nowrap" });
export const td = style({ padding: `10px ${vars.spacing["3"]}`, color: vars.color.textPrimary, borderBottom: `1px solid #F3F4F6`, fontSize: vars.fontSize.md, fontWeight: vars.fontWeight.semibold, whiteSpace: "nowrap", verticalAlign: "middle" });
export const tdTop3 = style({ padding: `10px ${vars.spacing["3"]}`, color: vars.color.textPrimary, borderBottom: `1px solid #F3F4F6`, fontSize: vars.fontSize.lg, fontWeight: vars.fontWeight.bold, whiteSpace: "nowrap", verticalAlign: "middle", backgroundColor: "#FEFCE8" });
export const rankBadge = style({ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: vars.radius.full, backgroundColor: vars.color.primary, color: "#fff", fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.bold });
export const rankNum = style({ fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary });

/* ── Risk grid ── */
export const riskGrid = style({ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: vars.spacing["3"], marginBottom: vars.spacing["3"] });
export const riskItem = style({ backgroundColor: "#FFF5F9", borderRadius: vars.radius.md, border: `1px solid ${vars.color.primaryLight}`, padding: vars.spacing["4"], textAlign: "center" });
export const riskLabel = style({ fontSize: vars.fontSize.md, fontWeight: vars.fontWeight.semibold, color: vars.color.textPrimary, marginBottom: "6px" });
export const riskCount = style({ fontSize: vars.fontSize.lg, fontWeight: vars.fontWeight.bold, color: vars.color.primary });
export const surgeAlert = style({ padding: vars.spacing["3"], backgroundColor: "#FEF2F2", border: `1px solid #FCA5A5`, borderRadius: vars.radius.md, fontSize: vars.fontSize.xs, color: "#DC2626", marginTop: vars.spacing["3"] });

/* ── Bar ── */
export const barRow = style({ display: "flex", alignItems: "center", gap: vars.spacing["2"], marginBottom: vars.spacing["1"] });
export const barLabel = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary, width: "120px", flexShrink: 0 });
export const barTrack = style({ flex: 1, height: "6px", backgroundColor: "#E5E7EB", borderRadius: vars.radius.full, overflow: "hidden" });
export const barFill = style({ height: "100%", backgroundColor: vars.color.primary, borderRadius: vars.radius.full });
export const barPct = style({ fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.semibold, color: vars.color.textPrimary, width: "40px", textAlign: "right", flexShrink: 0 });

/* ── Keyword bar chart ── */
export const kwBarChart = style({ display: "flex", alignItems: "flex-end", gap: vars.spacing["2"], overflowX: "auto", paddingBottom: vars.spacing["2"], minHeight: "140px" });
export const kwBarCol = style({ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flexShrink: 0, width: "48px" });
export const kwBarCount = style({ fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary });
export const kwBarFill = style({ width: "32px", backgroundColor: vars.color.primary, borderRadius: `${vars.radius.sm} ${vars.radius.sm} 0 0`, minHeight: "4px", transition: `height ${vars.transition.normal}` });
export const kwBarLabel = style({ fontSize: "11px", color: vars.color.textSecondary, textAlign: "center", wordBreak: "break-all", lineHeight: "1.2" });
export const kwEmptyMsg = style({ fontSize: vars.fontSize.xs, color: "#6B7280" });

/* ── Keyword / Product list ── */
export const tagList = style({ display: "flex", flexWrap: "wrap", gap: vars.spacing["2"] });
export const tag = style({ display: "inline-flex", alignItems: "center", gap: "4px", padding: `3px 10px`, backgroundColor: "#F0F9FF", border: `1px solid #BAE6FD`, borderRadius: vars.radius.full, fontSize: vars.fontSize.xs, color: "#0369A1" });
export const tagCount = style({ fontWeight: vars.fontWeight.bold, color: "#075985" });

/* ── Slot cards ── */
export const slotGrid = style({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: vars.spacing["3"] });
export const slotCard = style({ backgroundColor: "#F9FAFB", borderRadius: vars.radius.md, border: `1px solid ${vars.color.border}`, padding: vars.spacing["3"] });
export const slotTime = style({ fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.semibold, color: vars.color.primary, marginBottom: vars.spacing["1"] });
export const slotStat = style({ fontSize: vars.fontSize.sm, color: vars.color.textSecondary });
export const slotStatVal = style({ fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary });
