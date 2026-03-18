import type { FilterCustomItemResponse } from "../../shared/api/generated/api.schemas";

export interface FilterDraft {
	keyword: string;       // filterId 1
	fromDate: string;      // filterId 2
	toDate: string;        // filterId 3
	agentName: string;     // filterId 4
	categoryName: string;  // filterId 5
	channel: string;       // filterId 6
	customerName: string;  // filterId 10
	customerPhone: string; // filterId 11
	customerType: string;  // filterId 12
	grade: string[];       // filterId 13 (OR 복수)
	riskType: string[];    // filterId 14 (OR 복수)
	productName: string;   // filterId 15
	satisfaction: string;  // filterId 17
}

export const EMPTY_DRAFT: FilterDraft = {
	keyword: "", fromDate: "", toDate: "", agentName: "",
	categoryName: "", channel: "", customerName: "", customerPhone: "",
	customerType: "", grade: [], riskType: [], productName: "", satisfaction: "",
};

export function buildFilterItems(d: FilterDraft): { filterId: number; filterValue: string }[] {
	const items: { filterId: number; filterValue: string }[] = [];
	if (d.keyword)        items.push({ filterId: 1,  filterValue: d.keyword });
	if (d.fromDate)       items.push({ filterId: 2,  filterValue: d.fromDate });
	if (d.toDate)         items.push({ filterId: 3,  filterValue: d.toDate });
	if (d.agentName)      items.push({ filterId: 4,  filterValue: d.agentName });
	if (d.categoryName)   items.push({ filterId: 5,  filterValue: d.categoryName });
	if (d.channel)        items.push({ filterId: 6,  filterValue: d.channel });
	if (d.customerName)   items.push({ filterId: 10, filterValue: d.customerName });
	if (d.customerPhone)  items.push({ filterId: 11, filterValue: d.customerPhone });
	if (d.customerType)   items.push({ filterId: 12, filterValue: d.customerType });
	for (const v of d.grade)    items.push({ filterId: 13, filterValue: v });
	for (const v of d.riskType) items.push({ filterId: 14, filterValue: v });
	if (d.productName)    items.push({ filterId: 15, filterValue: d.productName });
	if (d.satisfaction)   items.push({ filterId: 17, filterValue: d.satisfaction });
	return items;
}

export function parseToDraft(filters: FilterCustomItemResponse[]): FilterDraft {
	const d = { ...EMPTY_DRAFT, grade: [] as string[], riskType: [] as string[] };
	for (const f of filters) {
		switch (f.filterId) {
			case 1:  d.keyword       = f.filterValue ?? ""; break;
			case 2:  d.fromDate      = f.filterValue ?? ""; break;
			case 3:  d.toDate        = f.filterValue ?? ""; break;
			case 4:  d.agentName     = f.filterValue ?? ""; break;
			case 5:  d.categoryName  = f.filterValue ?? ""; break;
			case 6:  d.channel       = f.filterValue ?? ""; break;
			case 10: d.customerName  = f.filterValue ?? ""; break;
			case 11: d.customerPhone = f.filterValue ?? ""; break;
			case 12: d.customerType  = f.filterValue ?? ""; break;
			case 13: if (f.filterValue) d.grade    = [...d.grade,    f.filterValue]; break;
			case 14: if (f.filterValue) d.riskType = [...d.riskType, f.filterValue]; break;
			case 15: d.productName   = f.filterValue ?? ""; break;
			case 17: d.satisfaction  = f.filterValue ?? ""; break;
		}
	}
	return d;
}
