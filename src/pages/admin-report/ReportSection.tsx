import * as s from "./AdminReportPage.css";

interface Props {
  title: string;
  isPending: boolean;
  hasData: boolean;
  children: React.ReactNode;
}

export function ReportSection({ title, isPending, hasData, children }: Props) {
  return (
    <div className={s.sectionCard}>
      <p className={s.sectionTitle}>{title}</p>
      {isPending && <p className={s.stateText}>불러오는 중...</p>}
      {!isPending && !hasData && <p className={s.stateText}>관련 보고서 없음</p>}
      {!isPending && hasData && children}
    </div>
  );
}
