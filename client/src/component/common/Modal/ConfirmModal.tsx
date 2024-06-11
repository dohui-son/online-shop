"use client";
import styled from "@emotion/styled";
import { PropsWithChildren, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
interface Props {
  opened: boolean;
  overlayed?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  onCloseModal: () => void;
}

export function ConfirmModal({
  opened,
  overlayed = false,
  onConfirm,
  onCancel,
  confirmText = "확인",
  cancelText = "취소",
  children,
  onCloseModal,
}: PropsWithChildren<Props>) {
  const onCancelClose = useCallback(async () => {
    if (onCancel) {
      await onCancel();
    }
    onCloseModal();
  }, [onCancel, onCloseModal]);

  const onConfirmClose = useCallback(async () => {
    if (!onConfirm) {
      return;
    }
    await onConfirm();
    onCloseModal();
  }, [onConfirm, onCloseModal]);

  // // Docs: 모달이 열리면 body의 스크롤을 막는다.
  useEffect(() => {
    if (!opened) {
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [opened]);

  return ReactDOM.createPortal(
    <div>
      {opened && (
        <Overlay overlayed={overlayed}>
          <ModalContainer>
            <InnerComponent>{children}</InnerComponent>
            <ButtonWrapper>
              <Button onClick={onCancelClose}>{cancelText}</Button>
              {onConfirm && (
                <Button onClick={onConfirmClose}>{confirmText}</Button>
              )}
            </ButtonWrapper>
          </ModalContainer>
        </Overlay>
      )}
    </div>,
    (document?.getElementById("confirm-modal-portal") as HTMLElement) || null
  );
}

export const Overlay = styled.div<{ overlayed: boolean }>`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${({ overlayed }) =>
    overlayed ? "rgba(0, 0, 0, 0.4);" : "transparent"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: auto;
  height: auto;
  min-width: 300px;
  min-height: 154px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerComponent = styled.div`
  width: 100%;
  padding: 40px 30px 40px 20px;
  line-height: 20px;
  color: #666;
  letter-spacing: -1px;
  font-size: 14px;
  background-color: #fff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 50px;
  border: 1px solid #e5e5e5;
  font-weight: 500;
  font-size: 16px;
  line-height: 50px;
  color: #333;
  text-align: center;
  background-color: #fff;
`;
