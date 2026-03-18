import * as ms from "../../consultation/list/ConsultationDetailModal.css";

export function formatDate(dateStr?: string) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
}

export function EmployeeField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={ms.fieldGroup}>
      <label className={ms.fieldLabel}>{label}</label>
      {children}
    </div>
  );
}

export function EmployeeViewField({ label, value, dimmed }: { label: string; value?: string | number | null; dimmed?: boolean }) {
  return (
    <div className={ms.fieldGroup}>
      <label className={ms.fieldLabel}>{label}</label>
      <div className={ms.fieldBox} style={dimmed ? { backgroundColor: "#F9FAFB", color: "#9CA3AF", cursor: "not-allowed" } : undefined}>
        {value ?? "-"}
      </div>
    </div>
  );
}
