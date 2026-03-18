import { useGetSummaryDetailQuery } from "../../shared/api/generated/summary-controller";
import { formatConsultationNumber } from "../../shared/lib/consultationNumber";
import { BaseModal } from "../../shared/ui/BaseModal/BaseModal";
import { SummaryDetailContent } from "./SummaryDetailContent";
import { SummaryDetailInfoCards } from "./SummaryDetailInfoCards";
import * as s from "./SummaryPage.css";

interface Props {
	consultId: number;
	onClose: () => void;
	isClosing: boolean;
	onViewConsult: (consultId: number) => void;
}

export function SummaryDetailModal({
	consultId,
	onClose,
	isClosing,
	onViewConsult,
}: Props) {
	const { data, isPending, isError } = useGetSummaryDetailQuery(consultId);
	const consultationNumber = formatConsultationNumber({
		consultId: data?.consultId ?? consultId,
		date: data?.createdAt ?? data?.consultedAt,
	});

	return (
		<BaseModal
			title="상담 요약 분석"
			subTitle={consultationNumber !== "–" ? consultationNumber : undefined}
			size="lg"
			onClose={onClose}
			isClosing={isClosing}
			footer={
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
					}}
				>
					<button type="button" className={s.closeBtn} onClick={onClose}>
						닫기
					</button>
					<button
						type="button"
						className={s.viewConsultBtn}
						onClick={() => onViewConsult(consultId)}
					>
						상담 내역 상세 보기 →
					</button>
				</div>
			}
		>
			{isPending && <p className={s.stateText}>불러오는 중...</p>}
			{isError && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}
			{!isPending && !isError && data && (
				<>
					<SummaryDetailInfoCards data={data} />
					<SummaryDetailContent data={data} />
				</>
			)}
		</BaseModal>
	);
}
