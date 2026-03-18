import {
	type ChangeEvent,
	type KeyboardEvent,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import type { CategoryDto } from "../../../shared/api/generated/api.schemas";
import * as s from "./AdminManualListPage.css";
import {
	buildCategoryLabel,
	filterCategories,
} from "./adminManualManagement.utils";

interface AdminManualCategorySelectProps {
	inputId: string;
	categories: CategoryDto[];
	selectedCategoryCode: string;
	onSelect: (categoryCode: string) => void;
	placeholder?: string;
	disabled?: boolean;
}

export function AdminManualCategorySelect({
	inputId,
	categories,
	selectedCategoryCode,
	onSelect,
	placeholder = "카테고리 검색",
	disabled = false,
}: AdminManualCategorySelectProps) {
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
		const nextCategory = categories.find(
			(category) => category.categoryCode === categoryCode,
		);
		setKeyword(nextCategory ? buildCategoryLabel(nextCategory) : "");
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
					placeholder={placeholder}
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
