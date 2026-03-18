import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../shared/design";

/* ── KPI 카드 ── */
export const kpiGrid = style({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: vars.spacing["3"] });
export const kpiCard = style({ background: "#fff", borderRadius: "12px", padding: "18px 16px", textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,.06)", transition: "transform .15s", ":hover": { transform: "translateY(-2px)", boxShadow: "0 4px 12px rgba(0,0,0,.1)" } });
export const kpiCardHighlight = style([kpiCard, { background: "linear-gradient(135deg,#c4006b,#e6007e)" }]);
export const kpiLabelVariant = styleVariants({ normal: { fontSize: "12px", color: "#888", marginBottom: "6px", fontWeight: 500 }, light: { fontSize: "12px", color: "rgba(255,255,255,.8)", marginBottom: "6px", fontWeight: 500 } });
export const kpiValueVariant = styleVariants({ normal: { fontSize: "28px", fontWeight: 700, color: vars.color.textPrimary }, light: { fontSize: "28px", fontWeight: 700, color: "#fff" } });
export const kpiSub = style({ fontSize: "11px", color: "#aaa", marginTop: "2px" });
export const kpiSubLight = style({ fontSize: "11px", color: "rgba(255,255,255,.7)", marginTop: "2px" });

/* ── 바 차트 (그라디언트) ── */
export const barTrack = style({ height: "26px", background: "#f1f2f6", borderRadius: "6px", overflow: "hidden" });
export const barFillGradient = style({ height: "26px", background: "linear-gradient(90deg,#e6007e,#ff6b9d)", borderRadius: "6px", display: "flex", alignItems: "center", paddingLeft: "8px", overflow: "hidden" });
export const barCountText = style({ fontSize: "11px", color: "#fff", fontWeight: 600, whiteSpace: "nowrap" });
export const barValueText = style({ fontSize: "13px", fontWeight: 700, color: "#e6007e", textAlign: "right", flexShrink: 0 });

/* ── 히트맵 ── */
export const heatmapWrap = style({ overflowX: "auto" });
export const heatmapGrid = style({ display: "grid", gridTemplateColumns: "60px repeat(5, 1fr)", gap: "3px", marginTop: "12px" });
export const heatmapHeader = style({ fontSize: "11px", fontWeight: 600, color: "#888", textAlign: "center", padding: "4px 0" });
export const heatmapTime = style({ fontSize: "11px", color: "#888", display: "flex", alignItems: "center", justifyContent: "flex-start", paddingRight: "6px" });
export const heatmapCell = style({ height: "32px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 600, cursor: "pointer", transition: "transform .1s", ":hover": { transform: "scale(1.1)" } });
export const heatLevelVariant = styleVariants({
  "0": { backgroundColor: "#f1f2f6", color: "#ccc" },
  "1": { backgroundColor: "#ffeef5", color: "#c77777" },
  "2": { backgroundColor: "#ffb8d4", color: "#fff" },
  "3": { backgroundColor: "#ff7eb3", color: "#fff" },
  "4": { backgroundColor: "#e6007e", color: "#fff" },
  "5": { backgroundColor: "#a8005c", color: "#fff" },
});
export const heatmapLegendWrap = style({ marginTop: "10px", display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end" });
export const heatmapLegendLabel = style({ fontSize: "10px", color: "#888" });

/* ── 발신 결과 분포 ── */
export const distCardVariant = styleVariants({
  green: { backgroundColor: "#d4edda", borderRadius: "12px", padding: "20px", textAlign: "center" as const },
  red:   { backgroundColor: "#f8d7da", borderRadius: "12px", padding: "20px", textAlign: "center" as const },
});
export const distLabelVariant = styleVariants({ green: { fontSize: "11px", fontWeight: 500, color: "#155724" }, red: { fontSize: "11px", fontWeight: 500, color: "#721c24" } });
export const distValueVariant = styleVariants({ green: { fontSize: "32px", fontWeight: 700, color: "#155724", margin: "8px 0" }, red: { fontSize: "32px", fontWeight: 700, color: "#721c24", margin: "8px 0" } });
export const distRateVariant  = styleVariants({ green: { fontSize: "20px", fontWeight: 700, color: "#155724" }, red: { fontSize: "20px", fontWeight: 700, color: "#721c24" } });

/* ── 랭킹 배지 ── */
export const rankBadgeVariant = styleVariants({
  gold:   { width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "#e6007e", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700 },
  silver: { width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "#b2bec3", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700 },
  bronze: { width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "#e17055", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700 },
  other:  { width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "#dfe6e9", color: "#636e72", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700 },
});

/* ── 최적 시간 카드 ── */
export const optimalGrid = style({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" });
export const optimalCard = style({ background: "linear-gradient(135deg,#fef0f5,#fff)", border: "1px solid #ffcce0", borderRadius: "12px", padding: "18px", textAlign: "center" });
export const optimalCat  = style({ fontSize: "12px", color: "#888", marginBottom: "6px" });
export const optimalTime = style({ fontSize: "20px", fontWeight: 700, color: "#e6007e", marginBottom: "4px" });
export const optimalRate = style({ fontSize: "12px", color: "#555" });
export const optimalDay  = style({ fontSize: "11px", color: "#b2bec3", marginTop: "4px" });

/* ── 캠페인 상태 배지 ── */
export const statusBadgeVariant = styleVariants({
  active: { display: "inline-block", padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: 600, backgroundColor: "#d4edda", color: "#155724" },
  done:   { display: "inline-block", padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: 600, backgroundColor: "#e2e3e5", color: "#383d41" },
  paused: { display: "inline-block", padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: 600, backgroundColor: "#fff3cd", color: "#856404" },
});

/* ── 캠페인 테이블 ── */
export const campaignTr     = style({ ":hover": { backgroundColor: "#fef8fb" } });
export const campaignFooter = style({ fontWeight: 700, borderTop: "2px solid #e6007e !important", backgroundColor: "#fef0f5" });
export const convRate       = style({ fontWeight: 700, color: "#e6007e" });
export const convRateGreen  = style({ fontWeight: 700, color: "#00b894" });
