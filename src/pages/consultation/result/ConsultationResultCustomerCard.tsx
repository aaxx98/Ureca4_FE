import type { DemoConsultDataResponse } from "../../../shared/api/generated/api.schemas";
import * as s from "./ConsultationResultPage.css";

interface Props {
  demo: DemoConsultDataResponse;
}

function Field({
  label,
  value,
  placeholder,
}: {
  label: string;
  value?: string | number | null;
  placeholder?: string;
}) {
  const isEmpty = value == null || value === "";
  return (
    <div className={s.field}>
      <span className={s.fieldLabel}>{label}</span>
      <div className={isEmpty && placeholder ? s.fieldValuePlaceholder : s.fieldValue}>
        {isEmpty ? (placeholder ?? "-") : value}
      </div>
    </div>
  );
}

export function ConsultationResultCustomerCard({ demo }: Props) {
  const customerNo = demo.customerId ? `CUS-${demo.customerId}` : "-";

  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <div className={s.cardTitleRow}>
          <span>👤</span>
          <h2 className={s.cardTitle}>고객 기본 정보</h2>
        </div>
      </div>
      <div className={s.cardBody}>
        <div className={s.grid2}>
          <Field label="고객명"   value={demo.customerName} />
          <Field label="고객번호" value={customerNo} />
        </div>
        <div className={s.grid3}>
          <Field label="성별"     value={demo.gender} placeholder="Gender" />
          <Field label="생년월일" value={demo.birthDate} />
          <Field label="이메일"   value={demo.email} />
        </div>
        <div className={s.grid2}>
          <Field label="연락처"   value={demo.phone} />
          <Field label="고객 등급" value={demo.gradeCode} />
        </div>
        <div className={s.grid2}>
          <Field label="고객 유형" value={demo.customerType} />
          <Field label="상담 카테고리 코드" value={demo.categoryCode} />
        </div>

        {demo.subscribedProducts && demo.subscribedProducts.length > 0 && (
          <div className={s.field}>
            <span className={s.fieldLabel}>가입 상품</span>
            <div className={s.productTableWrapper}>
              <div className={s.productTableHeader}>
                <span>상품 종류</span>
                <span>상품 코드</span>
                <span>상품 이름</span>
                <span>카테고리</span>
              </div>
              {demo.subscribedProducts.map((p) => (
                <div key={p.productCode ?? p.productName} className={s.productTableRow}>
                  <span className={s.productTableCell}>{p.productType ?? "-"}</span>
                  <span className={s.productTableCell}>{p.productCode ?? "-"}</span>
                  <span className={s.productTableCell}>{p.productName ?? "-"}</span>
                  <span className={s.productTableCell}>{p.category ?? "-"}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
