import * as s from "./AdminManualListPage.css";
import type { ManualHistoryItem } from "./adminManualManagement.api";
import {
	extractSmallCategory,
	formatManualDate,
} from "./adminManualManagement.utils";

interface AdminManualTableProps {
	items: ManualHistoryItem[];
	pendingDeactivateId: number | null;
	onOpenDetail: (manual: ManualHistoryItem) => void;
	onDeactivate: (manual: ManualHistoryItem) => void;
}

export function AdminManualTable({
	items,
	pendingDeactivateId,
	onOpenDetail,
	onDeactivate,
}: AdminManualTableProps) {
	return (
		<div className={s.tableWrap}>
			<div className={s.tableScroll}>
				<table className={s.table}>
					<thead className={s.thead}>
						<tr>
							<th className={s.th}>카테고리</th>
							<th className={s.th}>제목</th>
							<th className={s.th}>내용</th>
							<th className={s.th}>작성자</th>
							<th className={s.thCenter}>상태</th>
							<th className={s.th}>수정일</th>
							<th className={s.thCenter}>액션</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item) => {
							const isPendingDeactivate = pendingDeactivateId === item.manualId;
							const canDeactivate = item.isActive && !isPendingDeactivate;

							return (
								<tr key={item.manualId} className={s.tr}>
									<td className={s.td}>
										<span className={s.categoryPill}>
											{extractSmallCategory(item.categoryName)}
										</span>
									</td>
									<td className={s.td}>
										<div className={s.titleCell}>{item.title}</div>
									</td>
									<td className={s.td}>
										<div className={s.contentPreview}>{item.content}</div>
									</td>
									<td className={s.td}>{item.empName || "-"}</td>
									<td className={s.tdCenter}>
										<button
											type="button"
											className={
												item.isActive ? s.switchButtonOn : s.switchButtonOff
											}
											onClick={() => {
												if (canDeactivate) {
													onDeactivate(item);
												}
											}}
											disabled={!canDeactivate}
											aria-label={
												item.isActive
													? `${item.title} 비활성화`
													: `${item.title} 비활성 상태`
											}
										>
											<span className={s.switchThumb} />
											<span className={s.switchLabel}>
												{isPendingDeactivate
													? "처리 중"
													: item.isActive
														? "ON"
														: "OFF"}
											</span>
										</button>
									</td>
									<td className={s.td}>{formatManualDate(item.updatedAt)}</td>
									<td className={s.tdCenter}>
										<button
											type="button"
											className={s.detailButton}
											onClick={() => onOpenDetail(item)}
										>
											상세보기
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
