import {
	type ChangeEvent,
	type FormEvent,
	type KeyboardEvent,
	useEffect,
	useId,
	useMemo,
	useRef,
	useState,
} from "react";
import type { CategoryDto } from "../../../shared/api/generated/api.schemas";
import { Button } from "../../../shared/ui/Button/Button";
import * as layout from "../../../shared/ui/pageLayout.css";
import { AdminSidebar } from "../../../widgets/AdminSidebar/AdminSidebar";
import * as s from "./AdminManualPage.css";
import {
	fetchAllManualHistory,
	fetchCategories,
	fetchManualHistory,
	type ManualHistoryItem,
	type ManualHistoryPageResponse,
} from "./adminManualManagement.api";
import {
	buildCategoryLabel,
	extractSmallCategory,
	filterCategories,
	filterManualsByKeyword,
} from "./adminManualManagement.utils";

const PAGE_SIZE = 10;
const GROUP_SIZE = 5;

interface CategoryAutocompleteProps {
	inputId: string;
	categories: CategoryDto[];
	selectedCategoryCode: string;
	onSelect: (categoryCode: string) => void;
	disabled?: boolean;
}

function CategoryAutocomplete({
	inputId,
	categories,
	selectedCategoryCode,
	onSelect,
	disabled = false,
}: CategoryAutocompleteProps) {
	const [keyword, setKeyword] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [highlightedIndex, setHighlightedIndex] = useState(-1);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const selectedCategory = categories.find(
		(category) => category.categoryCode === selectedCategoryCode,
	);
	const selectedLabel = selectedCategory
		? buildCategoryLabel(selectedCategory)
		: "";

	useEffect(() => {
		setKeyword(selectedLabel);
	}, [selectedLabel]);

	useEffect(() => {
		function handleMouseDown(event: MouseEvent) {
			if (!wrapperRef.current?.contains(event.target as Node)) {
				setIsOpen(false);
				setKeyword(selectedLabel);
			}
		}

		document.addEventListener("mousedown", handleMouseDown);

		return () => document.removeEventListener("mousedown", handleMouseDown);
	}, [selectedLabel]);

	const filteredCategories = useMemo(
		() => filterCategories(categories, keyword),
		[categories, keyword],
	);

	function handleSelect(categoryCode: string) {
		onSelect(categoryCode);
		const nextSelectedCategory = categories.find(
			(category) => category.categoryCode === categoryCode,
		);
		setKeyword(
			nextSelectedCategory ? buildCategoryLabel(nextSelectedCategory) : "",
		);
		setIsOpen(false);
		setHighlightedIndex(-1);
	}

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		const nextKeyword = event.target.value;

		setKeyword(nextKeyword);
		setIsOpen(true);
		setHighlightedIndex(-1);

		if (selectedCategoryCode) {
			onSelect("");
		}
	}

	function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
		if (!isOpen && (event.key === "ArrowDown" || event.key === "Enter")) {
			setIsOpen(true);
			return;
		}

		if (!isOpen) {
			return;
		}

		if (event.key === "ArrowDown") {
			event.preventDefault();
			setHighlightedIndex((current) =>
				Math.min(current + 1, filteredCategories.length - 1),
			);
			return;
		}

		if (event.key === "ArrowUp") {
			event.preventDefault();
			setHighlightedIndex((current) => Math.max(current - 1, 0));
			return;
		}

		if (event.key === "Enter") {
			event.preventDefault();
			const targetCategory = filteredCategories[highlightedIndex];

			if (targetCategory?.categoryCode) {
				handleSelect(targetCategory.categoryCode);
			}
			return;
		}

		if (event.key === "Escape") {
			setIsOpen(false);
			setKeyword(selectedLabel);
		}
	}

	return (
		<div ref={wrapperRef} className={s.categorySelectWrap}>
			<div className={s.categorySelectInputWrap}>
				<input
					id={inputId}
					type="text"
					value={keyword}
					placeholder="카테고리 검색"
					className={s.categorySelectInput}
					onChange={handleInputChange}
					onFocus={() => setIsOpen(true)}
					onKeyDown={handleKeyDown}
					autoComplete="off"
					disabled={disabled}
				/>
				{(keyword || selectedCategoryCode) && (
					<button
						type="button"
						className={s.categorySelectClear}
						onClick={() => {
							setKeyword("");
							onSelect("");
							setIsOpen(false);
							setHighlightedIndex(-1);
						}}
						tabIndex={-1}
						aria-label="카테고리 선택 해제"
					>
						×
					</button>
				)}
			</div>

			{isOpen && filteredCategories.length > 0 && (
				<ul className={s.categorySelectDropdown}>
					{filteredCategories.map((category, index) => {
						const categoryCode = category.categoryCode ?? "";
						const categoryLabel = buildCategoryLabel(category);

						return (
							<li
								key={categoryCode || `${categoryLabel}-${index}`}
								className={
									index === highlightedIndex
										? s.categorySelectItemHighlighted
										: s.categorySelectItem
								}
								onMouseDown={(event) => {
									event.preventDefault();
									handleSelect(categoryCode);
								}}
								onMouseEnter={() => setHighlightedIndex(index)}
							>
								{categoryLabel}
							</li>
						);
					})}
				</ul>
			)}

			{isOpen && keyword && filteredCategories.length === 0 && (
				<ul className={s.categorySelectDropdown}>
					<li className={s.categorySelectEmpty}>
						일치하는 카테고리가 없습니다.
					</li>
				</ul>
			)}
		</div>
	);
}

