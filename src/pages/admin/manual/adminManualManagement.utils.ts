import type { CategoryDto } from "../../../shared/api/generated/api.schemas";
import type { ManualHistoryItem } from "./adminManualManagement.api";

export function filterCategories(list: CategoryDto[], keyword: string) {
	const normalizedKeyword = keyword.trim().toLowerCase();

	if (!normalizedKeyword) {
		return list;
	}

	return list.filter((category) => {
		const categoryCode = category.categoryCode?.toLowerCase() ?? "";
		const smallCategory = category.smallCategory?.toLowerCase() ?? "";

		return (
			categoryCode.includes(normalizedKeyword) ||
			smallCategory.includes(normalizedKeyword)
		);
	});
}

export function extractSmallCategory(categoryName: string) {
	const match = categoryName.match(/>([^>\]]+)\]$/);

	if (match) {
		return match[1].trim();
	}

	const normalized = categoryName
		.replaceAll("[", "")
		.replaceAll("]", "")
		.split(/>|›/)
		.map((value) => value.trim())
		.filter(Boolean);

	return normalized.at(-1) ?? categoryName;
}

export function buildCategoryLabel(category: CategoryDto) {
	const smallCategory =
		category.smallCategory?.trim() || category.categoryCode?.trim() || "미분류";
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

	return list.filter((manual) =>
		manual.title.toLowerCase().includes(normalizedKeyword),
	);
}
