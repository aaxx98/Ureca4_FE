import { useEffect, useRef, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { getNoticeListKey, useGetNoticeListQuery, useMutationDeleteNoticeQuery } from "../../../shared/api/generated/notice";
import { useGetMyInfoQuery } from "../../../shared/api/generated/auth";
import { getRole } from "../../../shared/api/roleStore";
import * as layout from "../../../shared/ui/pageLayout.css";
import { Button } from "../../../shared/ui/Button/Button";
import { DashboardSidebar } from "../../../widgets/DashboardSidebar/DashboardSidebar";
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
  const [newBannerTitle, setNewBannerTitle] = useState<string | null>(null);
  const bannerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id: notifId } = useSearch({ strict: false }) as any;

  useEffect(() => { if (notifId != null) setSelectedId(notifId); }, [notifId]);

  const isAdmin        = getRole() === "관리자";
  const myName         = useGetMyInfoQuery().data?.name;
  const queryClient    = useQueryClient();
  const deleteMutation = useMutationDeleteNoticeQuery();

  const { data, isPending, isError } = useGetNoticeListQuery(
    { page: currentPage - 1, size: PAGE_SIZE },
    { query: { staleTime: 0, refetchOnMount: "always" } },
  );

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

  function handleBannerDismiss() {
    if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
    setNewBannerTitle(null);
  }

  function handleCreated(title: string) {
    setNewBannerTitle(title);
    if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
    bannerTimerRef.current = setTimeout(() => setNewBannerTitle(null), 7_000);
  }

  function handleDelete(noticeId: number) {
    if (!window.confirm("이 공지를 삭제할까요?")) return;
    deleteMutation.mutate({ noticeId }, {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: getNoticeListKey() }),
    });
  }

  return (
    <>
      <DashboardSidebar isAdmin={isAdmin} />

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
          {newBannerTitle && (
            <div className={s.newNoticeBanner}>
              <span>🔔</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p className={s.newNoticeBannerTitle}>새 공지가 등록되었습니다</p>
                <p className={s.newNoticeBannerSub}>{newBannerTitle}</p>
              </div>
              <button type="button" className={s.newNoticeDismiss} onClick={handleBannerDismiss}>×</button>
            </div>
          )}
          {isPending && <p className={s.stateText}>불러오는 중...</p>}
          {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}
          {!isPending && !isError && items.length === 0 && <p className={s.stateText}>등록된 공지사항이 없습니다.</p>}
          {!isPending && !isError && items.length > 0 && (
            <>
              <div className={s.tableAnimate} key={currentPage}>
                <NoticeTable items={items} onRowClick={setSelectedId} isAdmin={isAdmin} myName={myName} onEdit={setEditId} onDelete={handleDelete} />
              </div>
              <div className={s.tableCard}>
                <div className={s.pagination}>
                  <span className={s.pageInfo}>{start.toLocaleString()}–{end.toLocaleString()} / {totalElements.toLocaleString()}건</span>
                  <div className={s.pageButtons}>
                    <button type="button" className={isFirstGroup ? s.pageBtnDisabled : s.pageBtn} onClick={() => setCurrentPage(1)} disabled={isFirstGroup}>«</button>
                    <button type="button" className={isFirstGroup ? s.pageBtnDisabled : s.pageBtn} onClick={() => setCurrentPage(groupStart - GROUP_SIZE)} disabled={isFirstGroup}>‹</button>
                    {pages.map((pg) => (
                      <button key={pg} type="button" className={pg === currentPage ? s.pageBtnActive : s.pageBtn} onClick={() => setCurrentPage(pg)}>{pg}</button>
                    ))}
                    <button type="button" className={isLastGroup ? s.pageBtnDisabled : s.pageBtn} onClick={() => setCurrentPage(groupStart + GROUP_SIZE)} disabled={isLastGroup}>›</button>
                    <button type="button" className={isLastGroup ? s.pageBtnDisabled : s.pageBtn} onClick={() => setCurrentPage(totalPages)} disabled={isLastGroup}>»</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {selectedId != null && <NoticeDetailModal noticeId={selectedId} onClose={() => setSelectedId(null)} />}
      {showCreate && <NoticeFormModal mode="create" onClose={() => setShowCreate(false)} onCreated={handleCreated} />}
      {editId != null && <NoticeFormModal mode="edit" noticeId={editId} onClose={() => setEditId(null)} />}
    </>
  );
}
