import type { CategoryDto, ListParams } from "../../shared/api/generated/api.schemas";

export type CategoryOptionType = "LARGE" | "MEDIUM" | "SMALL";

export interface CategoryOption {
  type: CategoryOptionType;
  value: string;
  label: string;
}

/**
 * /api/meta/categories 응답 배열 → react-select 옵션 리스트 변환
 * LARGE → MEDIUM → SMALL 순으로 flatten
 */
export function buildCategoryOptions(categories: CategoryDto[]): CategoryOption[] {
  const largeSet = new Set<string>();
  const mediumSet = new Set<string>();
  const options: CategoryOption[] = [];

  for (const c of categories) {
    const large  = c.largeCategory  ?? "";
    const medium = c.mediumCategory ?? "";
    const small  = c.smallCategory  ?? "";
    const code   = c.categoryCode   ?? "";

    if (!largeSet.has(large)) {
      largeSet.add(large);
      options.push({ type: "LARGE", value: large, label: `${large} 전체` });
    }

    const mediumKey = `${large}__${medium}`;
    if (!mediumSet.has(mediumKey)) {
      mediumSet.add(mediumKey);
      options.push({ type: "MEDIUM", value: medium, label: `${large} > ${medium} 전체` });
    }

    options.push({
      type: "SMALL",
      value: code,
      label: `${large} > ${medium} > ${small}`,
    });
  }

  return options;
}

/**
 * 선택된 CategoryOption → ListParams 카테고리 필드 변환
 * LARGE  → categoryLarge
 * MEDIUM → categoryMedium
 * SMALL  → categoryCode  (categorySmall 텍스트 파라미터는 미사용)
 */
export function buildCategoryQuery(
  selected: CategoryOption | null,
): Pick<ListParams, "categoryLarge" | "categoryMedium" | "categoryCode"> {
  if (!selected) return {};
  switch (selected.type) {
    case "LARGE":  return { categoryLarge: selected.value };
    case "MEDIUM": return { categoryMedium: selected.value };
    case "SMALL":  return { categoryCode: selected.value };
    default:       return {};
  }
}
