import { LogoButton } from "@/component/common/Button/LogoButton";
import useUserStore from "@/lib/store/user";
import styled from "@emotion/styled";
import { Icon as TablerIcon } from "@tabler/icons-react";
import { useMemo } from "react";
import { SimpleNavBar } from "./SimpleNavBar";
import { AuthItem, TotalNavBar } from "./TotalNavBar";
export interface IconHeadItem {
  icon: TablerIcon;
  onClick: () => void;
  href?: string;
  needSignIn?: boolean;
}

interface Props {
  isHome: boolean;
}

export function HeadNavContainer({ isHome }: Props) {
  const { userExists } = useUserStore();
  const authItems = useMemo(
    () =>
      userExists ? <AuthItem>TODO</AuthItem> : <AuthItem>로그인</AuthItem>,
    [userExists]
  );

  if (isHome) {
    return (
      <TotalNavBar
        leftComponent={<LogoButton />}
        rightComponent={<>{authItems}</>}
      />
    );
  }
  return (
    <SimpleNavBar
      leftComponent={<LogoButton width={100} height={50} />}
      rightComponent={<>{authItems}</>}
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
