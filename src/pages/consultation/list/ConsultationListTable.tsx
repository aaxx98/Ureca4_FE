import type { ConsultationListItemDto } from "../../../shared/api/generated/api.schemas";
import * as s from "./ConsultationListPage.css";

type BadgeVariant = keyof typeof s.badgeVariant;

const TYPE_VARIANT: Record<string, BadgeVariant> = {
  문의: "blue",
  불만: "red",
  가입: "green",
  해지: "orange",
  변경: "purple",
};

const SUMMARY_VARIANT: Record<string, BadgeVariant> = {
  요약완료: "green",
  요청됨:   "orange",
  실패:     "red",
};

function Stars({ value }: { value?: number }) {
  const count = Math.min(Math.max(value ?? 0, 0), 5);
  return (
    <span>
      <span className={s.starsFilled}>{"★".repeat(count)}</span>
      <span className={s.starsEmpty}>{"★".repeat(5 - count)}</span>
    </span>
  );
}

interface TableProps {
  items: ConsultationListItemDto[];
  onDetail: (consultId: number) => void;
}

export function ConsultationListTable({ items, onDetail }: TableProps) {
  if (items.length === 0) {
    return (
      <div className={s.tableWrapper}>
        <p className={s.stateText}>상담 내역이 없습니다.</p>
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
            <th className={s.th}>연락처</th>
            <th className={s.th}>유형</th>
            <th className={s.th}>채널</th>
            <th className={s.th}>상담사</th>
            <th className={s.th}>요약상태</th>
            <th className={s.th}>만족도</th>
            <th className={s.th}>상담일시</th>
            <th className={s.th}>상세</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.consultId} className={s.tr}>
              <td className={s.td}>{item.consultationNumber ?? "–"}</td>
              <td className={s.td}>{item.customerName ?? "–"}</td>
              <td className={s.td}>{item.customerPhone ?? "–"}</td>
              <td className={s.td}>
                {item.consultationType ? (
                  <span className={s.badgeVariant[TYPE_VARIANT[item.consultationType] ?? "gray"]}>
                    {item.consultationType}
                  </span>
                ) : "–"}
              </td>
              <td className={s.td}>{item.channel ?? "–"}</td>
              <td className={s.td}>{item.counselorName ?? "–"}</td>
              <td className={s.td}>
                {item.summaryStatus ? (
                  <span className={s.badgeVariant[SUMMARY_VARIANT[item.summaryStatus] ?? "gray"]}>
                    {item.summaryStatus}
                  </span>
                ) : "–"}
              </td>
              <td className={s.td}>
                <Stars value={item.satisfaction} />
              </td>
              <td className={s.td}>{item.consultedAt ?? "–"}</td>
              <td className={s.td}>
                <button
                  type="button"
                  className={s.actionBtnDetail}
                  onClick={() => item.consultId != null && onDetail(item.consultId)}
                >
                  자세히 보기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
