import { useState } from "react";
import { useGetRandomConsultDataQuery } from "../../../shared/api/generated/demo";
import * as layout from "../../../shared/ui/pageLayout.css";
import { ConsultationResultChatModal } from "./ConsultationResultChatModal";
import { ConsultationResultConsultCard } from "./ConsultationResultConsultCard";
import { ConsultationResultCustomerCard } from "./ConsultationResultCustomerCard";
import { ConsultationResultIAMCard } from "./ConsultationResultIAMCard";
import * as s from "./ConsultationResultPage.css";
import { ConsultationResultProgressPanel } from "./ConsultationResultProgressPanel";

export function ConsultationResultPage() {
  const { data, isPending, isError, refetch } = useGetRandomConsultDataQuery();
  const demo = data?.data;

  const [iamIssue,  setIamIssue]  = useState("");
  const [iamAction, setIamAction] = useState("");
  const [iamMemo,   setIamMemo]   = useState("");
  const [chatOpen,  setChatOpen]  = useState(false);

  function handleIamChange(field: "iamIssue" | "iamAction" | "iamMemo", value: string) {
    if (field === "iamIssue")  setIamIssue(value);
    if (field === "iamAction") setIamAction(value);
    if (field === "iamMemo")   setIamMemo(value);
  }

  function handleRefetch() {
    setIamIssue("");
    setIamAction("");
    setIamMemo("");
    refetch();
  }

  return (
    <>
      <main className={layout.main}>
        <div className={s.pageWrapper}>
          <div className={s.header}>
            <div className={s.headerRow}>
              <h1 className={s.title}>결과서 작성</h1>
              <button type="button" className={s.refreshBtn} onClick={handleRefetch} disabled={isPending}>
                ↻ 다른 결과서 불러오기
              </button>
            </div>
          </div>

          <div className={s.body}>
            <div className={s.contentArea}>
              {isPending && <p className={s.stateText}>불러오는 중...</p>}
              {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}

              {!isPending && !isError && demo && (
                <>
                  <ConsultationResultCustomerCard demo={demo} />
                  <ConsultationResultConsultCard  demo={demo} />
                  <ConsultationResultIAMCard
                    key={demo.customerId}
                    demo={demo}
                    iamIssue={iamIssue}
                    iamAction={iamAction}
                    iamMemo={iamMemo}
                    onChange={handleIamChange}
                    onSubmitSuccess={handleRefetch}
                  />
                </>
              )}
            </div>

            <ConsultationResultProgressPanel
              hasData={!!demo}
              iamIssue={iamIssue}
              iamAction={iamAction}
              iamMemo={iamMemo}
              onChatOpen={() => setChatOpen(true)}
            />
          </div>
        </div>
      </main>

      {chatOpen && (
        <ConsultationResultChatModal
          rawTextJson={demo?.rawTextJson}
          onClose={() => setChatOpen(false)}
        />
      )}
    </>
  );
}
