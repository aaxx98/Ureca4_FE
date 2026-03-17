import { BaseModal } from "../../../shared/ui/BaseModal/BaseModal";
import { ConsultationDetailRawChat } from "../list/ConsultationDetailRawChat";

interface Props {
  rawTextJson?: string;
  onClose: () => void;
}

export function ConsultationResultChatModal({ rawTextJson, onClose }: Props) {
  return (
    <BaseModal title="원문 대화" onClose={onClose} size="lg">
      <ConsultationDetailRawChat rawTextJson={rawTextJson} />
    </BaseModal>
  );
}
