import { useRef, useState } from "react";
import type { DemoConsultDataResponse } from "../../../shared/api/generated/api.schemas";
import { useMutationPostConsultQuery } from "../../../shared/api/generated/demo";
import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import * as s from "./ConsultationResultPage.css";

interface Props {
  demo: DemoConsultDataResponse;
  iamIssue: string;
  iamAction: string;
  iamMemo: string;
  onChange: (field: "iamIssue" | "iamAction" | "iamMemo", value: string) => void;
  onSubmitSuccess?: () => void;
}

type ErrorState = { iamIssue: boolean; iamAction: boolean; iamMemo: boolean };

export function ConsultationResultIAMCard({ demo, iamIssue, iamAction, iamMemo, onChange, onSubmitSuccess }: Props) {
  const [errors, setErrors]         = useState<ErrorState>({ iamIssue: false, iamAction: false, iamMemo: false });
  const [showSuccess, setShowSuccess] = useState(false);

  const issueRef  = useRef<HTMLTextAreaElement>(null);
  const actionRef = useRef<HTMLTextAreaElement>(null);
  const memoRef   = useRef<HTMLTextAreaElement>(null);

  const { mutate: submit, isPending: isSubmitting } = useMutationPostConsultQuery({
    mutation: {
      onSuccess: () => setShowSuccess(true),
    },
  });

  function clearError(field: keyof ErrorState) {
    setErrors((prev) => ({ ...prev, [field]: false }));
  }

  function handleSubmit() {
    if (!demo.customerId || !demo.channel || !demo.categoryCode) return;

    const newErrors: ErrorState = {
      iamIssue:  !iamIssue.trim(),
      iamAction: !iamAction.trim(),
      iamMemo:   !iamMemo.trim(),
    };

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      const firstRef = newErrors.iamIssue ? issueRef : newErrors.iamAction ? actionRef : memoRef;
      firstRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    submit({
      data: {
        customerId:         demo.customerId,
        channel:            demo.channel,
        categoryCode:       demo.categoryCode,
        durationSec:        demo.durationSec,
        subscribedProducts: demo.subscribedProducts,
        rawTextJson:        demo.rawTextJson,
        iamIssue:  iamIssue  || undefined,
        iamAction: iamAction || undefined,
        iamMemo:   iamMemo   || undefined,
      },
    });
  }

  return (
    <>
      <div className={s.card}>
        <div className={s.cardHeader}>
          <div className={s.cardTitleRow}>
            <h2 className={s.cardTitle}>IAM 입력</h2>
          </div>
          <span className={s.cardMetaEditable}>직접 입력</span>
        </div>
        <div className={s.cardBody}>
          <div className={s.field}>
            <span className={s.fieldLabel}>이슈 요약</span>
            <textarea
              ref={issueRef}
              className={`${s.textarea}${errors.iamIssue ? ` ${s.textareaError}` : ""}`}
              value={iamIssue}
              onChange={(e) => onChange("iamIssue", e.target.value)}
              onFocus={() => clearError("iamIssue")}
              placeholder={errors.iamIssue ? "작성이 필요합니다" : "상담 이슈를 요약해주세요..."}
              rows={3}
            />
          </div>
          <div className={s.field}>
            <span className={s.fieldLabel}>처리 내용</span>
            <textarea
              ref={actionRef}
              className={`${s.textarea}${errors.iamAction ? ` ${s.textareaError}` : ""}`}
              value={iamAction}
              onChange={(e) => onChange("iamAction", e.target.value)}
              onFocus={() => clearError("iamAction")}
              placeholder={errors.iamAction ? "작성이 필요합니다" : "처리 내용을 입력해주세요..."}
              rows={3}
            />
          </div>
          <div className={s.field}>
            <span className={s.fieldLabel}>처리 메모</span>
            <textarea
              ref={memoRef}
              className={`${s.textarea}${errors.iamMemo ? ` ${s.textareaError}` : ""}`}
              value={iamMemo}
              onChange={(e) => onChange("iamMemo", e.target.value)}
              onFocus={() => clearError("iamMemo")}
              placeholder={errors.iamMemo ? "작성이 필요합니다" : "추가 메모를 입력해주세요..."}
              rows={2}
            />
          </div>
        </div>
      </div>

      <div className={s.footer}>
        <button
          type="button"
          className={s.submitBtn}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "전송 중..." : "시스템에 전송"}
        </button>
      </div>

      {showSuccess && (
        <BaseModal title="전송 완료" onClose={() => { setShowSuccess(false); onSubmitSuccess?.(); }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            padding: "24px 0",
            textAlign: "center",
          }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#D1FAE5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              color: "#10B981",
            }}>
              ✓
            </div>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "#111827", margin: 0 }}>
              성공적으로 전송이 완료됐습니다.
            </p>
          </div>
        </BaseModal>
      )}
    </>
  );
}
