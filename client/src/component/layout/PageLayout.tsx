"use client";
import { Footer } from "./Footer";

import { useRouter } from "next/navigation";

import { PropsWithChildren, useMemo, useState } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { HeadNavContainer } from "./HeadNavBar/HeadNavContainer";
const ClientConfirmModal = dynamic(
  () => import("../common/Modal/ConfirmModal").then((mod) => mod.ConfirmModal),
  {
    loading: () => <></>,
    ssr: false,
  }
);
interface Props {
  isSignInModalOpen: boolean;
  closeSignInModal: () => void;
  userExists: boolean;
}

export function PageLayout({
  isSignInModalOpen,
  closeSignInModal,
  userExists,
  children,
}: PropsWithChildren<Props>) {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpened, setMenuOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false); //Question

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

  return (
    <>
      <HeadNavContainer isHome={isHome} />
      {/* <Header
        leftComponent={
          <>
            {isHome && (
              <>
                <NavBar navItems={NAV_ITEMS} />
              </>
            )}
          </>
        }
      /> */}
      {showSearch ? (
        <>Search Page</>
      ) : (
        <>
          <ClientConfirmModal
            opened={isSignInModalOpen}
            onCloseModal={closeSignInModal}
            overlayed
            onConfirm={() => router.push("/auth")}
            onCancel={closeSignInModal}
          >
            로그인이 필요한 메뉴입니다.
            <br />
            로그인 하시겠습니까?
          </ClientConfirmModal>
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
