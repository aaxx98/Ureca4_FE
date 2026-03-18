import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getNoticeListKey, useGetNoticeListQuery, useMutationDeleteNoticeQuery } from "../../../shared/api/generated/notice";
import { useGetMyInfoQuery } from "../../../shared/api/generated/auth";
import { getRole } from "../../../shared/api/roleStore";
import { ROUTES } from "../../../shared/config/routes";
import { ContextNavItem } from "../../../shared/ui/ContextNavItem";
import { AnalysisIcon, NoticeIcon } from "../../../shared/ui/icons";
import * as layout from "../../../shared/ui/pageLayout.css";
import { Button } from "../../../shared/ui/Button/Button";
import { AppSidebar } from "../../../widgets/AppSidebar/AppSidebar";
import { NoticeDetailModal } from "./NoticeDetailModal";
import { NoticeFormModal } from "./NoticeFormModal";
import { NoticeTable } from "./NoticeTable";
import * as s from "./NoticePage.css";

const PAGE_SIZE  = 10;
const GROUP_SIZE = 5;

export function NoticePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId,  setSelectedId]  = useState<number | null>(null);
  const [showCreate,  setShowCreate]  = useState(false);
  const [editId,      setEditId]      = useState<number | null>(null);
  const isAdmin        = getRole() === "관리자";
  const myName         = useGetMyInfoQuery().data?.name;
  const queryClient    = useQueryClient();
  const deleteMutation = useMutationDeleteNoticeQuery();

  const { data, isPending, isError } = useGetNoticeListQuery({
    page: currentPage - 1,
    size: PAGE_SIZE,
  });

  const items         = data?.data?.content ?? [];
  const totalElements = data?.data?.totalElements ?? 0;
  const totalPages    = data?.data?.totalPages    ?? 1;
  const start        = (currentPage - 1) * PAGE_SIZE + 1;
  const end          = Math.min(currentPage * PAGE_SIZE, totalElements);
  const currentGroup = Math.ceil(currentPage / GROUP_SIZE);
  const groupStart   = (currentGroup - 1) * GROUP_SIZE + 1;
  const groupEnd     = Math.min(groupStart + GROUP_SIZE - 1, totalPages);
  const pages        = Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => groupStart + i);
  const isFirstGroup = currentGroup === 1;
  const isLastGroup  = groupStart + GROUP_SIZE > totalPages;

  function handlePageChange(page: number) { setCurrentPage(page); }

  function handleDelete(noticeId: number) {
    if (!window.confirm("이 공지를 삭제할까요?")) return;
    deleteMutation.mutate({ noticeId }, {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: getNoticeListKey() }),
    });
  }

  return (
    <>
      <AppSidebar label="대시보드">
        <ContextNavItem icon={<AnalysisIcon />} label="우수 사례 게시판" to={ROUTES.EXCELLENT} />
        <ContextNavItem icon={<NoticeIcon />}   label="공지사항"         to={ROUTES.NOTICE} isActive />
      </AppSidebar>

      <main className={layout.main}>
        <div className={s.pageHeader}>
          <div className={s.pageHeaderRow}>
            <div>
              <h1 className={s.headerTitle}>공지사항</h1>
              <p className={s.headerSubtitle}>고정된 공지사항을 필독해주세요.</p>
            </div>
            {isAdmin && (
              <Button variant="primary" type="button" onClick={() => setShowCreate(true)}>공지 등록</Button>
            )}
          </div>
        </div>

        <div className={s.content}>
          {isPending && <p className={s.stateText}>불러오는 중...</p>}
          {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}

          {!isPending && !isError && items.length === 0 && (
            <p className={s.stateText}>등록된 공지사항이 없습니다.</p>
          )}

          {!isPending && !isError && items.length > 0 && (
            <>
              <div className={s.tableAnimate} key={currentPage}>
                <NoticeTable
                  items={items}
                  onRowClick={setSelectedId}
                  isAdmin={isAdmin}
                  myName={myName}
                  onEdit={setEditId}
                  onDelete={handleDelete}
                />
              </div>

              <div className={s.tableCard}>
                <div className={s.pagination}>
                  <span className={s.pageInfo}>
                    {start.toLocaleString()}–{end.toLocaleString()} / {totalElements.toLocaleString()}건
                  </span>
                  <div className={s.pageButtons}>
                    <button type="button" className={isFirstGroup ? s.pageBtnDisabled : s.pageBtn} onClick={() => handlePageChange(1)} disabled={isFirstGroup}>«</button>
                    <button type="button" className={isFirstGroup ? s.pageBtnDisabled : s.pageBtn} onClick={() => handlePageChange(groupStart - GROUP_SIZE)} disabled={isFirstGroup}>‹</button>
                    {pages.map((pg) => (
                      <button key={pg} type="button" className={pg === currentPage ? s.pageBtnActive : s.pageBtn} onClick={() => handlePageChange(pg)}>{pg}</button>
                    ))}
                    <button type="button" className={isLastGroup ? s.pageBtnDisabled : s.pageBtn} onClick={() => handlePageChange(groupStart + GROUP_SIZE)} disabled={isLastGroup}>›</button>
                    <button type="button" className={isLastGroup ? s.pageBtnDisabled : s.pageBtn} onClick={() => handlePageChange(totalPages)} disabled={isLastGroup}>»</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {selectedId != null && (
        <NoticeDetailModal noticeId={selectedId} onClose={() => setSelectedId(null)} />
      )}
      {showCreate && (
        <NoticeFormModal mode="create" onClose={() => setShowCreate(false)} />
      )}
      {editId != null && (
        <NoticeFormModal mode="edit" noticeId={editId} onClose={() => setEditId(null)} />
      )}
    </>
  );
}
