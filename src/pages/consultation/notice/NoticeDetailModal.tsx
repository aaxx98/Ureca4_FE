import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { NoticeResponse } from "../../../shared/api/generated/api.schemas";
import { getNoticeDetailKey, getNoticeListKey, useGetNoticeDetailQuery, useMutationDeleteNoticeQuery } from "../../../shared/api/generated/notice";
import { useGetMyInfoQuery } from "../../../shared/api/generated/auth";
import { getRole } from "../../../shared/api/roleStore";
import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import { Button } from "../../../shared/ui/Button/Button";
import * as ms from "../list/ConsultationDetailModal.css";
import { NoticeFormModal } from "./NoticeFormModal";

const STATUS_STYLE: Record<string, { label: string; bg: string; color: string }> = {
  DRAFT:     { label: "초안",   bg: "#F3F4F6", color: "#374151" },
  SCHEDULED: { label: "예약",   bg: "#EFF6FF", color: "#1E40AF" },
  ACTIVE:    { label: "활성",   bg: "#ECFDF5", color: "#065F46" },
  ARCHIVED:  { label: "보관",   bg: "#FEF3C7", color: "#92400E" },
  DELETED:   { label: "삭제",   bg: "#FEE2E2", color: "#991B1B" },
};
const TYPE_STYLE: Record<string, { label: string; bg: string; color: string }> = {
  GENERAL: { label: "일반",   bg: "#F3F4F6", color: "#374151" },
  URGENT:  { label: "긴급",   bg: "#FEE2E2", color: "#991B1B" },
  SYSTEM:  { label: "시스템", bg: "#EFF6FF", color: "#1E40AF" },
  POLICY:  { label: "정책",   bg: "#F5F3FF", color: "#5B21B6" },
  EVENT:   { label: "이벤트", bg: "#ECFDF5", color: "#065F46" },
};
const TARGET_STYLE: Record<string, { label: string; bg: string; color: string }> = {
  ALL:   { label: "전체 공개",   bg: "#F0FDF4", color: "#166534" },
  AGENT: { label: "상담사 전용", bg: "#EFF6FF", color: "#1E40AF" },
  ADMIN: { label: "관리자 전용", bg: "#F5F3FF", color: "#5B21B6" },
};

const CLOSE_DELAY = 180;

function formatDate(dateStr?: string) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
}

function Badge({ bg, color, children }: { bg: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "4px 12px", borderRadius: "999px", backgroundColor: bg, color, fontSize: "12px", fontWeight: 600 }}>
      {children}
    </div>
  );
}

interface Props { noticeId: number; onClose: () => void; }

export function NoticeDetailModal({ noticeId, onClose }: Props) {
  const [isClosing, setIsClosing] = useState(false);
  const [showEdit,  setShowEdit]  = useState(false);
  const { data, isPending, isError } = useGetNoticeDetailQuery(noticeId);
  const notice         = data?.data;
  const isAdmin        = getRole() === "관리자";
  const myName         = useGetMyInfoQuery().data?.name;
  const isMyNotice     = notice?.authorName === myName;
  const queryClient    = useQueryClient();
  const deleteMutation = useMutationDeleteNoticeQuery();

  function handleClose() {
    setIsClosing(true);
    queryClient.invalidateQueries({ queryKey: getNoticeDetailKey(noticeId) });
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
        {isPending && <p className={ms.stateText}>불러오는 중...</p>}
        {isError   && <p className={ms.stateText}>공지를 불러오지 못했습니다.</p>}
        {notice && <NoticeDetailBody notice={notice} />}
      </BaseModal>
      {showEdit && notice?.noticeId != null && (
        <NoticeFormModal mode="edit" noticeId={notice.noticeId} onClose={() => setShowEdit(false)} />
      )}
    </>
  );
}

const STATUS_INFO: Record<string, { msg: string; color: string; bg: string }> = {
  SCHEDULED: { msg: "예약 상태입니다. 게시 시작 시각이 되면 자동으로 활성화됩니다.", color: "#1E40AF", bg: "#EFF6FF" },
  ARCHIVED:  { msg: "보관 상태입니다. 게시 기간이 종료되었습니다. 날짜를 수정하면 재활성화됩니다.", color: "#92400E", bg: "#FEF3C7" },
};

function NoticeDetailBody({ notice }: { notice: NoticeResponse }) {
  const typeStyle   = TYPE_STYLE[notice.noticeType   ?? ""] ?? TYPE_STYLE.GENERAL;
  const statusStyle = STATUS_STYLE[notice.status     ?? ""] ?? STATUS_STYLE.DRAFT;
  const targetStyle = TARGET_STYLE[notice.targetRole ?? ""] ?? TARGET_STYLE.ALL;
  const statusInfo  = notice.status ? STATUS_INFO[notice.status] : undefined;

  return (
    <div className={ms.fieldStack}>
      {statusInfo && (
        <div style={{ padding: "10px 14px", borderRadius: "8px", backgroundColor: statusInfo.bg, color: statusInfo.color, fontSize: "13px" }}>
          {statusInfo.msg}
        </div>
      )}
      <div className={ms.fieldGroup}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <Badge bg={typeStyle.bg}   color={typeStyle.color}>{typeStyle.label}</Badge>
          <Badge bg={statusStyle.bg} color={statusStyle.color}>{statusStyle.label}</Badge>
          <Badge bg={targetStyle.bg} color={targetStyle.color}>{targetStyle.label}</Badge>
          {notice.isPinned && <Badge bg="#FEF3C7" color="#92400E">📌 고정</Badge>}
          <Badge bg="#F3F4F6" color="#374151">{notice.authorName ?? "-"}</Badge>
        </div>
      </div>

      <div className={ms.infoGrid}>
        <div className={ms.infoItem}>
          <span className={ms.infoLabel}>작성일</span>
          <span className={ms.infoValue}>{formatDate(notice.createdAt)}</span>
        </div>
        <div className={ms.infoItem}>
          <span className={ms.infoLabel}>조회수</span>
          <span className={ms.infoValue}>{(notice.viewCount ?? 0).toLocaleString()}</span>
        </div>
        {notice.visibleFrom && (
          <div className={ms.infoItem}>
            <span className={ms.infoLabel}>게시 시작</span>
            <span className={ms.infoValue}>{formatDate(notice.visibleFrom)}</span>
          </div>
        )}
        {notice.visibleTo && (
          <div className={ms.infoItem}>
            <span className={ms.infoLabel}>게시 종료</span>
            <span className={ms.infoValue}>{formatDate(notice.visibleTo)}</span>
          </div>
        )}
      </div>

      <div className={ms.fieldGroup}>
        <p className={ms.fieldLabel}>내용</p>
        <div className={ms.fieldBoxMultiline}>{notice.content ?? "내용이 없습니다."}</div>
      </div>
    </div>
  );
}
