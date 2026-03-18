import { useState } from "react";
import {
  useMutationPatchEmployeeStatusQuery,
  useMutationPostEmployeeQuery,
} from "../../../shared/api/generated/admin-employee-management";
import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import { Button } from "../../../shared/ui/Button/Button";
import * as ms from "../../consultation/list/ConsultationDetailModal.css";
import { EmployeeField, EmployeeStatusSwitchField } from "./employeeShared";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
}

export function EmployeeFormModal({ onClose, onSuccess }: Props) {
  const [isClosing, setIsClosing] = useState(false);
  const [name, setName]           = useState("");
  const [loginId, setLoginId]     = useState("");
  const [password, setPassword]   = useState("");
  const [email, setEmail]         = useState("");
  const [phone, setPhone]         = useState("");
  const [birth, setBirth]         = useState("");
  const [gender, setGender]       = useState("M");
  const [deptId, setDeptId]       = useState("");
  const [jobRoleId, setJobRoleId] = useState("");
  const [joinedAt, setJoinedAt]   = useState("");
  const [isActive, setIsActive]   = useState(true);
  const [errorMsg, setErrorMsg]   = useState("");

  const mutation       = useMutationPostEmployeeQuery();
  const statusMutation = useMutationPatchEmployeeStatusQuery();

  function handleClose() { setIsClosing(true); setTimeout(onClose, 180); }

  async function handleSubmit() {
    const normalizedLoginId = loginId.trim();

    if (!normalizedLoginId) {
      setErrorMsg("로그인 ID는 필수입니다.");
      return;
    }

    if (/\s/.test(loginId)) {
      setErrorMsg("로그인 ID에는 공백을 포함할 수 없습니다.");
      return;
    }

    setErrorMsg("");

    try {
      const created = await mutation.mutateAsync({
        data: { loginId: normalizedLoginId, password, name, email, phone, birth, gender,
          deptId: deptId ? Number(deptId) : undefined,
          jobRoleId: jobRoleId ? Number(jobRoleId) : undefined,
          joinedAt: joinedAt || undefined },
      });

      if (!isActive && created?.empId) {
        await statusMutation.mutateAsync({ empId: created.empId, data: { isActive: false } });
      }

      onSuccess();
      handleClose();
    } catch {
      setErrorMsg("저장에 실패했습니다. 다시 시도해주세요.");
    }
  }

  const isSubmitting = mutation.isPending || statusMutation.isPending;

  return (
    <BaseModal title="직원 추가" onClose={handleClose} isClosing={isClosing} size="lg"
      footer={
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", width: "100%" }}>
          <Button variant="secondary" type="button" onClick={handleClose} disabled={isSubmitting}>취소</Button>
          <Button variant="primary" type="button" onClick={handleSubmit} disabled={isSubmitting}>등록</Button>
        </div>
      }
    >
      <div className={ms.fieldStack}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <EmployeeField label="이름"><input className={ms.fieldBox} value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" /></EmployeeField>
          <EmployeeField label="로그인 ID"><input className={ms.fieldBox} value={loginId} onChange={(e) => setLoginId(e.target.value)} placeholder="로그인 ID" required /></EmployeeField>
          <EmployeeField label="비밀번호"><input type="password" className={ms.fieldBox} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" /></EmployeeField>
          <EmployeeField label="이메일"><input className={ms.fieldBox} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" /></EmployeeField>
          <EmployeeField label="연락처"><input className={ms.fieldBox} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="010-0000-0000" /></EmployeeField>
          <EmployeeField label="생년월일"><input type="date" className={ms.fieldBox} value={birth} onChange={(e) => setBirth(e.target.value)} /></EmployeeField>
          <EmployeeField label="성별">
            <select className={ms.fieldBox} value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="M">남성</option>
              <option value="F">여성</option>
            </select>
          </EmployeeField>
          <EmployeeField label="부서 ID"><input type="number" className={ms.fieldBox} value={deptId} onChange={(e) => setDeptId(e.target.value)} placeholder="부서 ID" /></EmployeeField>
          <EmployeeField label="직책 ID"><input type="number" className={ms.fieldBox} value={jobRoleId} onChange={(e) => setJobRoleId(e.target.value)} placeholder="직책 ID" /></EmployeeField>
          <EmployeeField label="입사일"><input type="date" className={ms.fieldBox} value={joinedAt} onChange={(e) => setJoinedAt(e.target.value)} /></EmployeeField>
        </div>
        <EmployeeStatusSwitchField checked={isActive} onChange={setIsActive} loading={statusMutation.isPending} helperText="직원 생성 직후 계정 상태를 설정합니다." />
        {errorMsg && <p style={{ fontSize: "13px", color: "#DC2626", margin: 0 }}>{errorMsg}</p>}
      </div>
    </BaseModal>
  );
}
