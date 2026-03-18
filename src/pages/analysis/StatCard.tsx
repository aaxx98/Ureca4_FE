import * as s from "./AnalysisPage.css";

interface Props {
  label: string;
  value: string | number | undefined;
  unit?: string;
  teamValue?: string;
  teamLabel?: string;
}

export function StatCard({ label, value, unit, teamValue, teamLabel = "팀 평균" }: Props) {
  return (
    <div className={s.statCard}>
      <p className={s.statLabel}>{label}</p>
      <div className={s.statNumRow}>
        <span className={s.statValue}>{value ?? "-"}</span>
        {unit && <span className={s.statUnit}>{unit}</span>}
      </div>
      {teamValue != null && (
        <p className={s.statTeam}>{teamLabel}: {teamValue}</p>
      )}
    </div>
  );
}
