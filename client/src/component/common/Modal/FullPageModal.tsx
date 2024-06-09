"use client";
import styled from "@emotion/styled";
import { PropsWithChildren, useEffect, useRef } from "react";

interface Props {
  opened: boolean;
  onClose: () => void;
}

export function FullPageModal({
  opened,
  onClose,
  children,
}: PropsWithChildren<Props>) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose && onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div ref={modalRef}>{opened && <Container>{children}</Container>}</div>
  );
}

export const Container = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  position: fixed;
  top: 79px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 80;
  background-color: white;
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
