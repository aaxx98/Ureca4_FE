import { Link } from "@tanstack/react-router";
import type { MyInfoResponseDto } from "../../shared/api/generated/api.schemas";
import { useGetMyInfo } from "../../shared/api/generated/auth";
import { ROUTES } from "../../shared/config/routes";
import { UserIcon } from "../../shared/ui/icons";
import * as layout from "../../shared/ui/pageLayout.css";
import { AppTopbar } from "../../widgets/AppTopbar/AppTopbar";
import * as s from "./MyPage.css";

function formatDate(dateStr?: string) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
}

function formatGender(gender?: string) {
  if (!gender) return "—";
  if (gender === "MALE" || gender === "M") return "남성";
  if (gender === "FEMALE" || gender === "F") return "여성";
  return gender;
}

export function MyPage() {
  const { data, isPending, isError } = useGetMyInfo();

  return (
    <div className={layout.layout}>
      <AppTopbar />

      <div className={layout.body}>
        <aside className={layout.contextPanel}>
          <div className={layout.contextLabel}>마이페이지</div>
          <Link
            to={ROUTES.MYPAGE}
            className={layout.contextItem}
            activeProps={{ className: `${layout.contextItem} ${layout.contextItemActive}` }}
          >
            <UserIcon />
            내 정보
          </Link>
        </aside>

        <main className={layout.main}>
          <div className={layout.contentHeader}>
            <p className={layout.breadcrumb}>
              마이페이지 <span className={layout.breadcrumbAccent}>/ 내 정보</span>
            </p>
            <h1 className={layout.contentTitle}>내 정보</h1>
          </div>

          <div className={layout.contentBody}>
            {isPending && <div className={s.loadingState}>불러오는 중...</div>}
            {isError && <div className={s.errorState}>정보를 불러오지 못했습니다.</div>}
            {data && <ProfileContent data={data} />}
          </div>
        </main>
      </div>
    </div>
  );
}

/* ── 이하 MyPage 전용 sub-components ── */

function ProfileContent({ data }: { data: MyInfoResponseDto }) {
  const avatarChar = data.name?.[0] ?? "?";

  return (
    <>
      <div className={s.profileCard}>
        <div className={s.profileAvatar}>{avatarChar}</div>
        <div className={s.profileInfo}>
          <h2 className={s.profileName}>{data.name ?? "—"}</h2>
          <p className={s.profileMeta}>
            {data.roleName ?? "—"} · {data.deptName ?? "—"}
          </p>
        </div>
        <div className={data.isActive ? s.badgeActive : s.badgeInactive}>
          {data.isActive ? "활성" : "비활성"}
        </div>
      </div>

      <div className={s.infoGrid}>
        <div className={s.infoSection}>
          <p className={s.sectionTitle}>기본 정보</p>
          <div className={s.infoRows}>
            <InfoRow label="이름" value={data.name} />
            <InfoRow label="아이디" value={data.loginId} />
            <InfoRow label="이메일" value={data.email} />
            <InfoRow label="연락처" value={data.phone} />
            <InfoRow label="생년월일" value={formatDate(data.birth)} />
            <InfoRow label="성별" value={formatGender(data.gender)} />
          </div>
        </div>

        <div className={s.infoSection}>
          <p className={s.sectionTitle}>조직 정보</p>
          <div className={s.infoRows}>
            <InfoRow label="부서" value={data.deptName} />
            <InfoRow label="직책" value={data.roleName} />
            <InfoRow label="입사일" value={formatDate(data.joinedAt)} />
            <InfoRow label="계정 생성일" value={formatDate(data.createdAt)} />
          </div>
        </div>
      </div>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className={s.infoRow}>
      <span className={s.infoLabel}>{label}</span>
      <span className={s.infoValue}>{value ?? "—"}</span>
    </div>
  );
}
