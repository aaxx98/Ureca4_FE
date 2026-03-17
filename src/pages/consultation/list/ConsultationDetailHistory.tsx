import type { ConsultationHistoryItemDto } from "../../../shared/api/generated/api.schemas";
import * as s from "./ConsultationDetailModal.css";

interface Props {
  history?: ConsultationHistoryItemDto[];
}

export function ConsultationDetailHistory({ history }: Props) {
  if (!history || history.length === 0) {
    return <p className={s.stateText}>처리이력이 없습니다.</p>;
  }

  return (
    <div className={s.timeline}>
      {history.map((item, i) => (
        <div key={i} className={s.timelineItem}>
          <div className={i === 0 ? s.timelineDotPrimary : s.timelineDotSecondary} />
          <div className={s.timelineHeader}>
            <span className={s.timelineTitle}>{item.title}</span>
            <span className={s.timelineTime}>{item.occurredAt}</span>
          </div>
          {item.description && (
            <div className={s.timelineDescBox}>{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
