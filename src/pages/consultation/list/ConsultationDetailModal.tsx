import { useState } from "react";
import { useGetConsultationDetailQuery } from "../../../shared/api/generated/consultation-detail";
import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import { ConsultationDetailAiAnalysis } from "./ConsultationDetailAiAnalysis";
import { ConsultationDetailBasicInfo } from "./ConsultationDetailBasicInfo";
import { ConsultationDetailHistory } from "./ConsultationDetailHistory";
import * as s from "./ConsultationDetailModal.css";
import { ConsultationDetailRawChat } from "./ConsultationDetailRawChat";

type Tab = "basic" | "iam" | "raw" | "ai" | "history";

const TABS: { key: Tab; label: string }[] = [
  { key: "basic",   label: "기본정보" },
  { key: "iam",     label: "IAM 내용" },
  { key: "raw",     label: "원문 대화" },
  { key: "ai",      label: "AI 분석결과" },
  { key: "history", label: "처리이력" },
];

interface Props {
  consultId: number;
  onClose: () => void;
  isClosing: boolean;
}

export function ConsultationDetailModal({ consultId, onClose, isClosing }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("basic");
  const { data, isPending, isError } = useGetConsultationDetailQuery({ consultId });
  const detail = data?.data;

  const tabBar = (
    <div className={s.tabBar}>
      {TABS.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          className={activeTab === key ? s.tabActive : s.tab}
          onClick={() => setActiveTab(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <BaseModal
      title="상담 상세 정보"
      onClose={onClose}
      isClosing={isClosing}
      subTitle={detail?.basicInfo?.consultationNumber ? `#${detail.basicInfo.consultationNumber}` : undefined}
      tabBar={tabBar}
      size="lg"
    >
      {isPending && <p className={s.stateText}>불러오는 중...</p>}
      {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}

      {!isPending && !isError && detail && (
        <>
          {activeTab === "basic" && (
            <ConsultationDetailBasicInfo info={detail.basicInfo} />
          )}

          {activeTab === "iam" && (
            <div className={s.fieldStack}>
              {detail.iamInfo?.title && (
                <div className={s.fieldGroup}>
                  <p className={s.fieldLabel}>상담 제목</p>
                  <div className={s.fieldBox}>{detail.iamInfo.title}</div>
                </div>
              )}
              {detail.iamInfo?.content && (
                <div className={s.fieldGroup}>
                  <p className={s.fieldLabel}>상담 내용</p>
                  <div className={s.fieldBoxAccent}>{detail.iamInfo.content}</div>
                </div>
              )}
              {detail.aiAnalysis?.rawSummary && (
                <div className={s.fieldGroup}>
                  <p className={s.fieldLabelAi}>AI 요약</p>
                  <div className={s.fieldBoxAi}>{detail.aiAnalysis.rawSummary}</div>
                </div>
              )}
              {detail.iamInfo?.memo && (
                <div className={s.fieldGroup}>
                  <p className={s.fieldLabel}>처리 메모</p>
                  <div className={s.fieldBoxMultiline}>{detail.iamInfo.memo}</div>
                </div>
              )}
            </div>
          )}

          {activeTab === "raw" && (
            <ConsultationDetailRawChat rawTextJson={detail.rawTextJson} />
          )}

          {activeTab === "ai" && (
            <ConsultationDetailAiAnalysis ai={detail.aiAnalysis} />
          )}

          {activeTab === "history" && (
            <ConsultationDetailHistory history={detail.history} />
          )}
        </>
      )}
    </BaseModal>
  );
}
