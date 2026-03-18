import type { ConsultationSummaryDto } from "../../shared/api/generated/api.schemas";
import * as s from "./SummaryPage.css";

const CHANNEL_LABEL: Record<string, string> = {
  call:     "전화 상담",
  chatting: "채팅 상담",
};

function formatDate(raw?: string) {
  if (!raw) return "–";
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return raw;
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${d.getHours()}시 ${String(d.getMinutes()).padStart(2, "0")}분`;
}

interface Props {
  items: ConsultationSummaryDto[];
  onDetail: (consultId: number) => void;
}

export function SummaryTable({ items, onDetail }: Props) {
  if (items.length === 0) {
    return (
      <div className={s.tableWrapper}>
        <p className={s.stateText}>요약 내역이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th}>상담번호</th>
            <th className={s.th}>고객명</th>
            <th className={s.th}>채널</th>
            <th className={s.th}>카테고리</th>
            <th className={s.th}>요약 미리보기</th>
            <th className={s.th}>상담사</th>
            <th className={s.th}>상담일시</th>
            <th className={s.th}>상세</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.consultId} className={s.tr}>
              <td className={s.td}>#{item.consultId ?? "–"}</td>
              <td className={s.td}>{item.customerName ?? "–"}</td>
              <td className={s.td}>
                {item.channel
                  ? <span className={s.badgeVariant.gray}>{CHANNEL_LABEL[item.channel] ?? item.channel}</span>
                  : "–"}
              </td>
              <td className={s.td}>
                {[item.categoryLarge, item.categoryMedium].filter(Boolean).join(" / ") || "–"}
              </td>
              <td className={s.tdEllipsis}>{item.summaryContent ?? "–"}</td>
              <td className={s.td}>{item.agentName ?? "–"}</td>
              <td className={s.td}>{formatDate(item.consultedAt)}</td>
              <td className={s.td}>
                <button
                  type="button"
                  className={s.actionBtnDetail}
                  onClick={() => item.consultId != null && onDetail(item.consultId)}
                >
                  상세
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
