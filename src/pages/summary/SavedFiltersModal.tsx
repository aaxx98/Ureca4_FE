import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import type { FilterGroupListResponse } from "../../shared/api/generated/api.schemas";
import {
	useGetFilterGroupDetailQuery,
	useGetMyFilterGroupsQuery,
	useMutationDeleteFilterGroupQuery,
	useMutationPutFilterGroupOrderQuery,
	useMutationPutFilterGroupQuery,
} from "../../shared/api/generated/search-filter";
import {
	getFilterGroupDetailKey,
	getMyFilterGroupsKey,
} from "../../shared/api/generated/search-filter/search-filter.keys";
import { getFilterGroupDetailOptions } from "../../shared/api/generated/search-filter/search-filter.queryOptions";
import { GRADE_MAP, RISK_TYPE_MAP } from "../../shared/config/meta";
import { BaseModal } from "../../shared/ui/BaseModal/BaseModal";
import { buildFilterItems, parseToDraft } from "./filterDraft";
import type { FilterDraft } from "./filterDraft";
import * as fp from "./SummaryFilterPanel.css";
import * as s from "./SummaryPage.css";

/* ─── FILTER ID → 라벨 ─── */

const FILTER_LABEL: Record<number, string> = {
	1: "키워드", 2: "상담 시작일", 3: "상담 종료일", 4: "상담사",
	5: "카테고리", 6: "채널", 10: "고객명", 11: "연락처",
	12: "고객 유형", 13: "고객 등급", 14: "리스크 유형", 15: "상품명", 17: "만족도",
};

/* ─── 옵션 목록 ─── */

const CHANNEL_OPTS   = [{ value: "CALL", label: "전화" }, { value: "CHATTING", label: "채팅" }];
const GRADE_OPTS     = Object.entries(GRADE_MAP).map(([v, l]) => ({ value: v, label: l }));
const RISK_TYPE_OPTS = Object.entries(RISK_TYPE_MAP).map(([v, l]) => ({ value: v, label: l }));

/* ─── 드롭다운 (단일) ─── */

function Dropdown({ placeholder, options, value, onChange }: {
	placeholder: string;
	options: { value: string; label: string }[];
	value: string;
	onChange: (v: string) => void;
}) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;
		const handler = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, [open]);

	const selected = options.find((o) => o.value === value);
	return (
		<div className={fp.dropdownWrapper} ref={ref}>
			<button type="button" className={`${fp.dropdownTrigger}${value ? ` ${fp.dropdownTriggerActive}` : ""}`} onClick={() => setOpen((o) => !o)}>
				{selected?.label ?? placeholder}
				<span className={`${fp.dropdownChevron}${open ? ` ${fp.dropdownChevronOpen}` : ""}`}>▼</span>
			</button>
			{open && (
				<div className={fp.dropdownMenu}>
					<button type="button" className={`${fp.dropdownItem}${!value ? ` ${fp.dropdownItemActive}` : ""}`} onClick={() => { onChange(""); setOpen(false); }}>전체</button>
					{options.map((o) => (
						<button key={o.value} type="button" className={`${fp.dropdownItem}${value === o.value ? ` ${fp.dropdownItemActive}` : ""}`} onClick={() => { onChange(o.value); setOpen(false); }}>
							{o.label}
						</button>
					))}
				</div>
			)}
		</div>
	);
}

/* ─── 드롭다운 (다중) ─── */

