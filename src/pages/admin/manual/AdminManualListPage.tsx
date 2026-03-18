import { useQueryClient } from "@tanstack/react-query";
import {
  useGetManualHistoryQuery,
  useMutationPatchActivateManualQuery,
  useMutationPatchDeactivateManualQuery,
} from "../../../shared/api/generated/admin-manual-management";
import * as layout from "../../../shared/ui/pageLayout.css";
import * as s from "./AdminManualPage.css";

const MANUAL_HISTORY_KEY = ["/admin/manuals/history"];

export function AdminManualListPage() {
  const queryClient = useQueryClient();
  const { data, isPending, isError } = useGetManualHistoryQuery();
  const items = data ?? [];

  const activateMutation = useMutationPatchActivateManualQuery({
    mutation: {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: MANUAL_HISTORY_KEY }),
      onError:   () => alert("활성화 처리 중 오류가 발생했습니다."),
    },
  });

  const deactivateMutation = useMutationPatchDeactivateManualQuery({
    mutation: {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: MANUAL_HISTORY_KEY }),
      onError:   () => alert("비활성화 처리 중 오류가 발생했습니다."),
    },
  });

  return (
    <main className={layout.main}>
        <div className={s.pageWrapper}>
          <div className={s.pageHeader}>
            <div className={s.headerBadge}>📖 ADMIN · MANUAL</div>
            <h1 className={s.headerTitle}>매뉴얼 목록</h1>
            <p className={s.headerSubtitle}>등록된 매뉴얼 이력을 확인하고 활성화 여부를 관리하세요</p>
          </div>

          <div className={s.content}>
            {isPending && <p className={s.stateText}>불러오는 중...</p>}
            {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}
            {!isPending && !isError && items.length === 0 && (
              <p className={s.stateText}>등록된 매뉴얼이 없습니다.</p>
            )}

            {!isPending && !isError && items.length > 0 && (
              <div className={s.tableWrap}>
                <div className={s.tableScroll}>
                  <table className={s.table}>
                    <thead className={s.thead}>
                      <tr>
                        <th className={s.th}>카테고리</th>
                        <th className={s.th}>제목</th>
                        <th className={s.th}>작성자</th>
                        <th className={s.th}>수정일</th>
                        <th className={s.thCenter}>활성화</th>
                        <th className={s.thCenter}>관리</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => {
                        const id = item.manualId ?? 0;
                        return (
                          <tr key={id} className={s.tr}>
                            <td className={s.td}>
                              {item.categoryName && (
                                <span className={s.categoryPill}>{item.categoryName}</span>
                              )}
                            </td>
                            <td className={s.td}>
                              <span className={s.titleText}>{item.title ?? "-"}</span>
                            </td>
                            <td className={s.td}>
                              <span style={{ fontSize: "13px", color: "#374151" }}>{item.empName ?? "-"}</span>
                            </td>
                            <td className={s.td}>
                              <span className={s.dateText}>{item.updatedAt?.slice(0, 10) ?? "-"}</span>
                            </td>
                            <td className={s.tdCenter}>
                              {item.isActive ? (
                                <span className={s.statusBadgeActive}>활성</span>
                              ) : (
                                <span className={s.statusBadgeInactive}>비활성</span>
                              )}
                            </td>
                            <td className={s.tdCenter}>
                              <div className={s.actionCell}>
                                {item.isActive ? (
                                  <button
                                    type="button"
                                    className={s.btnDeactivate}
                                    disabled={deactivateMutation.isPending}
                                    onClick={() => deactivateMutation.mutate({ manualId: id })}
                                  >
                                    비활성화
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    className={s.btnActivate}
                                    disabled={activateMutation.isPending}
                                    onClick={() => activateMutation.mutate({ manualId: id })}
                                  >
                                    활성화
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
    </main>
  );
}
