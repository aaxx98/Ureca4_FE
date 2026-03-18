import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getNoticeListKey, useGetNoticeDetailQuery, useMutationDeleteNoticeQuery } from "../../../shared/api/generated/notice";
import { useGetMyInfoQuery } from "../../../shared/api/generated/auth";
import { getRole } from "../../../shared/api/roleStore";
import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import { Button } from "../../../shared/ui/Button/Button";
import { NoticeDetailBody } from "./NoticeDetailBody";
import { NoticeFormModal } from "./NoticeFormModal";

const CLOSE_DELAY = 180;

interface Props { noticeId: number; onClose: () => void; }

export function NoticeDetailModal({ noticeId, onClose }: Props) {
  const [isClosing, setIsClosing] = useState(false);
  const [showEdit,  setShowEdit]  = useState(false);
  const { data, isPending, isError } = useGetNoticeDetailQuery(noticeId, { query: { staleTime: 0 } });
  const notice         = data?.data;
  const isAdmin        = getRole() === "관리자";
  const myName         = useGetMyInfoQuery().data?.name;
  const isMyNotice     = notice?.authorName === myName;
  const queryClient    = useQueryClient();
  const deleteMutation = useMutationDeleteNoticeQuery();

  function handleClose() {
    setIsClosing(true);
    queryClient.invalidateQueries({ queryKey: getNoticeListKey() });
    setTimeout(onClose, CLOSE_DELAY);
  }

  function handleDelete() {
    if (!notice?.noticeId) return;
    if (!window.confirm("이 공지를 삭제할까요?")) return;
    deleteMutation.mutate({ noticeId: notice.noticeId }, {
      onSuccess: () => { queryClient.invalidateQueries({ queryKey: getNoticeListKey() }); handleClose(); },
    });
  }

  return (
    <>
      <BaseModal title={notice?.title ?? "공지사항"} onClose={handleClose} isClosing={isClosing} size="lg"
        footer={isAdmin && isMyNotice ? (
          <div style={{ display: "flex", gap: "8px", width: "100%", justifyContent: "flex-end" }}>
            <Button variant="secondary" type="button" onClick={() => setShowEdit(true)}>수정</Button>
            <Button variant="ghost" type="button" onClick={handleDelete} disabled={deleteMutation.isPending}
              style={{ color: "#DC2626" }}>삭제</Button>
          </div>
        ) : undefined}
      >
        {isPending && <p style={{ textAlign: "center", color: "#6B7280", fontSize: "14px" }}>불러오는 중...</p>}
        {isError   && <p style={{ textAlign: "center", color: "#6B7280", fontSize: "14px" }}>공지를 불러오지 못했습니다.</p>}
        {notice && <NoticeDetailBody notice={notice} />}
      </BaseModal>
      {showEdit && notice?.noticeId != null && (
        <NoticeFormModal mode="edit" noticeId={notice.noticeId} onClose={() => setShowEdit(false)} />
      )}
    </>
  );
}
