import { useGetSummaryDetailQuery } from "../../shared/api/generated/summary-controller";
import { BaseModal } from "../../shared/ui/BaseModal/BaseModal";
import { SummaryDetailContent } from "./SummaryDetailContent";
import { SummaryDetailInfoCards } from "./SummaryDetailInfoCards";
import * as s from "./SummaryPage.css";

interface Props {
  consultId: number;
  onClose: () => void;
  isClosing: boolean;
}

export function SummaryDetailModal({ consultId, onClose, isClosing }: Props) {
  const { data, isPending, isError } = useGetSummaryDetailQuery(consultId);

  return (
    <BaseModal
      title="상담 요약 분석"
      subTitle={`#CS-${String(consultId).padStart(4, "0")}`}
      size="lg"
      onClose={onClose}
      isClosing={isClosing}
    >
      {isPending && <p className={s.stateText}>불러오는 중...</p>}
      {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}
      {!isPending && !isError && data && (
        <>
          <SummaryDetailInfoCards data={data} />
          <SummaryDetailContent data={data} />
        </>
      )}
    </BaseModal>
  );
}
