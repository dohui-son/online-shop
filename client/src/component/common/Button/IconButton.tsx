import styled from "@emotion/styled";
import { Icon as TablerIcon } from "@tabler/icons-react";

interface IconButton {
  onClick: () => void;
  children: React.ReactNode;
}

export function IconButton({ onClick, children }: IconButton) {
  return (
    <ActionButton type="button" onClick={onClick}>
      {children}
    </ActionButton>
  );
}

export const AuthItem = styled.span`
  display: flex;
  align-items: center;
  padding: 10px 0px 10px 20px;
  border-left: 1px solid #e3e3e3;
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

export const ActionButton = styled.button`
  appearance: none;
  outline: none;
  background: none;
  border: none;
`;
