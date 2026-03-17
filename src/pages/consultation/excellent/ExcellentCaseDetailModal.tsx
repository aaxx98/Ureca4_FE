import { useState } from "react";
import { useGetBoardDetailQuery } from "../../../shared/api/generated/weekly-excellent-case-board";
import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import * as ms from "../list/ConsultationDetailModal.css";
import { ConsultationDetailRawChat } from "../list/ConsultationDetailRawChat";

interface Props {
  consultId: number;
  onClose: () => void;
}

type Tab = "summary" | "chat";

export function ExcellentCaseDetailModal({ consultId, onClose }: Props) {
  const [tab, setTab] = useState<Tab>("summary");
  const { data: detail, isPending, isError } = useGetBoardDetailQuery(consultId);

  const tabBar = (
    <div className={ms.tabBar}>
      {([
        { key: "summary" as Tab, label: "요약 / 평가" },
        { key: "chat"    as Tab, label: "원문 대화" },
      ]).map(({ key, label }) => (
        <button
          key={key}
          type="button"
          className={tab === key ? ms.tabActive : ms.tab}
          onClick={() => setTab(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <BaseModal
      title="우수 상담 사례 상세"
      onClose={onClose}
      subTitle={detail?.categoryName}
      tabBar={tabBar}
      size="lg"
    >
      {isPending && <p className={ms.stateText}>불러오는 중...</p>}
      {isError   && <p className={ms.stateText}>데이터를 불러오지 못했습니다.</p>}

      {!isPending && !isError && detail && (
        <>
          {tab === "summary" && (
            <div className={ms.fieldStack}>
              <div className={ms.fieldGroup}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <div style={{
                    padding: "4px 12px",
                    borderRadius: "999px",
                    backgroundColor: "#FEF3C7",
                    color: "#92400E",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}>
                    AI 점수 {detail.score ?? "-"}점
                  </div>
                  <div style={{
                    padding: "4px 12px",
                    borderRadius: "999px",
                    backgroundColor: "#EFF6FF",
                    color: "#1E40AF",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}>
                    {detail.counselorName}
                  </div>
                </div>
              </div>

              {detail.summary && (
                <div className={ms.fieldGroup}>
                  <p className={ms.fieldLabelAi}>AI 상담 요약</p>
                  <div className={ms.fieldBoxAi}>{detail.summary}</div>
                </div>
              )}

              {detail.evaluationReason && (
                <div className={ms.fieldGroup}>
                  <p className={ms.fieldLabel}>AI 우수 선정 사유</p>
                  <div className={ms.fieldBoxMultiline}>{detail.evaluationReason}</div>
                </div>
              )}
            </div>
          )}

          {tab === "chat" && (
            <ConsultationDetailRawChat rawTextJson={detail.rawTextJson} />
          )}
        </>
      )}
    </BaseModal>
  );
}
