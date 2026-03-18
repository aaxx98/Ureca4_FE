import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getNoticeDetailKey, getNoticeListKey, useGetNoticeDetailQuery, useMutationPostNoticeQuery, useMutationPutNoticeQuery } from "../../../shared/api/generated/notice";
import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import { Button } from "../../../shared/ui/Button/Button";
import * as ms from "../list/ConsultationDetailModal.css";

const TYPE_OPTIONS = [
  { value: "GENERAL", label: "일반" }, { value: "URGENT", label: "긴급" }, { value: "SYSTEM", label: "시스템" },
  { value: "POLICY",  label: "정책" }, { value: "EVENT",  label: "이벤트" },
];
const ROLE_OPTIONS = [
  { value: "ALL", label: "전체" }, { value: "AGENT", label: "상담사" }, { value: "ADMIN", label: "관리자" },
];
const CB_LABEL = { display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", cursor: "pointer" } as const;

interface Props {
  mode: "create" | "edit";
  noticeId?: number;
  onClose: () => void;
  onCreated?: (title: string) => void;
}

export function NoticeFormModal({ mode, noticeId, onClose, onCreated }: Props) {
  const [isClosing, setIsClosing]     = useState(false);
  const [title, setTitle]             = useState("");
  const [content, setContent]         = useState("");
  const [noticeType, setNoticeType]   = useState<string>("GENERAL");
  const [targetRole, setTargetRole]   = useState<string>("ALL");
  const [isPinned, setIsPinned]       = useState(false);
  const [sendNotif, setSendNotif]     = useState(false);
  const [scheduled, setScheduled]     = useState(false);
  const [visibleFrom, setVisibleFrom] = useState("");
  const [visibleTo, setVisibleTo]     = useState("");
  const [errorMsg, setErrorMsg]       = useState("");
  const [initialized, setInitialized] = useState(mode === "create");

  const { data: detail } = useGetNoticeDetailQuery(noticeId ?? 0, {
    query: { enabled: mode === "edit" && noticeId != null },
  });

  useEffect(() => {
    const d = detail?.data;
    if (d && !initialized) {
      setTitle(d.title ?? "");
      setContent(d.content ?? "");
      setNoticeType(d.noticeType ?? "GENERAL");
      setTargetRole(d.targetRole ?? "ALL");
      setIsPinned(d.isPinned ?? false);
      const hasSchedule = !!(d.visibleFrom || d.visibleTo);
      setScheduled(hasSchedule);
      setVisibleFrom(d.visibleFrom?.slice(0, 10) ?? "");
      setVisibleTo(d.visibleTo?.slice(0, 10) ?? "");
      setInitialized(true);
    }
  }, [detail, initialized]);

  const queryClient  = useQueryClient();
  const postMutation = useMutationPostNoticeQuery();
  const putMutation  = useMutationPutNoticeQuery();
  const isPending    = postMutation.isPending || putMutation.isPending;
  function handleClose() { setIsClosing(true); setTimeout(onClose, 180); }

  function handleSubmit() {
    setErrorMsg("");
    const vFrom = scheduled && visibleFrom ? `${visibleFrom}T00:00:00` : undefined;
    const vTo   = scheduled && visibleTo   ? `${visibleTo}T23:59:59`   : undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const base  = { title, content, noticeType: noticeType as any, targetRole: targetRole as any, isPinned, visibleFrom: vFrom, visibleTo: vTo };
    const onError   = () => setErrorMsg("저장에 실패했습니다. 다시 시도해주세요.");
    const onSuccess = () => {
      queryClient.invalidateQueries({ queryKey: getNoticeListKey() });
      if (mode === "edit") queryClient.invalidateQueries({ queryKey: getNoticeDetailKey(noticeId!) });
      if (mode === "create") onCreated?.(title);
      handleClose();
    };
    if (mode === "create") postMutation.mutate({ data: { ...base, sendNotification: sendNotif } }, { onSuccess, onError });
    else putMutation.mutate({ noticeId: noticeId!, data: base }, { onSuccess, onError });
  }

  return (
    <BaseModal
      title={mode === "create" ? "공지 등록" : "공지 수정"}
      onClose={handleClose}
      isClosing={isClosing}
      size="lg"
      footer={
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", width: "100%" }}>
          <Button variant="secondary" type="button" onClick={handleClose} disabled={isPending}>취소</Button>
          <Button variant="primary"   type="button" onClick={handleSubmit} disabled={isPending || (mode === "edit" && !initialized)}>
            {mode === "create" ? "등록" : "저장"}
          </Button>
        </div>
      }
    >
      {mode === "edit" && !initialized ? <p className={ms.stateText}>불러오는 중...</p> : (
        <div className={ms.fieldStack}>
          <div className={ms.fieldGroup}>
            <label className={ms.fieldLabel}>제목</label>
            <input className={ms.fieldBox} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="공지 제목을 입력하세요" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div className={ms.fieldGroup}>
              <label className={ms.fieldLabel}>유형</label>
              <select className={ms.fieldBox} value={noticeType} onChange={(e) => setNoticeType(e.target.value)}>
                {TYPE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div className={ms.fieldGroup}>
              <label className={ms.fieldLabel}>대상</label>
              <select className={ms.fieldBox} value={targetRole} onChange={(e) => setTargetRole(e.target.value)}>
                {ROLE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <label style={CB_LABEL}><input type="checkbox" checked={isPinned} onChange={(e) => setIsPinned(e.target.checked)} />상단 고정</label>
            {mode === "create" && (
              <label style={CB_LABEL}><input type="checkbox" checked={sendNotif} onChange={(e) => setSendNotif(e.target.checked)} />알림 발송</label>
            )}
            <label style={CB_LABEL}><input type="checkbox" checked={scheduled} onChange={(e) => { setScheduled(e.target.checked); if (!e.target.checked) { setVisibleFrom(""); setVisibleTo(""); } }} />예약 발송</label>
          </div>
          {scheduled && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div className={ms.fieldGroup}>
                <label className={ms.fieldLabel}>게시 시작</label>
                <input type="date" className={ms.fieldBox} value={visibleFrom} onChange={(e) => setVisibleFrom(e.target.value)} />
              </div>
              <div className={ms.fieldGroup}>
                <label className={ms.fieldLabel}>게시 종료</label>
                <input type="date" className={ms.fieldBox} value={visibleTo} onChange={(e) => setVisibleTo(e.target.value)} />
              </div>
            </div>
          )}
          {errorMsg && <p style={{ fontSize: "13px", color: "#DC2626", margin: 0 }}>{errorMsg}</p>}
          <div className={ms.fieldGroup}>
            <label className={ms.fieldLabel}>내용</label>
            <textarea
              className={ms.fieldBoxMultiline}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="공지 내용을 입력하세요"
              style={{ resize: "vertical", minHeight: "120px", fontFamily: "inherit", fontSize: "14px" }}
            />
          </div>
        </div>
      )}
    </BaseModal>
  );
}
