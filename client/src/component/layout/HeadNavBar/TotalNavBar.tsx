import styled from "@emotion/styled";

import { Icon as TablerIcon } from "@tabler/icons-react";

export interface HeaderProps {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}

export function TotalNavBar({ leftComponent, rightComponent }: HeaderProps) {
  return (
    <Head>
      <HeadItem>{leftComponent}</HeadItem>
      <HeadItem>
        {rightComponent}
        {/* {rightIconItems?.map(({ icon, onClick }, key) => {
          const Icon = icon;
          return (
            <ActionButton key={key} type="button" onClick={onClick}>
              <Icon width={28} height={28} color={"grey"} />
            </ActionButton>
          );
        })}
        <AuthItem>로그인</AuthItem> */}
      </HeadItem>
    </Head>
  );
}

const Head = styled.header`
  width: 100%;
  height: 79px;
  padding: 0 24px;

  position: fixed;
  top: 0;
  z-index: 100;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 14px;
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
`;

const HeadItem = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

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
