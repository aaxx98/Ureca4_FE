import type { ConsultationBasicInfoDto } from "../../../shared/api/generated/api.schemas";
import * as s from "./ConsultationDetailModal.css";

function StarRating({ value }: { value: number }) {
  return (
    <div className={s.starRow}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= value ? s.starFilled : s.starEmpty}>★</span>
      ))}
      <span className={s.starCount}>{value}점</span>
    </div>
  );
}

type FieldItem =
  | { type: "text"; label: string; value?: string; full?: boolean }
  | { type: "stars"; label: string; value?: number };

interface Props {
  info?: ConsultationBasicInfoDto;
}

export function ConsultationDetailBasicInfo({ info }: Props) {
  if (!info) return null;

  // API 응답 properties 순서 그대로
  const fields: FieldItem[] = [
    { type: "text",  label: "고객명",           value: info.customerName },
    { type: "text",  label: "연락처",           value: info.customerPhone },
    { type: "text",  label: "이메일",           value: info.customerEmail },
    { type: "text",  label: "채널",             value: info.channel },
    { type: "text",  label: "상담 유형",        value: info.consultationType },
    { type: "text",  label: "처리 상태",        value: info.processStatus },
    { type: "text",  label: "담당 상담사",      value: info.counselorName },
    { type: "stars", label: "만족도",           value: info.satisfaction },
    { type: "text",  label: "상담일시",         value: info.consultedAt },
    { type: "text",  label: "상담 시간",        value: info.durationMinutes != null ? `${info.durationMinutes}분` : undefined },
    { type: "text",  label: "관련 상품/서비스", value: info.relatedProducts, full: true },
    { type: "text",  label: "태그",             value: info.tags, full: true },
  ];

  return (
    <div className={s.infoCardGrid}>
      {fields.map((field) => {
        if (field.type === "stars") {
          if (field.value == null) return null;
          return (
            <div key={field.label} className={s.fieldGroup}>
              <p className={s.fieldLabel}>{field.label}</p>
              <StarRating value={field.value} />
            </div>
          );
        }
        if (!field.value) return null;
        return (
          <div key={field.label} className={field.full ? s.fieldGroupFull : s.fieldGroup}>
            <p className={s.fieldLabel}>{field.label}</p>
            <div className={s.fieldBox}>{field.value}</div>
          </div>
        );
      })}
    </div>
  );
}
