import { type FormEvent, useId } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import * as layout from "../../../shared/ui/pageLayout.css";
import { AdminSidebar } from "../../../widgets/AdminSidebar/AdminSidebar";
import { AdminManualCategorySelect } from "./AdminManualCategorySelect";
import * as s from "./AdminManualListPage.css";
import { AdminManualModal } from "./AdminManualModal";
import { AdminManualTable } from "./AdminManualTable";
import { useAdminManualManagement } from "./useAdminManualManagement";

export function AdminManualListPage() {
	const categoryFilterId = useId();
	const statusFilterId = useId();
	const keywordFilterId = useId();

	const {
		categories,
		categoriesLoading,
		categoriesError,
		draftFilters,
		items,
		manualsLoading,
		manualsError,
		totalElements,
		pagination,
		modalState,
		selectedManual,
		isSaving,
		updateDraftFilter,
		submitSearch,
		openCreateModal,
		openDetailModal,
		closeModal,
		submitCreate,
		submitDetail,
	} = useAdminManualManagement();

	function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		submitSearch();
	}

	return (
		<>
			<AdminSidebar />

			<main className={layout.main}>
				<div className={s.pageWrapper}>
					<div className={s.pageHeader}>
						<div className={s.headerRow}>
							<div>
								<h1 className={s.headerTitle}>매뉴얼 관리</h1>
								<p className={s.headerSubtitle}>
									카테고리, 상태, 키워드 조건으로 매뉴얼을 조회하고
									등록/수정/상태변경을 관리합니다.
								</p>
							</div>
						</div>
					</div>

					<div className={s.content}>
						<form className={s.searchCard} onSubmit={handleSearchSubmit}>
							<div className={s.searchGrid}>
								<div className={s.searchField}>
									<label className={s.searchLabel} htmlFor={categoryFilterId}>
										카테고리
									</label>
									<AdminManualCategorySelect
										inputId={categoryFilterId}
										categories={categories}
										selectedCategoryCode={draftFilters.categoryCode}
										onSelect={(categoryCode) =>
											updateDraftFilter("categoryCode", categoryCode)
										}
										disabled={categoriesLoading}
									/>
								</div>

								<div className={s.searchField}>
									<label className={s.searchLabel} htmlFor={statusFilterId}>
										상태
									</label>
									<select
										id={statusFilterId}
										className={s.searchSelect}
										value={draftFilters.status}
										onChange={(event) =>
											updateDraftFilter(
												"status",
												event.target.value as typeof draftFilters.status,
											)
										}
									>
										<option value="전체">전체</option>
										<option value="활성화">활성화</option>
										<option value="비활성화">비활성화</option>
									</select>
								</div>

								<div className={s.searchField}>
									<label className={s.searchLabel} htmlFor={keywordFilterId}>
										키워드
									</label>
									<input
										id={keywordFilterId}
										type="text"
										className={s.searchInput}
										value={draftFilters.keyword}
										onChange={(event) =>
											updateDraftFilter("keyword", event.target.value)
										}
										placeholder="제목, 내용, 작성자 키워드를 입력하세요"
									/>
								</div>

								<div className={s.searchButtonWrap}>
									<Button type="submit" className={s.searchActionButton}>
										검색
									</Button>
								</div>

								<div className={s.searchButtonWrap}>
									<Button
										type="button"
										variant="secondary"
										className={s.searchActionButton}
										onClick={openCreateModal}
									>
										신규 등록
									</Button>
								</div>
							</div>

							<div className={s.searchMetaRow}>
								<span className={s.totalCount}>
									총 {totalElements.toLocaleString()}건
								</span>
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
								<AdminManualTable
									items={items}
									onOpenDetail={openDetailModal}
								/>

								<div className={s.paginationCard}>
									<div className={s.pagination}>
										<span className={s.pageInfo}>
											{pagination.start.toLocaleString()}–
											{pagination.end.toLocaleString()} /{" "}
											{totalElements.toLocaleString()}건
										</span>
										<div className={s.pageButtons}>
											<button
												type="button"
												className={
													pagination.isFirstGroup
														? s.pageBtnDisabled
														: s.pageBtn
												}
												onClick={() => pagination.setPage(0)}
												disabled={pagination.isFirstGroup}
											>
												«
											</button>
											<button
												type="button"
												className={
													pagination.isFirstGroup
														? s.pageBtnDisabled
														: s.pageBtn
												}
												onClick={() =>
													pagination.setPage(pagination.groupStart - 6)
												}
												disabled={pagination.isFirstGroup}
											>
												‹
											</button>
											{pagination.pages.map((pageNumber) => (
												<button
													key={pageNumber}
													type="button"
													className={
														pageNumber === pagination.currentPage
															? s.pageBtnActive
															: s.pageBtn
													}
													onClick={() => pagination.setPage(pageNumber - 1)}
												>
													{pageNumber}
												</button>
											))}
											<button
												type="button"
												className={
													pagination.isLastGroup ? s.pageBtnDisabled : s.pageBtn
												}
												onClick={() =>
													pagination.setPage(pagination.groupStart + 4)
												}
												disabled={pagination.isLastGroup}
											>
												›
											</button>
											<button
												type="button"
												className={
													pagination.isLastGroup ? s.pageBtnDisabled : s.pageBtn
												}
												onClick={() =>
													pagination.setPage(pagination.totalPages - 1)
												}
												disabled={pagination.isLastGroup}
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

			{modalState && (
				<AdminManualModal
					mode={modalState.mode}
					manual={selectedManual ?? undefined}
					categories={categories}
					categoriesLoading={categoriesLoading}
					onClose={closeModal}
					onSubmitCreate={submitCreate}
					onSubmitDetail={submitDetail}
					isSaving={isSaving}
				/>
			)}
		</>
	);
}
