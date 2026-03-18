import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

const fadeIn = keyframes({ from: { opacity: 0, transform: "translateY(4px)" }, to: { opacity: 1, transform: "translateY(0)" } });

export const pageWrapper = style({ display: "flex", flexDirection: "column", height: "100%", overflowY: "auto" });
export const header = style({ padding: `${vars.spacing["6"]} ${vars.spacing["4"]} 0`, flexShrink: 0 });
export const title = style({ fontSize: vars.fontSize["2xl"], fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary, letterSpacing: "-0.4px", margin: "0 0 4px 0" });
export const subtitle = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
export const body = style({ padding: `${vars.spacing["3"]} ${vars.spacing["4"]} ${vars.spacing["4"]}`, display: "flex", flexDirection: "column", gap: vars.spacing["3"], animation: `${fadeIn} 0.35s ease` });
export const sectionCard = style({ backgroundColor: vars.color.surface, borderRadius: vars.radius.lg, padding: vars.spacing["4"], boxShadow: vars.shadow.card });
export const sectionTitle = style({ fontSize: vars.fontSize.md, fontWeight: vars.fontWeight.semibold, color: vars.color.textPrimary, margin: `0 0 ${vars.spacing["4"]} 0` });
export const twoCol = style({ display: "grid", gridTemplateColumns: "1fr 1fr", gap: vars.spacing["4"] });
export const stateText = style({ textAlign: "center", padding: `${vars.spacing["8"]} 0`, color: vars.color.textSecondary, fontSize: vars.fontSize.sm });

/* ── Period Selector ── */
export const periodBar = style({ display: "flex", alignItems: "center", gap: vars.spacing["3"] });
const periodBtnBase = style({ padding: `${vars.spacing["2"]} ${vars.spacing["4"]}`, border: `1px solid ${vars.color.border}`, borderRadius: vars.radius.md, fontSize: vars.fontSize.sm, fontWeight: vars.fontWeight.medium, cursor: "pointer", transition: `all ${vars.transition.fast}` });
export const periodBtnVariant = styleVariants({ active: [periodBtnBase, { backgroundColor: vars.color.primary, borderColor: vars.color.primary, color: "#fff" }], default: [periodBtnBase, { backgroundColor: vars.color.surface, color: vars.color.textPrimary, ":hover": { backgroundColor: "#F9FAFB" } }] });
export const dateInput = style({ padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`, border: `1px solid ${vars.color.border}`, borderRadius: vars.radius.md, fontSize: vars.fontSize.sm, color: vars.color.textPrimary, outline: "none", marginLeft: "auto", ":focus": { borderColor: vars.color.primary } });

/* ── Stat Card (3×1 square) ── */
export const statGrid = style({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: vars.spacing["3"] });
export const statCard = style({ backgroundColor: "#F9FAFB", borderRadius: vars.radius.md, border: `1px solid ${vars.color.border}`, padding: vars.spacing["4"], display: "flex", flexDirection: "column", aspectRatio: "1" });
export const statLabel = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
export const statNumRow = style({ flex: 1, display: "flex", alignItems: "flex-end", gap: "6px", paddingTop: vars.spacing["2"] });
export const statValue = style({ fontSize: "44px", fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary, lineHeight: "1" });
export const statUnit = style({ fontSize: vars.fontSize["2xl"], fontWeight: vars.fontWeight.semibold, color: vars.color.textSecondary, paddingBottom: "4px" });
export const statTeam = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary, marginTop: vars.spacing["2"] });
export const durationRow = style({ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`, backgroundColor: "#F9FAFB", borderRadius: vars.radius.md, border: `1px solid ${vars.color.border}`, marginTop: vars.spacing["3"] });
export const durationLabel = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
export const durationValue = style({ fontSize: vars.fontSize.lg, fontWeight: vars.fontWeight.bold, color: vars.color.textPrimary });
export const durationTeam = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });

