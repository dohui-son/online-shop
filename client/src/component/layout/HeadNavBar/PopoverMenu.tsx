import styled from "@emotion/styled";
import { HEAD_NAVBAR_HEIGHT } from "./NavBar";
import { useEffect, useRef } from "react";
interface Props {
  target: React.ReactNode;
  opened: boolean;
  onClose: () => void;
}

export function PopoverMenu({ target, opened, onClose }: Props) {
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
    <div ref={modalRef}>
      {target}
      {opened && <Content />}
    </div>
  );
}

const Content = styled.div`
  position: absolute;
  top: ${HEAD_NAVBAR_HEIGHT - 7}px;
  width: 889px;
  padding: 20px 4px 30px;
  border: 1px solid var(--color-grey-light);
  border-radius: 4px;
  background-color: #fff;
  white-space: nowrap;
  box-sizing: border-box;
  z-index: 90;
`;

export const PopoverItem = styled.span`
  padding-left: 20px;
  border-left: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  color: #4684e9;
  cursor: pointer;
`;
