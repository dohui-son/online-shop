import { useAuthModalStore } from "@/lib/store/authModal";
import { useRouter } from "next/router";
import { ConfirmModal } from "./ConfirmModal";

interface Props {
  onSignInClick: () => void;
}

export function AuthModal({ onSignInClick }: Props) {
  const { isSignInModalOpen, closeModal } = useAuthModalStore();
  return (
    <ConfirmModal
      opened={isSignInModalOpen}
      onCloseModal={closeModal}
      overlayed
      onConfirm={onSignInClick}
      onCancel={closeModal}
    >
      로그인이 필요한 메뉴입니다.
      <br />
      로그인 하시겠습니까?
    </ConfirmModal>
  );
}
