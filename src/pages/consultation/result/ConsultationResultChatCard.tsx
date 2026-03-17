import type { DemoConsultDataResponse } from "../../../shared/api/generated/api.schemas";
import { ConsultationDetailRawChat } from "../list/ConsultationDetailRawChat";
import * as s from "./ConsultationResultPage.css";

interface Props {
  demo: DemoConsultDataResponse;
}

export function ConsultationResultChatCard({ demo }: Props) {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <div className={s.cardTitleRow}>
          <span>💬</span>
          <h2 className={s.cardTitle}>원문 대화</h2>
        </div>
      </div>
      <div className={s.cardBody}>
        <ConsultationDetailRawChat rawTextJson={demo.rawTextJson} />
      </div>
    </div>
  );
}