export function AdminManualListPage() {
	const [categories, setCategories] = useState<CategoryDto[]>([]);
	const [categoriesLoading, setCategoriesLoading] = useState(true);
	const [categoriesError, setCategoriesError] = useState<string | null>(null);
	const [selectedCategoryCode, setSelectedCategoryCode] = useState("");
	const [keywordInput, setKeywordInput] = useState("");
	const [submittedKeyword, setSubmittedKeyword] = useState("");
	const [page, setPage] = useState(0);
	const [manualPage, setManualPage] =
		useState<ManualHistoryPageResponse | null>(null);
	const [manualsLoading, setManualsLoading] = useState(true);
	const [manualsError, setManualsError] = useState<string | null>(null);
	const keywordCacheRef = useRef<Map<string, ManualHistoryItem[]>>(new Map());
	const categoryInputId = useId();
	const keywordInputId = useId();

	useEffect(() => {
		const abortController = new AbortController();

		async function loadCategories() {
			setCategoriesLoading(true);
			setCategoriesError(null);

			try {
				const response = await fetchCategories(abortController.signal);
				setCategories(response);
			} catch {
				if (abortController.signal.aborted) {
					return;
				}

				setCategoriesError("카테고리를 불러오지 못했습니다.");
			} finally {
				if (!abortController.signal.aborted) {
					setCategoriesLoading(false);
				}
			}
		}

		loadCategories();

		return () => abortController.abort();
	}, []);

	useEffect(() => {
		const abortController = new AbortController();
		const cacheKey = `${selectedCategoryCode || "ALL"}::${submittedKeyword.trim().toLowerCase()}`;

		async function loadManuals() {
			setManualsLoading(true);
			setManualsError(null);

			try {
				if (!submittedKeyword.trim()) {
					const response = await fetchManualHistory(
						{
							categoryCode: selectedCategoryCode || undefined,
							page,
							size: PAGE_SIZE,
						},
						abortController.signal,
					);

					if (!abortController.signal.aborted) {
						setManualPage(response);
					}

					return;
				}

				let matchedManuals = keywordCacheRef.current.get(cacheKey);

				if (!matchedManuals) {
					const allManuals = await fetchAllManualHistory(
						selectedCategoryCode || undefined,
						abortController.signal,
					);
					matchedManuals = filterManualsByKeyword(allManuals, submittedKeyword);
					keywordCacheRef.current.set(cacheKey, matchedManuals);
				}

				if (abortController.signal.aborted) {
					return;
				}

				const totalElements = matchedManuals.length;
				const totalPages = Math.max(Math.ceil(totalElements / PAGE_SIZE), 1);
				const safePage = Math.min(page, totalPages - 1);

				if (safePage !== page) {
					setPage(safePage);
				}

				setManualPage({
					content: matchedManuals.slice(
						safePage * PAGE_SIZE,
						safePage * PAGE_SIZE + PAGE_SIZE,
					),
					totalElements,
					totalPages,
					number: safePage,
				});
			} catch {
				if (abortController.signal.aborted) {
					return;
				}

				setManualsError("매뉴얼 목록을 불러오지 못했습니다.");
				setManualPage(null);
			} finally {
				if (!abortController.signal.aborted) {
					setManualsLoading(false);
				}
			}
		}

		loadManuals();

		return () => abortController.abort();
	}, [page, selectedCategoryCode, submittedKeyword]);

	const items = manualPage?.content ?? [];
	const totalElements = manualPage?.totalElements ?? 0;
	const totalPages = Math.max(manualPage?.totalPages ?? 1, 1);
	const currentPage = (manualPage?.number ?? page) + 1;
	const currentGroup = Math.ceil(currentPage / GROUP_SIZE);
	const groupStart = (currentGroup - 1) * GROUP_SIZE + 1;
	const groupEnd = Math.min(groupStart + GROUP_SIZE - 1, totalPages);
	const pages = Array.from(
		{ length: groupEnd - groupStart + 1 },
		(_, index) => groupStart + index,
	);
	const isFirstGroup = currentGroup === 1;
	const isLastGroup = groupStart + GROUP_SIZE > totalPages;
	const start = totalElements === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
	const end =
		totalElements === 0 ? 0 : Math.min(currentPage * PAGE_SIZE, totalElements);

	function handleCategoryChange(categoryCode: string) {
		setSelectedCategoryCode(categoryCode);
		setPage(0);
	}

	function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmittedKeyword(keywordInput.trim());
		setPage(0);
	}

	return (
		<>
			<AdminSidebar />

			<main className={layout.main}>
				<div className={s.pageWrapper}>
					<div className={s.pageHeader}>
						<div className={s.headerBadge}>📖 ADMIN · MANUAL</div>
						<h1 className={s.headerTitle}>매뉴얼 관리</h1>
						<p className={s.headerSubtitle}>
							카테고리와 키워드로 매뉴얼 이력을 조회하고 최신 수정 현황을
							확인하세요.
						</p>
					</div>

					<div className={s.content}>
						<form className={s.searchCard} onSubmit={handleSearchSubmit}>
							<div className={s.searchGrid}>
								<div className={s.searchField}>
									<label className={s.searchLabel} htmlFor={categoryInputId}>
										카테고리
									</label>
									<CategoryAutocomplete
										categories={categories}
										selectedCategoryCode={selectedCategoryCode}
										onSelect={handleCategoryChange}
										disabled={categoriesLoading}
									/>
								</div>

								<div className={s.searchField}>
									<label className={s.searchLabel} htmlFor={keywordInputId}>
										키워드
									</label>
									<input
										id={keywordInputId}
										type="text"
										value={keywordInput}
										placeholder="제목 키워드를 입력하세요"
										className={s.searchInput}
										onChange={(event) => setKeywordInput(event.target.value)}
									/>
								</div>
							</div>

							<div className={s.searchActions}>
								<span className={s.totalCount}>
									총 {totalElements.toLocaleString()}건
								</span>
								<Button type="submit">검색</Button>
							</div>
						</form>

						{categoriesError && (
							<p className={s.stateText}>{categoriesError}</p>
						)}
						{manualsLoading && <p className={s.stateText}>불러오는 중...</p>}
						{manualsError && <p className={s.stateText}>{manualsError}</p>}
						{!manualsLoading && !manualsError && items.length === 0 && (
							<p className={s.stateText}>조회된 매뉴얼이 없습니다.</p>
						)}

						{!manualsLoading && !manualsError && items.length > 0 && (
							<>
								<div className={s.tableWrap}>
									<div className={s.tableScroll}>
										<table className={s.table}>
											<thead className={s.thead}>
												<tr>
													<th className={s.th}>카테고리</th>
													<th className={s.th}>제목</th>
													<th className={s.thCenter}>상태</th>
													<th className={s.th}>작성자</th>
													<th className={s.th}>수정일</th>
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
															<span className={s.titleText}>{item.title}</span>
														</td>
														<td className={s.tdCenter}>
															{item.isActive ? (
																<span className={s.statusBadgeActive}>
																	활성화
																</span>
															) : (
																<span className={s.statusBadgeInactive}>
																	비활성화
																</span>
															)}
														</td>
														<td className={s.td}>
															<span className={s.authorText}>
																{item.empName}
															</span>
														</td>
														<td className={s.td}>
															<span className={s.dateText}>
																{item.updatedAt.slice(0, 10)}
															</span>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>

								<div className={s.paginationCard}>
									<div className={s.pagination}>
										<span className={s.pageInfo}>
											{start.toLocaleString()}–{end.toLocaleString()} /{" "}
											{totalElements.toLocaleString()}건
										</span>
										<div className={s.pageButtons}>
											<button
												type="button"
												className={isFirstGroup ? s.pageBtnDisabled : s.pageBtn}
												onClick={() => setPage(0)}
												disabled={isFirstGroup}
											>
												«
											</button>
											<button
												type="button"
												className={isFirstGroup ? s.pageBtnDisabled : s.pageBtn}
												onClick={() => setPage(groupStart - GROUP_SIZE - 1)}
												disabled={isFirstGroup}
											>
												‹
											</button>
											{pages.map((pageNumber) => (
												<button
													key={pageNumber}
													type="button"
													className={
														pageNumber === currentPage
															? s.pageBtnActive
															: s.pageBtn
													}
													onClick={() => setPage(pageNumber - 1)}
												>
													{pageNumber}
												</button>
											))}
											<button
												type="button"
												className={isLastGroup ? s.pageBtnDisabled : s.pageBtn}
												onClick={() => setPage(groupStart + GROUP_SIZE - 1)}
												disabled={isLastGroup}
											>
												›
											</button>
											<button
												type="button"
												className={isLastGroup ? s.pageBtnDisabled : s.pageBtn}
												onClick={() => setPage(totalPages - 1)}
												disabled={isLastGroup}
											>
												»
											</button>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</main>
		</>
	);
}
