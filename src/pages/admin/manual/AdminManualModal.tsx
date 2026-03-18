import { useEffect, useId, useMemo, useState } from "react";
import type { CategoryDto } from "../../../shared/api/generated/api.schemas";
import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import { Button } from "../../../shared/ui/Button/Button";
import { AdminManualCategorySelect } from "./AdminManualCategorySelect";
import * as s from "./AdminManualListPage.css";
import type {
	ManualCreatePayload,
	ManualHistoryItem,
	ManualUpdatePayload,
} from "./adminManualManagement.api";
import {
	extractSmallCategory,
	formatManualDate,
} from "./adminManualManagement.utils";

interface AdminManualModalProps {
	mode: "create" | "detail";
	manual?: ManualHistoryItem;
	categories: CategoryDto[];
	categoriesLoading: boolean;
	onClose: () => void;
	onSubmitCreate: (payload: ManualCreatePayload) => Promise<void>;
	onSubmitUpdate: (
		manualId: number,
		payload: ManualUpdatePayload,
	) => Promise<void>;
	onDeactivate: (manualId: number) => Promise<void>;
	isSaving: boolean;
	isDeactivating: boolean;
}

export function AdminManualModal({
	mode,
	manual,
	categories,
	categoriesLoading,
	onClose,
	onSubmitCreate,
	onSubmitUpdate,
	onDeactivate,
	isSaving,
	isDeactivating,
}: AdminManualModalProps) {
	const [categoryCode, setCategoryCode] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const formId = useId();
	const categoryInputId = useId();
	const titleInputId = useId();
	const contentInputId = useId();

	useEffect(() => {
		if (mode === "create") {
			setCategoryCode("");
			setTitle("");
			setContent("");
			return;
		}

		setCategoryCode(manual?.categoryCode ?? "");
		setTitle(manual?.title ?? "");
		setContent(manual?.content ?? "");
	}, [manual, mode]);

	const selectedCategory = useMemo(
		() => categories.find((item) => item.categoryCode === categoryCode),
		[categories, categoryCode],
	);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const trimmedTitle = title.trim();
		const trimmedContent = content.trim();

		if (!trimmedTitle || !trimmedContent) {
			alert("제목과 내용을 모두 입력해주세요.");
			return;
		}

		if (mode === "create") {
			if (!categoryCode) {
				alert("카테고리를 선택해주세요.");
				return;
			}

			await onSubmitCreate({
				categoryCode,
				title: trimmedTitle,
				content: trimmedContent,
			});
			return;
		}

		if (!manual?.manualId) {
			return;
		}

		await onSubmitUpdate(manual.manualId, {
			title: trimmedTitle,
			content: trimmedContent,
		});
	}

	const footer = (
		<div className={s.modalFooterActions}>
			<Button variant="secondary" type="button" onClick={onClose}>
				닫기
			</Button>
			{mode === "detail" && manual?.manualId && manual.isActive && (
				<Button
					variant="secondary"
					type="button"
					onClick={() => onDeactivate(manual.manualId)}
					disabled={isDeactivating}
				>
					{isDeactivating ? "비활성화 중..." : "비활성화"}
				</Button>
			)}
			<Button type="submit" form={formId} disabled={isSaving}>
				{mode === "create"
					? isSaving
						? "등록 중..."
						: "등록하기"
					: isSaving
						? "저장 중..."
						: "저장하기"}
			</Button>
		</div>
	);

	return (
		<BaseModal
			title={mode === "create" ? "매뉴얼 신규 등록" : "매뉴얼 상세 / 수정"}
			subTitle={
				mode === "create"
					? "새 매뉴얼을 등록합니다."
					: "목록에서 선택한 데이터로 상세를 확인하고 수정합니다."
			}
			onClose={onClose}
			size="lg"
			footer={footer}
		>
			<form id={formId} className={s.modalForm} onSubmit={handleSubmit}>
				{mode === "detail" && manual && (
					<section className={s.modalSection}>
						<h3 className={s.modalSectionTitle}>상세 정보</h3>
						<div className={s.detailGrid}>
							<div className={s.detailItem}>
								<span className={s.detailLabel}>카테고리</span>
								<strong className={s.detailValue}>
									{extractSmallCategory(manual.categoryName)}
								</strong>
							</div>
							<div className={s.detailItem}>
								<span className={s.detailLabel}>작성자</span>
								<strong className={s.detailValue}>
									{manual.empName || "-"}
								</strong>
							</div>
							<div className={s.detailItem}>
								<span className={s.detailLabel}>상태</span>
								<strong className={s.detailValue}>
									{manual.isActive ? "활성화" : "비활성화"}
								</strong>
							</div>
							<div className={s.detailItem}>
								<span className={s.detailLabel}>수정일</span>
								<strong className={s.detailValue}>
									{formatManualDate(manual.updatedAt)}
								</strong>
							</div>
						</div>
					</section>
				)}

				<section className={s.modalSection}>
					<h3 className={s.modalSectionTitle}>입력 정보</h3>
					<div className={s.modalFieldGrid}>
						{mode === "create" && (
							<div className={s.fieldBlock}>
								<label className={s.fieldLabel} htmlFor={categoryInputId}>
									카테고리
								</label>
								<AdminManualCategorySelect
									inputId={categoryInputId}
									categories={categories}
									selectedCategoryCode={categoryCode}
									onSelect={setCategoryCode}
									placeholder="카테고리를 검색하세요"
									disabled={categoriesLoading}
								/>
							</div>
						)}

						<div className={s.fieldBlock}>
							<label className={s.fieldLabel} htmlFor={titleInputId}>
								제목
							</label>
							<input
								id={titleInputId}
								type="text"
								className={s.textInput}
								value={title}
								onChange={(event) => setTitle(event.target.value)}
								placeholder="매뉴얼 제목을 입력하세요"
								maxLength={100}
							/>
						</div>

						<div className={s.fieldBlock}>
							<label className={s.fieldLabel} htmlFor={contentInputId}>
								내용
							</label>
							<textarea
								id={contentInputId}
								className={s.textarea}
								value={content}
								onChange={(event) => setContent(event.target.value)}
								placeholder="HTML 포함 매뉴얼 내용을 입력하세요"
								rows={10}
							/>
						</div>
					</div>
				</section>

				<section className={s.modalSection}>
					<h3 className={s.modalSectionTitle}>HTML 미리보기</h3>
					<div className={s.previewCard}>
						<div className={s.previewTitle}>{title || "제목 미리보기"}</div>
						<div className={s.previewMeta}>
							<span>
								{mode === "create"
									? selectedCategory?.smallCategory || "카테고리 미선택"
									: extractSmallCategory(manual?.categoryName ?? "")}
							</span>
							{mode === "detail" && <span>{manual?.empName || "-"}</span>}
						</div>
						<div
							className={s.previewContent}
							dangerouslySetInnerHTML={{
								__html:
									content ||
									"<p>내용을 입력하면 HTML 미리보기가 표시됩니다.</p>",
							}}
						/>
					</div>
				</section>
			</form>
		</BaseModal>
	);
}
