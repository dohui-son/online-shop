import styled from "@emotion/styled";

import { Icon as TablerIcon } from "@tabler/icons-react";
import { AuthItem, HeadNavBar } from ".";

export interface IconHeadItem {
  icon: TablerIcon;
  onClick: () => void;
  href?: string;
  needSignIn?: boolean;
}

export interface HeaderProps {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode; // IconHeadItem[];
}

export function HeadNavContainer({}) {
  return (
    <HeadNavBar
      leftComponent={<></>}
      rightComponent={<AuthItem>로그인</AuthItem>}
    />
  );
}

const Head = styled.header`
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 79px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  background-color: white;
  padding: 0 16px;
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
