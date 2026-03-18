import { useEffect, useState } from "react";
import {
  useGetEmployeeDetailQuery,
  useMutationPutEmployeeQuery,
} from "../../../shared/api/generated/admin-employee-management";
import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import { Button } from "../../../shared/ui/Button/Button";
import * as ms from "../../consultation/list/ConsultationDetailModal.css";
import { EmployeeField, EmployeeViewField, formatDate } from "./employeeShared";

interface Props {
  empId: number;
  myEmpId?: number;
  onClose: () => void;
  onToggleStatus: (empId: number, isActive: boolean) => void;
}

export function EmployeeDetailModal({ empId, myEmpId, onClose, onToggleStatus }: Props) {
  const [isClosing, setIsClosing]       = useState(false);
  const [isEditing, setIsEditing]       = useState(false);
  const [name, setName]                 = useState("");
  const [email, setEmail]               = useState("");
  const [phone, setPhone]               = useState("");
  const [birth, setBirth]               = useState("");
  const [gender, setGender]             = useState("M");
  const [deptId, setDeptId]             = useState("");
  const [jobRoleId, setJobRoleId]       = useState("");
  const [joinedAt, setJoinedAt]         = useState("");
  const [isActiveEdit, setIsActiveEdit] = useState(true);
  const [initialized, setInitialized]   = useState(false);
  const [errorMsg, setErrorMsg]         = useState("");

  const { data: emp, isPending, isError } = useGetEmployeeDetailQuery(empId, { query: { staleTime: 0 } });
  const putMutation = useMutationPutEmployeeQuery();
  const isSaving    = putMutation.isPending;

  useEffect(() => {
    if (emp && !initialized) {
      setName(emp.name ?? "");         setEmail(emp.email ?? "");
      setPhone(emp.phone ?? "");       setBirth(emp.birth ?? "");
      setGender(emp.gender ?? "M");    setIsActiveEdit(emp.isActive ?? true);
      setDeptId(String(emp.deptId ?? "")); setJobRoleId(String(emp.jobRoleId ?? ""));
      setJoinedAt(emp.joinedAt?.slice(0, 10) ?? "");
      setInitialized(true);
    }
  }, [emp, initialized]);

  function handleClose() { setIsClosing(true); setTimeout(onClose, 180); }

  function handleSave() {
    setErrorMsg("");
    putMutation.mutate({
      id: empId,
      data: { name, email, phone, birth, gender,
        dept_id: deptId ? Number(deptId) : undefined,
        job_role_id: jobRoleId ? Number(jobRoleId) : undefined,
        joined_at: joinedAt || undefined },
    }, {
      onSuccess: () => {
        if (emp && isActiveEdit !== emp.isActive) onToggleStatus(empId, !!emp.isActive);
        setIsEditing(false); setInitialized(false);
      },
      onError: () => setErrorMsg("저장에 실패했습니다. 다시 시도해주세요."),
    });
  }

  const isOwnAccount = empId === myEmpId;

  const footer = (
    <div style={{ display: "flex", gap: "8px", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        {isEditing && emp && (
          <Button variant="ghost" type="button"
            style={{ color: isActiveEdit ? "#059669" : "#DC2626" }}
            onClick={() => setIsActiveEdit(!isActiveEdit)}
            disabled={isOwnAccount}
            title={isOwnAccount ? "본인 계정은 변경할 수 없습니다" : undefined}
          >
            {isActiveEdit ? "활성화" : "비활성화"}
          </Button>
        )}
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        {isEditing ? (
          <>
            <Button variant="secondary" type="button" onClick={() => { setIsEditing(false); setInitialized(false); }} disabled={isSaving}>취소</Button>
            <Button variant="primary" type="button" onClick={handleSave} disabled={isSaving || !initialized}>저장</Button>
          </>
        ) : (
          <Button variant="secondary" type="button" onClick={() => { setIsActiveEdit(emp?.isActive ?? false); setIsEditing(true); }} disabled={!initialized}>수정</Button>
        )}
      </div>
    </div>
  );

  return (
    <BaseModal title="직원 상세" onClose={handleClose} isClosing={isClosing} size="lg" footer={footer}>
      {isPending && <p className={ms.stateText}>불러오는 중...</p>}
      {isError   && <p className={ms.stateText}>정보를 불러오지 못했습니다.</p>}
      {emp && (
        <div className={ms.fieldStack}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {isEditing ? (
              <>
                <EmployeeField label="이름"><input className={ms.fieldBox} value={name} onChange={(e) => setName(e.target.value)} /></EmployeeField>
                <EmployeeViewField label="로그인 ID" value={emp.loginId} dimmed />
                <EmployeeField label="이메일"><input className={ms.fieldBox} value={email} onChange={(e) => setEmail(e.target.value)} /></EmployeeField>
                <EmployeeField label="연락처"><input className={ms.fieldBox} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="010-0000-0000" /></EmployeeField>
                <EmployeeField label={`부서${emp.deptName ? ` (현재: ${emp.deptName})` : ""}`}>
                  <input type="number" className={ms.fieldBox} value={deptId} onChange={(e) => setDeptId(e.target.value)} placeholder="부서 ID" />
                </EmployeeField>
                <EmployeeField label={`직책${emp.roleName ? ` (현재: ${emp.roleName})` : ""}`}>
                  <input type="number" className={ms.fieldBox} value={jobRoleId} onChange={(e) => setJobRoleId(e.target.value)} placeholder="직책 ID" />
                </EmployeeField>
                <EmployeeField label="성별">
                  <select className={ms.fieldBox} value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="M">남성</option>
                    <option value="F">여성</option>
                  </select>
                </EmployeeField>
                <EmployeeField label="생년월일"><input type="date" className={ms.fieldBox} value={birth} onChange={(e) => setBirth(e.target.value)} /></EmployeeField>
                <EmployeeField label="입사일"><input type="date" className={ms.fieldBox} value={joinedAt} onChange={(e) => setJoinedAt(e.target.value)} /></EmployeeField>
                <EmployeeViewField label="등록일" value={formatDate(emp.createdAt)} dimmed />
              </>
            ) : (
              <>
                <EmployeeViewField label="이름"     value={emp.name} />
                <EmployeeViewField label="로그인 ID" value={emp.loginId} />
                <EmployeeViewField label="이메일"   value={emp.email} />
                <EmployeeViewField label="연락처"   value={emp.phone} />
                <EmployeeViewField label="부서"     value={emp.deptName} />
                <EmployeeViewField label="직책"     value={emp.roleName} />
                <EmployeeViewField label="성별"     value={emp.gender === "M" ? "남성" : emp.gender === "F" ? "여성" : emp.gender} />
                <EmployeeViewField label="생년월일" value={emp.birth} />
                <EmployeeViewField label="입사일"   value={formatDate(emp.joinedAt)} />
                <EmployeeViewField label="등록일"   value={formatDate(emp.createdAt)} />
              </>
            )}
          </div>
          {errorMsg && <p style={{ fontSize: "13px", color: "#DC2626", margin: 0 }}>{errorMsg}</p>}
        </div>
      )}
    </BaseModal>
  );
}
