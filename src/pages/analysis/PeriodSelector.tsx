import * as s from "./AnalysisPage.css";

export type Period = "daily" | "weekly" | "monthly";

interface Props {
  period: Period;
  date: string;
  onPeriodChange: (p: Period) => void;
  onDateChange: (d: string) => void;
  hideDateInput?: boolean;
  activeColor?: string;
}

const PERIOD_OPTIONS: { label: string; value: Period }[] = [
  { label: "일간", value: "daily" },
  { label: "주간", value: "weekly" },
  { label: "월간", value: "monthly" },
];

const INPUT_TYPE: Record<Period, string> = {
  daily: "date",
  weekly: "week",
  monthly: "month",
};

export function PeriodSelector({ period, date, onPeriodChange, onDateChange, hideDateInput, activeColor }: Props) {
  return (
    <div className={s.periodBar}>
      {PERIOD_OPTIONS.map((opt) => {
        const isActive = period === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            className={s.periodBtnVariant[isActive ? "active" : "default"]}
            style={isActive && activeColor ? { backgroundColor: activeColor, borderColor: activeColor } : undefined}
            onClick={() => onPeriodChange(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
      {!hideDateInput && (
        <input
          type={INPUT_TYPE[period]}
          className={s.dateInput}
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />
      )}
    </div>
  );
}
