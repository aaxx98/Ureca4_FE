import type { CategoryDto } from "../../../shared/api/generated/api.schemas";
import type { ManualHistoryItem } from "./adminManualManagement.api";

export function filterCategories(list: CategoryDto[], keyword: string) {
	const normalizedKeyword = keyword.trim();

	if (!normalizedKeyword) {
		return list;
	}

	return list.filter((category) => {
		const categoryCode = category.categoryCode ?? "";
		const smallCategory = category.smallCategory ?? "";

		return (
			categoryCode.includes(normalizedKeyword) ||
			smallCategory.includes(normalizedKeyword)
		);
	});
}

export function formatCategoryName(categoryName: string) {
	return categoryName.replaceAll("[", "").replaceAll("]", "").trim();
}

export function buildCategoryLabel(category: CategoryDto) {
	const smallCategory = category.smallCategory?.trim() || "미분류";
	const categoryCode = category.categoryCode?.trim() || "-";

	return `${smallCategory} (${categoryCode})`;
}

export function filterManualsByKeyword(
	list: ManualHistoryItem[],
	keyword: string,
) {
	const normalizedKeyword = keyword.trim().toLowerCase();

	if (!normalizedKeyword) {
		return list;
	}

	return list.filter((manual) => {
		const haystacks = [
			manual.title,
			manual.content,
			manual.empName,
			manual.categoryName,
		].map((value) => value.toLowerCase());

		return haystacks.some((value) => value.includes(normalizedKeyword));
	});
}

export function formatManualDate(updatedAt: string) {
	if (!updatedAt) {
		return "-";
	}

	return updatedAt.slice(0, 10);
}
