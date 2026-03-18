import type { CSSProperties, ReactNode } from "react";
import * as ms from "../../consultation/list/ConsultationDetailModal.css";

export function formatDate(dateStr?: string) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
}

export function EmployeeField({ label, children }: { label: string; children: ReactNode }) {
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

interface EmployeeSwitchFieldProps {
  checked: boolean;
  disabled?: boolean;
  loading?: boolean;
  helperText?: string;
  errorText?: string;
  onChange: (checked: boolean) => void;
}

const switchTrackStyle = (checked: boolean, disabled?: boolean): CSSProperties => ({
  position: "relative",
  width: "52px",
  height: "30px",
  borderRadius: "999px",
  border: "none",
  backgroundColor: disabled ? "#D1D5DB" : checked ? "#2563EB" : "#CBD5E1",
  cursor: disabled ? "not-allowed" : "pointer",
  transition: "all 140ms ease",
  flexShrink: 0,
});

const switchThumbStyle = (checked: boolean): CSSProperties => ({
  position: "absolute",
  top: "3px",
  left: checked ? "25px" : "3px",
  width: "24px",
  height: "24px",
  borderRadius: "999px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 1px 3px rgba(15, 23, 42, 0.18)",
  transition: "left 140ms ease",
});

export function EmployeeStatusSwitchField({ checked, disabled, loading, helperText, errorText, onChange }: EmployeeSwitchFieldProps) {
  return (
    <EmployeeField label="계정 활성화 여부">
      <div className={ms.fieldBox} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <strong style={{ fontSize: "14px", color: checked ? "#065F46" : "#991B1B" }}>{checked ? "활성화" : "비활성화"}</strong>
          <span style={{ fontSize: "12px", color: "#6B7280" }}>
            {loading ? "상태를 변경하는 중입니다..." : helperText ?? "직원 계정 사용 여부를 설정합니다."}
          </span>
          {errorText ? <span style={{ fontSize: "12px", color: "#DC2626" }}>{errorText}</span> : null}
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={checked ? "계정 활성화 상태" : "계정 비활성화 상태"}
          onClick={() => onChange(!checked)}
          disabled={disabled || loading}
          style={switchTrackStyle(checked, disabled || loading)}
        >
          <span aria-hidden="true" style={switchThumbStyle(checked)} />
        </button>
      </div>
    </EmployeeField>
  );
}
