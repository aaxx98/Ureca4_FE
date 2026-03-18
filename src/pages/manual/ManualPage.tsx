import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../shared/api/client";
import type { ManualResponse } from "../../shared/api/generated/api.schemas";
import { useGetCategoriesQuery } from "../../shared/api/generated/meta-controller";
import * as layout from "../../shared/ui/pageLayout.css";
import * as s from "./ManualPage.css";

interface ManualPageResponse {
  content: ManualResponse[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}

function useManualHistoryQuery(params: { categoryCode?: string; page: number; size: number }) {
  return useQuery({
    queryKey: ["/manuals/history", params],
    queryFn: ({ signal }) =>
      apiClient<ManualPageResponse>({
        url: "/manuals/history",
        method: "GET",
        params: Object.fromEntries(
          Object.entries({ ...params, categoryCode: params.categoryCode || undefined })
            .filter(([, v]) => v !== undefined),
        ) as Record<string, string | number | boolean>,
        signal,
      }),
  });
}

const PAGE_SIZE = 20;

export function ManualPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [page, setPage]                         = useState(0);
  const [expandedId, setExpandedId]             = useState<number | null>(null);

  const { data, isPending, isError } = useManualHistoryQuery({
    categoryCode: selectedCategory || undefined,
    page,
    size: PAGE_SIZE,
  });

  const { data: categories = [] } = useGetCategoriesQuery();

  const items         = data?.content ?? [];
  const totalPages    = data?.totalPages ?? 1;
  const totalElements = data?.totalElements ?? 0;

  function handleCategoryChange(value: string) {
    setSelectedCategory(value);
    setPage(0);
    setExpandedId(null);
  }

  return (
    <main className={layout.main}>
      <div className={s.pageWrapper}>
        <div className={s.pageHeader}>
          <div className={s.headerBadge}>📖 MANUAL</div>
          <h1 className={s.headerTitle}>매뉴얼</h1>
          <p className={s.headerSubtitle}>상담 업무에 참고할 매뉴얼을 확인하세요</p>
        </div>

        <div className={s.content}>
          {/* ─── 필터 ─── */}
          <div className={s.filterBar}>
            <div className={s.filterGroup}>
              <label className={s.filterLabel}>카테고리</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className={s.filterSelect}
              >
                <option value="">전체 카테고리</option>
                {categories.map((cat) => (
                  <option key={cat.categoryCode} value={cat.categoryCode ?? ""}>
                    {cat.smallCategory ?? cat.mediumCategory ?? cat.largeCategory ?? cat.categoryCode}
                  </option>
                ))}
              </select>
            </div>

            {selectedCategory && (
              <button
                type="button"
                className={s.resetBtn}
                onClick={() => { setSelectedCategory(""); setPage(0); setExpandedId(null); }}
              >
                필터 초기화
              </button>
            )}

            <span className={s.totalCount}>총 {totalElements.toLocaleString()}건</span>
          </div>

          {/* ─── 목록 ─── */}
          {isPending && <p className={s.stateText}>불러오는 중...</p>}
          {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}
          {!isPending && !isError && items.length === 0 && (
            <p className={s.stateText}>등록된 매뉴얼이 없습니다.</p>
          )}
          {!isPending && !isError && items.length > 0 && (
            <div className={s.list}>
              {items.map((item) => {
                const id     = item.manualId ?? 0;
                const isOpen = expandedId === id;
                return (
                  <div key={id} className={s.card}>
                    <button
                      type="button"
                      className={s.cardHeader}
                      onClick={() => setExpandedId(isOpen ? null : id)}
                    >
                      <div className={s.cardHeaderLeft}>
                        {item.categoryName && (
                          <span className={s.categoryPill}>{item.categoryName}</span>
                        )}
                        <span className={s.cardTitle}>{item.title ?? "(제목 없음)"}</span>
                      </div>
                      <div className={s.cardHeaderRight}>
                        {item.updatedAt && (
                          <span className={s.dateText}>{item.updatedAt.slice(0, 10)}</span>
                        )}
                        <span
                          className={s.chevron}
                          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                        >
                          ›
                        </span>
                      </div>
                    </button>
                    {isOpen && (
                      <div className={s.cardBody}>
                        <p className={s.cardContent}>{item.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ─── 페이지네이션 ─── */}
          {!isPending && !isError && totalPages > 1 && (
            <div className={s.pagination}>
              <button
                type="button"
                className={s.pageBtn}
                disabled={page === 0}
                onClick={() => { setPage(0); setExpandedId(null); }}
              >
                «
              </button>
              <button
                type="button"
                className={s.pageBtn}
                disabled={page === 0}
                onClick={() => { setPage(p => p - 1); setExpandedId(null); }}
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i).map((p) => (
                <button
                  key={p}
                  type="button"
                  className={p === page ? s.pageBtnActive : s.pageBtn}
                  onClick={() => { setPage(p); setExpandedId(null); }}
                >
                  {p + 1}
                </button>
              ))}
              <button
                type="button"
                className={s.pageBtn}
                disabled={page === totalPages - 1}
                onClick={() => { setPage(p => p + 1); setExpandedId(null); }}
              >
                ›
              </button>
              <button
                type="button"
                className={s.pageBtn}
                disabled={page === totalPages - 1}
                onClick={() => { setPage(totalPages - 1); setExpandedId(null); }}
              >
                »
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
