export function fmtRate(v?: number) {
  return v != null ? `${v.toFixed(1)}%` : "-";
}

export function fmtDuration(sec?: number) {
  if (sec == null) return "-";
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function fmtRevenue(v?: number) {
  return v != null ? `₩${v.toLocaleString()}` : "-";
}

export const DAY_LABELS = ["월", "화", "수", "목", "금", "토", "일"];

export function getHeatLevel(rate: number): "0" | "1" | "2" | "3" | "4" | "5" {
  if (rate <= 0)  return "0";
  if (rate < 25)  return "1";
  if (rate < 45)  return "2";
  if (rate < 65)  return "3";
  if (rate < 80)  return "4";
  return "5";
}

export function getRankVariant(rank?: number): "gold" | "silver" | "bronze" | "other" {
  if (rank === 1) return "gold";
  if (rank === 2) return "silver";
  if (rank === 3) return "bronze";
  return "other";
}
