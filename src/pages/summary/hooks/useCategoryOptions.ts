import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../shared/api/generated/meta-controller";
import { buildCategoryOptions } from "../categoryOptions";

/**
 * /api/meta/categories 전체 목록을 1회 호출 후 CategoryOption 배열로 캐싱
 * keyword 없이 전체를 받아 프론트에서 필터링 (react-select의 filterOption 활용)
 */
export function useCategoryOptions() {
  return useQuery({
    queryKey: ["meta", "categories"],
    queryFn: ({ signal }) => getCategories(undefined, signal),
    select: (data) => buildCategoryOptions(data),
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: Number.POSITIVE_INFINITY,
  });
}
