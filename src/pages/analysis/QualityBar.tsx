import * as s from "./AnalysisPage.css";

interface Props {
  label: string;
  value: number | undefined;
}

export function QualityBar({ label, value }: Props) {
  const pct = value ?? 0;
  return (
    <div className={s.qualityRow}>
      <div className={s.qualityRowHeader}>
        <span className={s.qualityLabel}>{label}</span>
        <span className={s.qualityPct}>{value != null ? `${pct.toFixed(1)}%` : "-"}</span>
      </div>
      <div className={s.qualityTrack}>
        <div className={s.qualityFill} style={{ width: `${Math.min(pct, 100)}%` }} />
      </div>
    </div>
  );
}
