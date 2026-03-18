import type { EmployeeDto } from "../../../shared/api/generated/api.schemas";
import * as s from "./EmployeePage.css";
import { formatDate } from "./employeeShared";

interface Props {
  items: EmployeeDto[];
  onRowClick: (id: number) => void;
  onEdit:     (id: number) => void;
}

function EditIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
}

export function EmployeeTable({ items, onRowClick, onEdit }: Props) {
  return (
    <div className={s.tableCard}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th} style={{ width: "90px" }}>이름</th>
            <th className={s.th} style={{ width: "110px" }}>로그인 ID</th>
            <th className={s.th} style={{ width: "100px" }}>부서</th>
            <th className={s.th} style={{ width: "90px" }}>직책</th>
            <th className={s.th} style={{ width: "180px" }}>이메일</th>
            <th className={s.th} style={{ width: "120px" }}>연락처</th>
            <th className={s.th} style={{ width: "70px" }}>상태</th>
            <th className={s.th} style={{ width: "110px" }}>입사일</th>
            <th className={s.th} style={{ width: "60px" }}>관리</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.empId} className={s.tr} onClick={() => item.empId && onRowClick(item.empId)}>
              <td className={s.td}>{item.name ?? "-"}</td>
              <td className={s.tdSecondary}>{item.loginId ?? "-"}</td>
              <td className={s.tdSecondary}>{item.deptName ?? "-"}</td>
              <td className={s.tdSecondary}>{item.roleName ?? "-"}</td>
              <td className={s.tdSecondary}>{item.email ?? "-"}</td>
              <td className={s.tdSecondary}>{item.phone ?? "-"}</td>
              <td className={s.td}>
                <span
                  className={s.statusBadge}
                  style={item.isActive
                    ? { backgroundColor: "#ECFDF5", color: "#065F46" }
                    : { backgroundColor: "#FEE2E2", color: "#991B1B" }}
                >
                  {item.isActive ? "활성" : "비활성"}
                </span>
              </td>
              <td className={s.tdSecondary}>{formatDate(item.joinedAt)}</td>
              <td className={s.td} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: "flex", gap: "4px" }}>
                  <button type="button" className={s.actionBtn} title="수정" onClick={() => item.empId && onEdit(item.empId)}>
                    <EditIcon />
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
