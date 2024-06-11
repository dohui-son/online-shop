"use client";
import { LogoButton } from "@/component/common/Button/LogoButton";
import { PRIVATE_MENU_ITEMS } from "@/lib/constant/layout";
import { useAuthModalStore } from "@/lib/store/authModal";
import { useUserStore } from "@/lib/store/user";
import styled from "@emotion/styled";
import { Icon as TablerIcon } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { CategoryMenuItem } from "./item/CategoryMenuItem";
import { SearchModalButton } from "./SearchModalButton";
import { AuthItem, NavBar } from "./NavBar";
import { HomeNavItemContainer } from "./item/MainNavItemContainer";
const ClientAuthModal = dynamic(
  () => import("../../common/Modal/AuthModal").then((mod) => mod.AuthModal),
  {
    loading: () => <></>,
    ssr: false,
  }
);
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
  const { openModal } = useAuthModalStore();
  const router = useRouter();

  const rightNavItems = useMemo(
    () => (
      <>
        <SearchModalButton />
        {PRIVATE_MENU_ITEMS.map(({ icon: Icon, href }) => (
          <Icon
            key={href}
            size={20}
            color="gray"
            onClick={() => (userExists ? router.push(href) : openModal())}
          />
        ))}
        <Link href="/login">
          {/* TODO: change button 로그아웃 조건부 렌더링 */}
          <AuthItem>로그인</AuthItem>
        </Link>
      </>
    ),
    [userExists, openModal]
  );

  return (
    <>
      <NavBar
        leftComponent={
          <>
            <LogoButton />
            {isHome && (
              <>
                <HomeNavItemContainer />
                <CategoryMenuItem />
              </>
            )}
          </>
        }
        rightComponent={<>{rightNavItems}</>}
      />
      <ClientAuthModal onSignInClick={() => router.push("/signIn")} />
    </>
  );
}

export const ActionButton = styled.button`
  appearance: none;
  outline: none;
  background: none;
  border: none;
`;
