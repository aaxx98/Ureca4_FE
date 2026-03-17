import * as s from "./ConsultationListPage.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const GROUP_SIZE = 5;

export function ConsultationListPagination({
  currentPage,
  totalPages,
  totalElements,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const start = (currentPage - 1) * pageSize + 1;
  const end   = Math.min(currentPage * pageSize, totalElements);

  const currentGroup    = Math.ceil(currentPage / GROUP_SIZE);
  const groupStart      = (currentGroup - 1) * GROUP_SIZE + 1;
  const groupEnd        = Math.min(groupStart + GROUP_SIZE - 1, totalPages);
  const pages           = Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => groupStart + i);

  const prevGroupFirst  = groupStart - GROUP_SIZE;   // < 버튼
  const nextGroupFirst  = groupStart + GROUP_SIZE;   // > 버튼

  const isFirstGroup = currentGroup === 1;
  const isLastGroup  = nextGroupFirst > totalPages;

  return (
    <div className={s.pagination}>
      <span className={s.pageInfo}>
        {start.toLocaleString()}–{end.toLocaleString()} / {totalElements.toLocaleString()}건
      </span>

      <div className={s.pageButtons}>
        {/* 맨 앞 */}
        <button
          type="button"
          className={isFirstGroup ? s.pageBtnDisabled : s.pageBtn}
          onClick={() => onPageChange(1)}
          disabled={isFirstGroup}
        >
          {"«"}
        </button>

        {/* 이전 그룹 */}
        <button
          type="button"
          className={isFirstGroup ? s.pageBtnDisabled : s.pageBtn}
          onClick={() => onPageChange(prevGroupFirst)}
          disabled={isFirstGroup}
        >
          {"‹"}
        </button>

        {/* 현재 그룹 5개 */}
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            className={p === currentPage ? s.pageBtnActive : s.pageBtn}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}

        {/* 다음 그룹 */}
        <button
          type="button"
          className={isLastGroup ? s.pageBtnDisabled : s.pageBtn}
          onClick={() => onPageChange(nextGroupFirst)}
          disabled={isLastGroup}
        >
          {"›"}
        </button>

        {/* 맨 뒤 */}
        <button
          type="button"
          className={isLastGroup ? s.pageBtnDisabled : s.pageBtn}
          onClick={() => onPageChange(totalPages)}
          disabled={isLastGroup}
        >
          {"»"}
        </button>
      </div>
    </div>
  );
}
