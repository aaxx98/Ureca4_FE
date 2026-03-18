import type { CategorySummaryResponse } from "../../shared/api/generated/api.schemas";
import * as s from "./AdminReportPage.css";
import { ReportSection } from "./ReportSection";

interface Props {
  data: CategorySummaryResponse | undefined;
  isPending: boolean;
}

export function CategorySummarySection({ data, isPending }: Props) {
  const categories = data?.categories ?? [];
  return (
    <ReportSection title="카테고리별 빈도" isPending={isPending} hasData={categories.length > 0}>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.th}>카테고리</th>
              <th className={s.th}>건수</th>
              <th className={s.th}>비율</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c, i) => (
              <tr key={`${c.code ?? c.name}-${i}`}>
                <td className={s.td}>{c.name ?? "-"}</td>
                <td className={s.td}>{c.count?.toLocaleString() ?? "-"}건</td>
                <td className={s.td}>
                  <div className={s.barRow} style={{ marginBottom: 0 }}>
                    <div className={s.barTrack}>
                      <div className={s.barFill} style={{ width: `${Math.min(c.rate ?? 0, 100)}%` }} />
                    </div>
                    <span className={s.barPct}>{c.rate?.toFixed(1) ?? "-"}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ReportSection>
  );
}
