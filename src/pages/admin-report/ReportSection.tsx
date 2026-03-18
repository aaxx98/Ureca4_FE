import * as s from "./AdminReportPage.css";

interface Props {
  title: string;
  isPending: boolean;
  hasData: boolean;
  notice?: string;
  children: React.ReactNode;
}

export function ReportSection({ title, isPending, hasData, notice, children }: Props) {
  return (
    <div className={s.sectionCard}>
      <div className={s.sectionTitleRow}>
        <p className={s.sectionTitle}>{title}</p>
        {notice && <span className={s.noticeBadge}>{notice}</span>}
      </div>
      {isPending && <p className={s.stateText}>불러오는 중...</p>}
      {!isPending && !hasData && <p className={s.stateText}>관련 보고서 없음</p>}
      {!isPending && hasData && children}
    </div>
  );
}
