"use client";
import { Header, PopoverItem } from "./Header";
import { Footer } from "./Footer";
import Image from "next/image";
import Logo from "../../../public/asset/logo/logo.png";

import { useRouter } from "next/navigation";

import { useEffect, useMemo, useState } from "react";
import { NavBar } from "./NavBar";
import { ICON_ITEMS, NAV_ITEMS } from "@/lib/constant/layout";
import { PopoverMenu } from "./PopoverMenu";
import { IconList, IconSearch } from "@tabler/icons-react";

import { ConfirmModal } from "../common/Modal/ConfirmModal";
import { usePathname } from "next/navigation";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState<boolean>(false); //react-hydration-err: https://nextjs.org/docs/messages/react-hydration-error
  const signedIn = false; //TODO: need sign In with server
  const [menuOpened, setMenuOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false); //Question
  const [showSinginModal, setShowSinginModal] = useState<boolean>(false); //Question

  const isHome = useMemo(() => {
    return pathname === "/" || pathname?.includes("home");
  }, [pathname]);

  // const iconItems = useMemo(
  //   () => [
  //     { icon: IconSearch, onClick: () => setShowSearch(true) },
  //     ...(!signedIn
  //       ? ICON_ITEMS.map((item) => ({
  //           icon: item.icon,
  //           onClick: () =>
  //             item.needSignIn
  //               ? setShowSinginModal(true)
  //               : router.push(item?.href as string),
  //         }))
  //       : ICON_ITEMS.map((item) => ({
  //           icon: item.icon,
  //           onClick: () => router.push(item?.href as string),
  //         }))),
  //   ],
  //   [signedIn]
  // );

  useEffect(() => {
    //react-hydration-err: https://nextjs.org/docs/messages/react-hydration-error
    setIsClient(true);
  }, []);

  if (!isClient) {
    // TODO: Error: Hydration failed 고치고 isClient 제거
    return <></>;
  }

  return (
    <>
      <Header
        leftComponent={
          <>
            <Image
              src={Logo.src}
              width={120}
              height={70}
              alt="logo"
              onClick={() => router.push("/")}
              style={{ cursor: "pointer" }}
            />
            {isHome && (
              <>
                <NavBar navItems={NAV_ITEMS} />
                <PopoverMenu
                  target={
                    <PopoverItem onClick={() => setMenuOpen((prev) => !prev)}>
                      <IconList />
                      카테고리
                    </PopoverItem>
                  }
                  open={menuOpened}
                />
              </>
            )}
          </>
        }
        rightComponent={<></>}
        // rightIconItems={iconItems}
      />
      {showSearch ? (
        <>Search Page</>
      ) : (
        <>
          <ConfirmModal
            opened={showSinginModal}
            onCloseModal={() => setShowSinginModal(false)}
            overlayed
            onConfirm={() => router.push("/auth")}
            onCancel={() => setShowSinginModal(false)}
          >
            로그인이 필요한 메뉴입니다.
            <br />
            로그인 하시겠습니까?
          </ConfirmModal>
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