/* ── Satisfaction ── */
export const satWrap = style({ display: "flex", flexDirection: "column", gap: vars.spacing["3"] });
export const satScoreBlock = style({ display: "flex", alignItems: "flex-end", gap: vars.spacing["2"] });
export const satScoreBig = style({ fontSize: "52px", fontWeight: vars.fontWeight.bold, color: vars.color.primary, lineHeight: "1" });
export const satScoreMeta = style({ display: "flex", flexDirection: "column", paddingBottom: "4px", gap: "2px" });
export const satOutOf = style({ fontSize: vars.fontSize.lg, fontWeight: vars.fontWeight.semibold, color: vars.color.textSecondary });
export const satTeam = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
export const satStars = style({ display: "flex", gap: "4px" });
export const satResponseRow = style({ display: "flex", alignItems: "center", justifyContent: "space-between", padding: vars.spacing["3"], backgroundColor: "#F9FAFB", borderRadius: vars.radius.md, border: `1px solid ${vars.color.border}` });
export const satResponseLabel = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
export const satResponseValue = style({ fontSize: vars.fontSize.sm, fontWeight: vars.fontWeight.semibold, color: vars.color.textPrimary });

/* ── Quality ── */
export const qualityMeta = style({ display: "flex", gap: vars.spacing["4"], marginBottom: vars.spacing["4"], fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
export const qualityGrid = style({ display: "grid", gridTemplateColumns: "1fr 1fr", gap: `${vars.spacing["3"]} ${vars.spacing["6"]}` });
export const qualityRow = style({ display: "flex", flexDirection: "column", gap: "4px" });
export const qualityRowHeader = style({ display: "flex", justifyContent: "space-between", alignItems: "center" });
export const qualityLabel = style({ fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
export const qualityPct = style({ fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.semibold, color: vars.color.textPrimary });
export const qualityTrack = style({ height: "6px", backgroundColor: "#E5E7EB", borderRadius: vars.radius.full, overflow: "hidden" });
export const qualityFill = style({ height: "100%", backgroundColor: vars.color.primary, borderRadius: vars.radius.full, transition: `width ${vars.transition.normal}` });
export const scoreRow = style({ display: "flex", alignItems: "center", gap: vars.spacing["3"], marginTop: vars.spacing["4"], padding: vars.spacing["4"], backgroundColor: "#FFF5F9", borderRadius: vars.radius.md, border: `1px solid ${vars.color.primaryLight}` });
export const scoreLabel = style({ fontSize: vars.fontSize.sm, color: vars.color.textSecondary });
export const scoreValue = style({ fontSize: vars.fontSize["2xl"], fontWeight: vars.fontWeight.bold, color: vars.color.primary });
export const scoreMax = style({ fontSize: vars.fontSize.sm, color: vars.color.textSecondary });

/* ── Category ── */
export const categoryList = style({ display: "flex", flexDirection: "column", gap: vars.spacing["3"] });
export const categoryItem = style({ padding: vars.spacing["4"], backgroundColor: "#F9FAFB", borderRadius: vars.radius.md, border: `1px solid ${vars.color.border}` });
export const categoryHeader = style({ display: "flex", alignItems: "center", gap: vars.spacing["2"], marginBottom: vars.spacing["2"] });
export const categoryRank = style({ fontSize: vars.fontSize.xs, fontWeight: vars.fontWeight.bold, color: vars.color.surface, backgroundColor: vars.color.primary, borderRadius: vars.radius.full, width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 });
export const categoryName = style({ fontSize: vars.fontSize.sm, fontWeight: vars.fontWeight.semibold, color: vars.color.textPrimary, flex: 1 });
export const categoryCount = style({ fontSize: vars.fontSize.sm, fontWeight: vars.fontWeight.bold, color: vars.color.primary, flexShrink: 0 });
export const subCatList = style({ display: "flex", flexWrap: "wrap", gap: vars.spacing["2"] });
export const subCatItem = style({ display: "inline-flex", alignItems: "center", gap: "4px", padding: `2px 10px`, backgroundColor: vars.color.surface, border: `1px solid ${vars.color.border}`, borderRadius: vars.radius.full, fontSize: vars.fontSize.xs, color: vars.color.textSecondary });
