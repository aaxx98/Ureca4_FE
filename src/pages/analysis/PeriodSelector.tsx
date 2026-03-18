import * as s from "./AnalysisPage.css";

export type Period = "daily" | "weekly" | "monthly";

interface Props {
  period: Period;
  date: string;
  onPeriodChange: (p: Period) => void;
  onDateChange: (d: string) => void;
}

const PERIOD_OPTIONS: { label: string; value: Period }[] = [
  { label: "일간", value: "daily" },
  { label: "주간", value: "weekly" },
  { label: "월간", value: "monthly" },
];

export function PeriodSelector({ period, date, onPeriodChange, onDateChange }: Props) {
  return (
    <div className={s.periodBar}>
      {PERIOD_OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={s.periodBtnVariant[period === opt.value ? "active" : "default"]}
          onClick={() => onPeriodChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
      <input
        type="date"
        className={s.dateInput}
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
      />
    </div>
  );
}
