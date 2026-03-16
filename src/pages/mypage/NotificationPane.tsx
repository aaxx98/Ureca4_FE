import { useQueryClient } from "@tanstack/react-query";
import {
  useGetNotificationSettingsQuery,
  useMutationPatchNotificationSettingQuery,
} from "../../shared/api/generated/notification/notification";
import { getNotificationSettingsKey } from "../../shared/api/generated/notification/notification.keys";
import * as s from "./MyPage.css";

const NOTIFICATION_ITEMS = [
  {
    field: "notice",
    label: "공지사항 알림",
    emoji: "📢",
    description: "새 공지 등록 시 알림 수신 (notify_notice)",
    key: "notifyNotice" as const,
  },
  {
    field: "best_practice",
    label: "우수 사례 등록 알림",
    emoji: "⭐",
    description: "우수사례 등록 시 알림 수신 (notify_best_practice)",
    key: "notifyBestPractice" as const,
  },
  {
    field: "policy_change",
    label: "운영정책 변경 알림",
    emoji: "🗒️",
    description: "운영정책 업데이트 시 알림 수신 (notify_policy_change)",
    key: "notifyPolicyChange" as const,
  },
] as const;

export function NotificationPane() {
  const queryClient = useQueryClient();
  const { data, isPending, isError } = useGetNotificationSettingsQuery();
  const { mutate, isPending: isToggling } = useMutationPatchNotificationSettingQuery({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getNotificationSettingsKey() });
      },
    },
  });

  const settings = data?.data;

  return (
    <div className={s.pane}>
      {isError && <div className={s.feedbackErr}>설정을 불러오지 못했습니다.</div>}
      <div className={s.notificationCard}>
        <div className={s.notificationCardHeader}>
          <h2 className={s.notificationCardTitle}>알림 설정</h2>
        </div>
        {isPending ? (
          <p className={s.stateText}>불러오는 중...</p>
        ) : (
          NOTIFICATION_ITEMS.map((item, index) => (
            <div
              key={item.field}
              className={`${s.notificationRow} ${index < NOTIFICATION_ITEMS.length - 1 ? s.notificationRowBorder : ""}`}
            >
              <div className={s.notificationInfo}>
                <div className={s.notificationLabel}>
                  {item.emoji} {item.label}
                </div>
                <div className={s.notificationDescription}>{item.description}</div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={!!settings?.[item.key]}
                disabled={isToggling || isError}
                className={`${s.toggle} ${settings?.[item.key] ? s.toggleOn : s.toggleOff}`}
                onClick={() => mutate({ field: item.field })}
              >
                <span className={s.toggleThumb} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
