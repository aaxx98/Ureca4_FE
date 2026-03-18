import * as s from "./AnalysisPage.css";

interface Props {
  label: string;
  value: string | number | undefined;
  teamValue?: string | number;
  teamLabel?: string;
}

export function StatCard({ label, value, teamValue, teamLabel = "팀 평균" }: Props) {
  return (
    <div className={s.statCard}>
      <p className={s.statLabel}>{label}</p>
      <p className={s.statValue}>{value ?? "-"}</p>
      {teamValue != null && (
        <p className={s.statTeam}>{teamLabel}: {teamValue}</p>
      )}
    </div>
  );
}