function MultiDropdown({ placeholder, options, value, onChange }: {
	placeholder: string;
	options: { value: string; label: string }[];
	value: string[];
	onChange: (v: string[]) => void;
}) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;
		const handler = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, [open]);

	const toggle = (v: string) => onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
	const label  = value.length > 0 ? `${placeholder} (${value.length})` : placeholder;

	return (
		<div className={fp.dropdownWrapper} ref={ref}>
			<button type="button" className={`${fp.dropdownTrigger}${value.length ? ` ${fp.dropdownTriggerActive}` : ""}`} onClick={() => setOpen((o) => !o)}>
				{label}
				<span className={`${fp.dropdownChevron}${open ? ` ${fp.dropdownChevronOpen}` : ""}`}>▼</span>
			</button>
			{open && (
				<div className={fp.dropdownMenu}>
					{options.map((o) => {
						const checked = value.includes(o.value);
						return (
							<button key={o.value} type="button" className={`${fp.dropdownItem}${checked ? ` ${fp.dropdownItemActive}` : ""}`} onClick={() => toggle(o.value)}>
								<span className={checked ? fp.checkboxIconChecked : fp.checkboxIcon}>{checked ? "✓" : ""}</span>
								{o.label}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}

/* ─── 편집 폼 ─── */

function EditForm({ id, initialDraft, initialName, onSaved, onCancel }: {
	id: number;
	initialDraft: FilterDraft;
	initialName: string;
	onSaved: () => void;
	onCancel: () => void;
}) {
	const qc = useQueryClient();
	const { mutate: updateGroup, isPending } = useMutationPutFilterGroupQuery();
	const [name, setName]   = useState(initialName);
	const [draft, setDraft] = useState<FilterDraft>(initialDraft);

	const set = <K extends keyof FilterDraft>(k: K, v: FilterDraft[K]) =>
		setDraft((prev) => ({ ...prev, [k]: v }));

	const handleSave = () => {
		if (!name.trim()) return;
		const filters = buildFilterItems(draft);
		if (filters.length === 0) return;
		updateGroup(
			{ id, data: { groupName: name.trim(), filters } },
			{
				onSuccess: () => {
					qc.invalidateQueries({ queryKey: getMyFilterGroupsKey() });
					qc.invalidateQueries({ queryKey: getFilterGroupDetailKey(id) });
					onSaved();
				},
			},
		);
	};

	return (
		<div className={s.savedFiltersDetailWrap}>
			{/* 이름 */}
			<div>
				<p className={s.savedFiltersTagLabel} style={{ marginBottom: 6 }}>저장 이름</p>
				<div className={s.savedFiltersEditRow}>
					<input className={s.savedFiltersEditInput} value={name} onChange={(e) => setName(e.target.value)} placeholder="필터 그룹 이름" />
				</div>
			</div>

			{/* 기본 필드 */}
			<div className={fp.filterRow}>
				<input className={fp.textInput} placeholder="키워드" value={draft.keyword} onChange={(e) => set("keyword", e.target.value)} />
				<Dropdown placeholder="채널" options={CHANNEL_OPTS} value={draft.channel} onChange={(v) => set("channel", v)} />
			</div>

			{/* 날짜 */}
			<div className={fp.filterRow}>
				<div className={fp.dateRangeGroup}>
					<span className={fp.dateLabel}>상담 기간</span>
					<input type="date" className={fp.dateInput} value={draft.fromDate} onChange={(e) => set("fromDate", e.target.value)} />
					<span className={fp.dateSep}>~</span>
					<input type="date" className={fp.dateInput} value={draft.toDate} onChange={(e) => set("toDate", e.target.value)} />
				</div>
			</div>

			{/* 고객 정보 */}
			<div className={fp.filterRow}>
				<input className={fp.textInput} placeholder="고객명" value={draft.customerName} onChange={(e) => set("customerName", e.target.value)} />
				<input className={fp.textInput} placeholder="고객 연락처" value={draft.customerPhone} onChange={(e) => set("customerPhone", e.target.value)} />
			</div>

			{/* 상담사 */}
			<div className={fp.filterRow}>
				<input className={fp.textInput} placeholder="상담사 이름" value={draft.agentName} onChange={(e) => set("agentName", e.target.value)} />
			</div>

			{/* 등급 / 리스크 */}
			<div className={fp.filterRow}>
				<Dropdown placeholder="고객 등급" options={GRADE_OPTS} value={draft.grade} onChange={(v) => set("grade", v)} />
				<MultiDropdown placeholder="리스크 유형" options={RISK_TYPE_OPTS} value={draft.riskType} onChange={(v) => set("riskType", v)} />
			</div>

			{/* 버튼 */}
			<div className={s.savedFiltersActions} style={{ justifyContent: "flex-end", marginTop: 4 }}>
				<button type="button" className={s.savedFiltersOrderBtn} onClick={onCancel}>취소</button>
				<button type="button" className={s.savedFiltersDetailBtn} onClick={handleSave} disabled={isPending || !name.trim() || buildFilterItems(draft).length === 0}>
					{isPending ? "저장 중..." : "저장"}
				</button>
			</div>
		</div>
	);
}

/* ─── 상세 뷰 ─── */

function DetailView({ id, onBack }: { id: number; onBack: () => void }) {
	const [editing, setEditing] = useState(false);
	const { data, isPending, isError } = useGetFilterGroupDetailQuery(id);

	if (isPending) return <p className={s.stateText}>불러오는 중...</p>;
	if (isError)   return <p className={s.stateText}>불러오지 못했습니다.</p>;
	if (!data)     return null;

	const draft = parseToDraft(data.filters ?? []);

	if (editing) {
		return (
			<>
				<button type="button" onClick={() => setEditing(false)} className={s.savedFiltersBackBtn}>← 상세로</button>
				<EditForm id={id} initialDraft={draft} initialName={data.groupName ?? ""} onSaved={() => setEditing(false)} onCancel={() => setEditing(false)} />
			</>
		);
	}

	return (
		<>
			<button type="button" onClick={onBack} className={s.savedFiltersBackBtn}>← 목록으로</button>

			<div className={s.savedFiltersDetailWrap}>
				<div className={s.savedFiltersDetailHeader}>
					<div className={s.savedFiltersEditRow}>
						<span className={s.savedFiltersDetailName}>{data.groupName}</span>
						<button type="button" className={s.savedFiltersOrderBtn} onClick={() => setEditing(true)}>✎ 수정</button>
					</div>
					{data.createdAt && <span className={s.savedFiltersDetailDate}>{data.createdAt.slice(0, 10)}</span>}
				</div>

				{(data.filters ?? []).length === 0 ? (
					<p className={s.stateText}>저장된 필터 조건이 없습니다.</p>
				) : (
					<div className={s.savedFiltersTagGrid}>
						{(data.filters ?? []).map((f) => (
							<span key={f.filterCustomId} className={s.savedFiltersTag}>
								<span className={s.savedFiltersTagLabel}>
									{f.filterId != null ? (FILTER_LABEL[f.filterId] ?? f.filterKey) : f.filterKey}
								</span>
								<span className={s.savedFiltersTagValue}>{f.filterValue}</span>
							</span>
						))}
					</div>
				)}
			</div>
		</>
	);
}

/* ─── 목록 뷰 ─── */

function ListView({ onDetail, onApply }: { onDetail: (id: number) => void; onApply: (draft: FilterDraft) => void }) {
	const qc = useQueryClient();
	const { data, isPending, isError }                     = useGetMyFilterGroupsQuery();
	const { mutate: deleteGroup,  isPending: isDeleting   } = useMutationDeleteFilterGroupQuery();
	const { mutate: reorderGroup, isPending: isReordering } = useMutationPutFilterGroupOrderQuery();

	const groups: FilterGroupListResponse[] = data ? Object.values(data).flat() : [];
	const invalidate = () => qc.invalidateQueries({ queryKey: getMyFilterGroupsKey() });

	const handleDelete = (id: number) => {
		if (!confirm("삭제하시겠습니까?")) return;
		deleteGroup({ id }, { onSuccess: invalidate });
	};

	const handleMove = (index: number, dir: -1 | 1) => {
		const next = [...groups];
		const target = index + dir;
		if (target < 0 || target >= next.length) return;
		[next[index], next[target]] = [next[target], next[index]];
		const orders = next
			.filter((g) => g.filterGroupId != null)
			.map((g, i) => ({ filterGroupId: g.filterGroupId as number, sortOrder: i + 1 }));
		reorderGroup({ data: { orders } }, { onSuccess: invalidate });
	};

	const handleApply = async (id: number) => {
		const detail = await qc.fetchQuery(getFilterGroupDetailOptions(id));
		onApply(parseToDraft(detail.filters ?? []));
	};

	if (isPending)           return <p className={s.stateText}>불러오는 중...</p>;
	if (isError)             return <p className={s.stateText}>불러오지 못했습니다.</p>;
	if (groups.length === 0) return <p className={s.stateText}>저장된 조건이 없습니다.</p>;

	return (
		<div className={s.savedFiltersList}>
			{groups.map((g, i) => (
				<div key={g.filterGroupId} className={s.savedFiltersItem}>
					<div className={s.savedFiltersOrderBtns}>
						<button type="button" className={s.savedFiltersOrderBtn} onClick={() => handleMove(i, -1)} disabled={i === 0 || isReordering}>▲</button>
						<button type="button" className={s.savedFiltersOrderBtn} onClick={() => handleMove(i,  1)} disabled={i === groups.length - 1 || isReordering}>▼</button>
					</div>
					<div className={s.savedFiltersItemInfo}>
						<span className={s.savedFiltersItemName}>{g.groupName}</span>
						<span className={s.savedFiltersItemMeta}>조건 {g.filterCount ?? 0}개{g.createdAt && ` · ${g.createdAt.slice(0, 10)}`}</span>
					</div>
					<div className={s.savedFiltersActions}>
						<button type="button" className={s.savedFiltersDetailBtn} onClick={() => g.filterGroupId != null && onDetail(g.filterGroupId)}>상세보기</button>
						<button type="button" className={s.savedFiltersDetailBtn} onClick={() => g.filterGroupId != null && handleApply(g.filterGroupId)}>검색하기</button>
						<button type="button" className={s.savedFiltersDeleteBtn} onClick={() => g.filterGroupId != null && handleDelete(g.filterGroupId)} disabled={isDeleting}>삭제</button>
					</div>
				</div>
			))}
		</div>
	);
}

/* ─── 메인 모달 ─── */

interface Props {
	onClose: () => void;
	isClosing: boolean;
	onApply: (draft: FilterDraft) => void;
}

export function SavedFiltersModal({ onClose, isClosing, onApply }: Props) {
	const [detailId, setDetailId] = useState<number | null>(null);

	return (
		<BaseModal
			title={detailId != null ? "저장된 조건 상세" : "저장된 조건 목록"}
			onClose={onClose}
			isClosing={isClosing}
			size="md"
		>
			{detailId != null ? (
				<DetailView id={detailId} onBack={() => setDetailId(null)} />
			) : (
				<ListView onDetail={setDetailId} onApply={onApply} />
			)}
		</BaseModal>
	);
}
