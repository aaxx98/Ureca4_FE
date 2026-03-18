import { useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import type { NotificationResponse } from "../../shared/api/generated/api.schemas";
import {
  useGetNotificationsQuery, useGetUnreadCountQuery,
  useMutationPatchNotificationReadQuery, useMutationPatchNotificationsReadAllQuery,
} from "../../shared/api/generated/notification";
import { getNotificationsKey, getUnreadCountKey } from "../../shared/api/generated/notification/notification.keys";
import { ROUTES } from "../../shared/config/routes";
import { NOTIFICATION_TYPE_META as TYPE_META } from "../../shared/config/notificationMeta";
import { ContextNavItem } from "../../shared/ui/ContextNavItem";
import { HomeIcon, NoticeIcon, CalendarIcon } from "../../shared/ui/icons";
import * as layout from "../../shared/ui/pageLayout.css";
import { AppSidebar } from "../../widgets/AppSidebar/AppSidebar";
import { Button } from "../../shared/ui/Button/Button";
import * as s from "./NotificationPage.css";

function formatTime(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleString("ko-KR", { month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function NotificationItem({ item, onRead }: { item: NotificationResponse; onRead: (id: number) => void }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigate = useNavigate() as any;
  const meta = item.notificationType ? TYPE_META[item.notificationType] : TYPE_META.NOTICE;

  function handleClick() {
    if (!item.isRead && item.notificationId) onRead(item.notificationId);
    navigate({ to: meta.route, search: item.refId ? { id: item.refId } : {} });
  }

  return (
    <div className={item.isRead ? s.itemRead : s.itemUnread}
      onClick={handleClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}>
      <div className={s.typeIcon} style={{ backgroundColor: meta.bg }}>{meta.icon}</div>
      <div className={s.itemBody}>
        <div className={s.itemRow}>
          <span className={s.typeBadge} style={{ backgroundColor: meta.bg, color: meta.color }}>{meta.label}</span>
          <p className={item.isRead ? s.itemMessage : `${s.itemMessage} ${s.itemMessageUnread}`}>{item.message}</p>
          <span className={s.itemTime}>{formatTime(item.createdAt)}</span>
        </div>
      </div>
      {!item.isRead && <div className={s.unreadDot} />}
    </div>
  );
}

export function NotificationPage() {
  const queryClient     = useQueryClient();
  const { data, isPending, isError } = useGetNotificationsQuery({ page: 0, size: 20 }, { query: { staleTime: 0, refetchOnMount: "always" } });
  const { data: unreadData }         = useGetUnreadCountQuery({ query: { staleTime: 0, refetchOnMount: "always" } });
  const readMutation    = useMutationPatchNotificationReadQuery();
  const readAllMutation = useMutationPatchNotificationsReadAllQuery();

  const items       = data?.data?.content ?? [];
  const unreadCount = unreadData?.data ?? 0;

  function invalidate() {
    queryClient.invalidateQueries({ queryKey: getNotificationsKey() });
    queryClient.invalidateQueries({ queryKey: getUnreadCountKey() });
  }
  function handleRead(notificationId: number) {
    queryClient.setQueryData(
      getNotificationsKey({ page: 0, size: 20 }),
      (old: typeof data) => old ? {
        ...old,
        data: old.data ? {
          ...old.data,
          content: old.data.content?.map((n) =>
            n.notificationId === notificationId ? { ...n, isRead: true } : n
          ),
        } : old.data,
      } : old
    );
    queryClient.setQueryData(
      getUnreadCountKey(),
      (old: typeof unreadData) => old ? { ...old, data: Math.max(0, (old.data ?? 0) - 1) } : old
    );
    readMutation.mutate({ notificationId }, { onSuccess: invalidate });
  }
  function handleReadAll() { readAllMutation.mutate(undefined, { onSuccess: invalidate }); }

  return (
    <>
      <AppSidebar label="홈">
        <ContextNavItem to={ROUTES.HOME}          icon={<HomeIcon />}   label="개요" />
        <ContextNavItem to={ROUTES.NOTIFICATIONS} icon={<NoticeIcon />} label="알림" isActive badge={unreadCount > 0 ? unreadCount : undefined} />
        <ContextNavItem icon={<CalendarIcon />} label="내 일정" />
      </AppSidebar>

      <main className={layout.main}>
        <div className={s.pageHeader}>
          <div className={s.pageHeaderRow}>
            <div>
              <div className={s.headerBadge}>🔔 NOTIFICATIONS</div>
              <h1 className={s.headerTitle}>알림</h1>
              <p className={s.headerSubtitle}>새로운 알림을 확인하고, 중요한 소식을 놓치지 마세요!</p>
            </div>
            {unreadCount > 0 && (
              <Button variant="secondary" type="button" onClick={handleReadAll} disabled={readAllMutation.isPending}>모두 읽음</Button>
            )}
          </div>
          {unreadCount > 0 && <div className={s.unreadChip}>🔴 읽지 않은 알림 {unreadCount}개</div>}
        </div>

        <div className={s.content}>
          {isPending && <p className={s.stateText}>불러오는 중...</p>}
          {isError   && <p className={s.stateText}>알림을 불러오지 못했습니다.</p>}
          {!isPending && !isError && items.length === 0 && <p className={s.stateText}>새로운 알림이 없습니다.</p>}
          {items.length > 0 && (
            <div className={s.list}>
              {items.map((item) => (
                <NotificationItem key={item.notificationId} item={item} onRead={handleRead} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
