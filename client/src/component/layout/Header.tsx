import styled from "@emotion/styled";

import { Icon as TablerIcon } from "@tabler/icons-react";

export interface IconHeadItem {
  icon: TablerIcon;
  onClick: () => void;
  href: string;
}

export interface HeaderProps {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode; // IconHeadItem[];
}

export function Header({ leftComponent, rightComponent }: HeaderProps) {
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

const HeadItem = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;
