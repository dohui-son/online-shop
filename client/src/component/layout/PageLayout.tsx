"use client";
import { Footer } from "./Footer";

import { PropsWithChildren, useMemo, useState } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const ClientHeadNavContainer = dynamic(
  () =>
    import("./HeadNavBar/HomeNavContainer").then((mod) => mod.HeadNavContainer),
  {
    loading: () => <></>,
    ssr: false,
  }
);
// const ClientConfirmModal = dynamic(
//   () => import("../common/Modal/ConfirmModal").then((mod) => mod.ConfirmModal),
//   {
//     loading: () => <></>,
//     ssr: false,
//   }
// );
interface Props {}

export function PageLayout({ children }: PropsWithChildren<Props>) {
  const pathname = usePathname();
  const [menuOpened, setMenuOpen] = useState<boolean>(false);

  const isHome = useMemo(() => {
    return pathname === "/" || pathname?.includes("home");
  }, [pathname]);

  return (
    <>
      <ClientHeadNavContainer isHome={isHome} />
      {children}
      <Footer />
    </>
  );
}
