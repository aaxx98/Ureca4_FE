import { keepPreviousData } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import type { ListParams } from "../../shared/api/generated/api.schemas";
import type { FilterDraft } from "./filterDraft";
import { useGetSummaryListQuery } from "../../shared/api/generated/summary-controller";
import * as layout from "../../shared/ui/pageLayout.css";
import { SavedFiltersModal } from "./SavedFiltersModal";
import { SummaryDetailModal } from "./SummaryDetailModal";
import { SummaryFilterPanel } from "./SummaryFilterPanel";
import * as s from "./SummaryPage.css";
import { SummaryPagination } from "./SummaryPagination";
import { SummaryTable } from "./SummaryTable";

const PAGE_SIZE   = 10;
const CLOSE_DELAY = 180;

export function SummaryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterParams, setFilterParams] = useState<Omit<ListParams, "page" | "size">>({});
  const [selectedId, setSelectedId]         = useState<number | null>(null);
  const [isClosing, setIsClosing]           = useState(false);
  const [showSaved, setShowSaved]           = useState(false);
  const [isSavedClosing, setIsSavedClosing] = useState(false);
  const [forceDraft, setForceDraft]         = useState<FilterDraft | null>(null);

  const params: ListParams = { ...filterParams, page: currentPage - 1, size: PAGE_SIZE };
  const { data, isPending, isError } = useGetSummaryListQuery(params, {
    query: { placeholderData: keepPreviousData },
  });

  const items         = data?.content ?? [];
  const totalElements = data?.totalElements ?? 0;
  const totalPages    = data?.totalPages ?? 1;

  const handleSearch = useCallback((newParams: Omit<ListParams, "page" | "size">) => {
    setFilterParams(newParams);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => setCurrentPage(page), []);

  const handleOpenDetail = useCallback((consultId: number) => {
    setIsClosing(false);
    setSelectedId(consultId);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedId(null);
      setIsClosing(false);
    }, CLOSE_DELAY);
  }, []);

  return (
    <>
      <main className={layout.main}>
        <div className={s.pageWrapper}>
          <div className={s.header}>
            <div className={s.headerLeft}>
              <h1 className={s.title}>상담요약</h1>
              <p className={s.subtitle}>전체 {totalElements.toLocaleString()}건의 요약 내역</p>
            </div>
            <button type="button" className={s.savedFiltersBtn} onClick={() => setShowSaved(true)}>
              ☆ 저장된 조건 목록
            </button>
          </div>

          <SummaryFilterPanel onSearch={handleSearch} forceDraft={forceDraft} />

          <div className={s.content}>
            {isPending && <p className={s.stateText}>불러오는 중...</p>}
            {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}
            {!isError && items.length > 0 && (
              <>
                <div className={s.tableAnimate} key={currentPage}>
                  <SummaryTable items={items} onDetail={handleOpenDetail} />
                </div>
                <SummaryPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalElements={totalElements}
                  pageSize={PAGE_SIZE}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </div>
      </main>

      {selectedId != null && (
        <SummaryDetailModal
          consultId={selectedId}
          onClose={handleCloseDetail}
          isClosing={isClosing}
        />
      )}

      {showSaved && (
        <SavedFiltersModal
          onClose={() => {
            setIsSavedClosing(true);
            setTimeout(() => { setShowSaved(false); setIsSavedClosing(false); }, 180);
          }}
          isClosing={isSavedClosing}
          onApply={(draft) => {
            setForceDraft(draft);
            setIsSavedClosing(true);
            setTimeout(() => { setShowSaved(false); setIsSavedClosing(false); setForceDraft(null); }, 180);
          }}
        />
      )}
    </>
  );
}
