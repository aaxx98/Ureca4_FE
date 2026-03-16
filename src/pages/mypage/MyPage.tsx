import { useEffect, useRef, useState } from "react";
import { useGetMyInfoQuery } from "../../shared/api/generated/auth/auth";
import { ContextNavItem } from "../../shared/ui/ContextNavItem";
import { LockIcon, NoticeIcon, UserIcon } from "../../shared/ui/icons";
import * as layout from "../../shared/ui/pageLayout.css";
import { AppSidebar } from "../../widgets/AppSidebar/AppSidebar";
import { InfoPane } from "./InfoPane";
import * as s from "./MyPage.css";
import { NotificationPane } from "./NotificationPane";
import { PasswordPane } from "./PasswordPane";

type Section = "info" | "password" | "notification";

const SECTION_LABELS: Record<Section, string> = {
  info: "내 정보",
  password: "비밀번호 변경",
  notification: "알림 수신 설정",
};

const SECTIONS: Section[] = ["info", "password", "notification"];

export function MyPage() {
  const [activeSection, setActiveSection] = useState<Section>("info");
  const { data, isPending, isError } = useGetMyInfoQuery();

  const scrollRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLElement>(null);
  const passwordRef = useRef<HTMLElement>(null);
  const notificationRef = useRef<HTMLElement>(null);
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sectionRefMap: Record<Section, React.RefObject<HTMLElement | null>> = {
    info: infoRef,
    password: passwordRef,
    notification: notificationRef,
  };

  function scrollToSection(section: Section) {
    setActiveSection(section);
    isProgrammaticScroll.current = true;
    if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
    sectionRefMap[section].current?.scrollIntoView({ behavior: "smooth", block: "start" });
    programmaticScrollTimer.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 900);
  }

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    function handleScroll() {
      if (isProgrammaticScroll.current) return;
      const containerTop = scrollEl?.getBoundingClientRect().top ?? 0;
      const refs = [infoRef.current, passwordRef.current, notificationRef.current];
      let active: Section = SECTIONS[0];
      SECTIONS.forEach((id, i) => {
        const el = refs[i];
        if (!el) return;
        if (el.getBoundingClientRect().top - containerTop <= 72) active = id;
      });
      setActiveSection(active);
    }

    scrollEl.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
      if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppSidebar label="마이페이지">
        <ContextNavItem
          icon={<UserIcon />}
          label="내 정보"
          onClick={() => scrollToSection("info")}
          isActive={activeSection === "info"}
        />
        <ContextNavItem
          icon={<LockIcon />}
          label="비밀번호 변경"
          onClick={() => scrollToSection("password")}
          isActive={activeSection === "password"}
        />
        <ContextNavItem
          icon={<NoticeIcon />}
          label="알림 수신 설정"
          onClick={() => scrollToSection("notification")}
          isActive={activeSection === "notification"}
        />
      </AppSidebar>

      <main className={layout.main}>
        <div className={s.body} ref={scrollRef}>
            <div className={s.stickyHeader}>
              <h1 className={s.title}>{SECTION_LABELS[activeSection]}</h1>
            </div>

            <div className={s.scrollContent}>
              <section ref={infoRef} className={s.section}>
                {isPending && <p className={s.stateText}>불러오는 중...</p>}
                {isError && <p className={s.stateError}>정보를 불러오지 못했습니다.</p>}
                {data && <InfoPane data={data} />}
              </section>

              <section ref={passwordRef} className={s.section}>
                <PasswordPane />
              </section>

              <section ref={notificationRef} className={s.section}>
                <NotificationPane />
              </section>
            </div>
          </div>
        </main>
    </>
  );
}
