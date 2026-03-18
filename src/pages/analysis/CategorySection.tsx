import type { CategoryRankingDto } from "../../shared/api/generated/api.schemas";
import * as s from "./AnalysisPage.css";

interface Props {
  categories: CategoryRankingDto[];
  isPending: boolean;
}

export function CategorySection({ categories, isPending }: Props) {
  if (isPending) return <p className={s.stateText}>불러오는 중...</p>;
  if (categories.length === 0) return <p className={s.stateText}>데이터가 없습니다.</p>;

  return (
    <div className={s.categoryList}>
      {categories.map((cat, idx) => (
        <div key={`${cat.name ?? ""}-${idx}`} className={s.categoryItem}>
          <div className={s.categoryHeader}>
            <span className={s.categoryRank}>{idx + 1}</span>
            <span className={s.categoryName}>{cat.name ?? "-"}</span>
            <span className={s.categoryCount}>{cat.totalCount?.toLocaleString() ?? "-"}건</span>
          </div>
          {cat.mediumCategories && cat.mediumCategories.length > 0 && (
            <div className={s.subCatList}>
              {cat.mediumCategories.map((sub, subIdx) => (
                <span key={`${sub.name ?? ""}-${subIdx}`} className={s.subCatItem}>
                  {sub.name}
                  {sub.count != null && <strong>{sub.count.toLocaleString()}</strong>}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
