import type { FilterCustomItemResponse, ListParams } from "../../shared/api/generated/api.schemas";
import type { CategoryOption } from "./categoryOptions";

export interface FilterDraft {
  // 기본
  keyword: string;
  fromDate: string;
  toDate: string;
  channel: string;

  // 상담사 (agentId 우선, agentName은 보조 — 둘 다 채워질 경우 agentId만 전송)
  agentId: string;
  agentName: string;

  // 카테고리 (단일 autocomplete → type에 따라 파라미터 분기)
  category: CategoryOption | null;

  // 고객
  customerId: string;
  customerName: string;
  customerPhone: string;
  grade: string;    // 단일
  gender: string;

  // 해지/방어 (boolean select → "" | "true" | "false" 로 관리, buildParams에서 변환)
  intent: "" | "true" | "false";
  defenseAttempted: "" | "true" | "false";
  defenseSuccess: "" | "true" | "false";
  complaintCategory: string;
  defenseCategory: string;

  // 아웃바운드
  outboundCategory: string;
  outboundResult: string;

  // 리스크 (multi-select)
  riskType: string[];
  riskLevel: string[];

  // 상품 (multi autocomplete)
  productCode: string[];

  // 상담 시간(초)
  minDuration: string;
  maxDuration: string;
}

export const EMPTY_DRAFT: FilterDraft = {
  keyword: "",
  fromDate: "",
  toDate: "",
  channel: "",
  agentId: "",
  agentName: "",
  category: null,
  customerId: "",
  customerName: "",
  customerPhone: "",
  grade: "",
  gender: "",
  intent: "",
  defenseAttempted: "",
  defenseSuccess: "",
  complaintCategory: "",
  defenseCategory: "",
  outboundCategory: "",
  outboundResult: "",
  riskType: [],
  riskLevel: [],
  productCode: [],
  minDuration: "",
  maxDuration: "",
};

/** FilterDraft → /api/summaries 쿼리 파라미터 변환 */
export function buildParams(d: FilterDraft): Omit<ListParams, "page" | "size"> {
  const { categoryLarge, categoryMedium, categoryCode } = buildCategoryQuery(d.category);
  return {
    ...(d.keyword             && { keyword: d.keyword }),
    ...(d.fromDate            && { fromDate: d.fromDate }),
    ...(d.toDate              && { toDate: d.toDate }),
    ...(d.channel             && { channel: d.channel }),
    // 카테고리
    ...(categoryLarge         && { categoryLarge }),
    ...(categoryMedium        && { categoryMedium }),
    ...(categoryCode          && { categoryCode }),
    // 상담사: agentId 있으면 agentName 무시
    ...(d.agentId
      ? { agentId: d.agentId }
      : d.agentName ? { agentName: d.agentName } : {}),
    // 고객
    ...(d.customerId          && { customerId: d.customerId }),
    ...(d.customerName        && { customerName: d.customerName }),
    ...(d.customerPhone       && { customerPhone: d.customerPhone }),
    ...(d.grade               && { grade: d.grade }),
    ...(d.gender              && { gender: d.gender }),
    // boolean 변환 (빈 문자열은 파라미터 미전송)
    ...(d.intent           !== "" && { intent: d.intent === "true" }),
    ...(d.defenseAttempted !== "" && { defenseAttempted: d.defenseAttempted === "true" }),
    ...(d.defenseSuccess   !== "" && { defenseSuccess: d.defenseSuccess === "true" }),
    ...(d.complaintCategory   && { complaintCategory: d.complaintCategory }),
    ...(d.defenseCategory     && { defenseCategory: d.defenseCategory }),
    ...(d.outboundCategory    && { outboundCategory: d.outboundCategory }),
    ...(d.outboundResult      && { outboundResult: d.outboundResult }),
    // 배열 (빈 배열은 파라미터 미전송)
    ...(d.riskType.length     && { riskType: d.riskType }),
    ...(d.riskLevel.length    && { riskLevel: d.riskLevel }),
    ...(d.productCode.length  && { productCode: d.productCode }),
    // 상담 시간
    ...(d.minDuration         && { minDuration: Number(d.minDuration) }),
    ...(d.maxDuration         && { maxDuration: Number(d.maxDuration) }),
  };
}

/** 카테고리 선택값 → API 파라미터 분기 (categoryOptions.ts의 buildCategoryQuery와 동일 로직, 순환 참조 방지용 인라인) */
function buildCategoryQuery(
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

// ─── 저장 필터 연동 ────────────────────────────────────────────────────────────

/** FilterDraft → /api/search-filters 저장용 items 변환
 *  카테고리는 기존 filterId 5 (category_name) 유지 — 저장 전용
 */
export function buildFilterItems(d: FilterDraft): { filterId: number; filterValue: string }[] {
  const items: { filterId: number; filterValue: string }[] = [];
  if (d.keyword)                    items.push({ filterId: 1,  filterValue: d.keyword });
  if (d.fromDate)                   items.push({ filterId: 2,  filterValue: d.fromDate });
  if (d.toDate)                     items.push({ filterId: 3,  filterValue: d.toDate });
  if (d.agentName)                  items.push({ filterId: 4,  filterValue: d.agentName });
  if (d.category)                   items.push({ filterId: 5,  filterValue: d.category.label });
  if (d.channel)                    items.push({ filterId: 6,  filterValue: d.channel });
  if (d.customerName)               items.push({ filterId: 10, filterValue: d.customerName });
  if (d.customerPhone)              items.push({ filterId: 11, filterValue: d.customerPhone });
  for (const v of d.riskType)       items.push({ filterId: 14, filterValue: v });
  for (const v of d.productCode)    items.push({ filterId: 15, filterValue: v });
  return items;
}

/** /api/search-filters 응답 → FilterDraft 복원
 *  카테고리(filterId 5)는 label만 복원 가능 — 검색 파라미터 분기 불가 (저장 전용)
 */
export function parseToDraft(filters: FilterCustomItemResponse[]): FilterDraft {
  const d: FilterDraft = { ...EMPTY_DRAFT, riskType: [], productCode: [] };
  for (const f of filters) {
    switch (f.filterId) {
      case 1:  d.keyword       = f.filterValue ?? ""; break;
      case 2:  d.fromDate      = f.filterValue ?? ""; break;
      case 3:  d.toDate        = f.filterValue ?? ""; break;
      case 4:  d.agentName     = f.filterValue ?? ""; break;
      // filterId 5: category_name은 저장 전용 — label만 복원, category 필드는 null 유지
      case 6:  d.channel       = f.filterValue ?? ""; break;
      case 10: d.customerName  = f.filterValue ?? ""; break;
      case 11: d.customerPhone = f.filterValue ?? ""; break;
      case 14: if (f.filterValue) d.riskType    = [...d.riskType,    f.filterValue]; break;
      case 15: if (f.filterValue) d.productCode = [...d.productCode, f.filterValue]; break;
    }
  }
  return d;
}
