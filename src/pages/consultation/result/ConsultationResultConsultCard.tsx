import type { DemoConsultDataResponse } from "../../../shared/api/generated/api.schemas";
import * as s from "./ConsultationResultPage.css";

interface Props {
  demo: DemoConsultDataResponse;
}

function Field({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className={s.field}>
      <span className={s.fieldLabel}>{label}</span>
      <div className={s.fieldValue}>{value ?? "-"}</div>
    </div>
  );
}

function formatChannel(ch?: string) {
  if (ch === "CALL") return "전화";
  if (ch === "CHATTING") return "채팅";
  return ch ?? "-";
}

function formatDuration(sec?: number) {
  if (sec == null) return "-";
  return `${Math.round(sec / 60)}분`;
}

function formatCategory(d: DemoConsultDataResponse) {
  return [d.largeCategory, d.mediumCategory, d.smallCategory].filter(Boolean).join(" — ") || "-";
}

export function ConsultationResultConsultCard({ demo }: Props) {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <div className={s.cardTitleRow}>
          <span>📅</span>
          <h2 className={s.cardTitle}>상담 기본 정보</h2>
        </div>
      </div>
      <div className={s.cardBody}>
        <div className={s.grid2}>
          <Field label="상담 채널" value={formatChannel(demo.channel)} />
          <Field label="카테고리"  value={formatCategory(demo)} />
        </div>
        <Field label="상담 시간" value={formatDuration(demo.durationSec)} />
      </div>
    </div>
  );
}
