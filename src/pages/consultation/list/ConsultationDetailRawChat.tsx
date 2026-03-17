import * as s from "./ConsultationDetailModal.css";

interface ChatMessage {
  speaker: string; // "customer" | "counselor" | "고객" | "상담사" | system events
  time?: string;
  text: string;
}

function parseChatJson(rawTextJson: string): ChatMessage[] | null {
  try {
    const parsed = JSON.parse(rawTextJson);
    if (Array.isArray(parsed)) return parsed as ChatMessage[];
    return null;
  } catch {
    return null;
  }
}

function getSpeakerType(speaker: string): "customer" | "counselor" | "unknown" {
  const s = speaker.toLowerCase();
  if (s === "customer" || s === "고객") return "customer";
  if (s === "counselor" || s === "상담사") return "counselor";
  return "unknown";
}

interface Props {
  rawTextJson?: string;
}

export function ConsultationDetailRawChat({ rawTextJson }: Props) {
  if (!rawTextJson) {
    return <p className={s.stateText}>원문 대화 데이터가 없습니다.</p>;
  }

  const messages = parseChatJson(rawTextJson);

  if (!messages) {
    return (
      <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
        {rawTextJson}
      </pre>
    );
  }

  return (
    <div className={s.chatWrapper}>
      {messages.map((msg, i) => {
        const type = getSpeakerType(msg.speaker);

        if (type === "unknown") {
          return (
            <span key={i} className={s.chatSystemMsg}>
              {msg.time && `${msg.time} · `}{msg.text}
            </span>
          );
        }

        const isCounselor = type === "counselor";
        const label       = isCounselor ? "상담사" : "고객";
        const initial     = isCounselor ? "상" : "고";

        return (
          <div key={i} className={isCounselor ? s.chatRowRight : s.chatRow}>
            <div className={isCounselor ? s.chatAvatarCounselor : s.chatAvatar}>
              {initial}
            </div>
            <div className={s.chatBubbleWrap}>
              <span className={isCounselor ? s.chatMetaRight : s.chatMeta}>
                {label}{msg.time && ` · ${msg.time}`}
              </span>
              <div className={isCounselor ? s.chatBubbleCounselor : s.chatBubble}>
                {msg.text}
              </div>
            </div>
          </div>
        );
      })}

      <p className={s.chatNotice}>
        💡 원문 대화는 상담 종료 시점의 녹취/채팅 로그를 기반으로 저장됩니다. 개인정보는 마스킹 처리될 수 있습니다.
      </p>
    </div>
  );
}
