import * as s from "./AdminManualListPage.css";
import type { ManualHistoryItem } from "./adminManualManagement.api";
import {
	extractSmallCategory,
	formatManualDate,
} from "./adminManualManagement.utils";

interface AdminManualTableProps {
	items: ManualHistoryItem[];
	onOpenDetail: (manual: ManualHistoryItem) => void;
}

export function AdminManualTable({
	items,
	onOpenDetail,
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
						{items.map((item) => (
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
									<span
										className={
											item.isActive
												? s.statusBadgeActive
												: s.statusBadgeInactive
										}
									>
										{item.isActive ? "활성화" : "비활성화"}
									</span>
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
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
