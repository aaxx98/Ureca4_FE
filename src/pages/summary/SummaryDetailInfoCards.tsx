import type { ConsultationSummaryDetailResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./SummaryPage.css";

const CHANNEL_LABEL: Record<string, string> = { call: "전화 상담", chatting: "채팅 상담" };

function formatDuration(sec?: number) {
  if (sec == null) return "-";
  const m = Math.floor(sec / 60);
  const r = sec % 60;
  return m > 0 ? `${m}분 ${r}초` : `${r}초`;
}

function formatDate(str?: string) {
  if (!str) return "-";
  const d = new Date(str);
  if (Number.isNaN(d.getTime())) return str;
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${d.getHours()}시 ${d.getMinutes()}분`;
}

function Stars({ score }: { score?: number }) {
  if (score == null) return <span>-</span>;
  return (
    <span>
      <span style={{ color: "#F59E0B" }}>{"★".repeat(Math.min(score, 5))}</span>
      <span style={{ color: "#E5E7EB" }}>{"★".repeat(Math.max(0, 5 - score))}</span>
      <span style={{ marginLeft: 4, fontSize: "10px", color: "#9CA3AF" }}>({score}점)</span>
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value?: React.ReactNode }) {
  return (
    <div className={s.infoRow}>
      <span className={s.infoRowLabel}>{label}</span>
      <span className={s.infoRowValue}>{value ?? "-"}</span>
    </div>
  );
}

interface Props {
  data: ConsultationSummaryDetailResponse;
}

export function SummaryDetailInfoCards({ data }: Props) {
  const { customer, agent, channel, consultedAt, durationSec, category } = data;

  const categoryStr = [category?.large, category?.medium, category?.small]
    .filter(Boolean).join(" › ") || "-";

  const ageGender = [customer?.ageGroup, customer?.gender].filter(Boolean).join(" · ") || "-";

  return (
    <div className={s.infoSection}>
      <div className={s.infoBlock}>
        <p className={s.infoBlockTitle}>고객 정보</p>
        <div className={s.infoGrid}>
          <InfoRow label="이름"     value={customer?.name} />
          <InfoRow label="전화번호" value={customer?.phone} />
          <InfoRow label="등급"     value={customer?.grade} />
          <InfoRow label="유형"     value={customer?.type} />
          <InfoRow label="연령/성별" value={ageGender} />
          <InfoRow label="만족도"   value={<Stars score={customer?.satisfiedScore} />} />
        </div>
      </div>

      <div className={s.infoBlock}>
        <p className={s.infoBlockTitle}>상담 정보</p>
        <div className={s.infoGrid}>
          <InfoRow label="채널"     value={CHANNEL_LABEL[channel ?? ""] ?? channel} />
          <InfoRow label="상담 시간" value={formatDuration(durationSec)} />
          <InfoRow label="카테고리" value={categoryStr} />
          <InfoRow label="상담사"   value={agent?.name} />
          <InfoRow label="상담 일시" value={formatDate(consultedAt)} />
        </div>
      </div>
    </div>
  );
}
