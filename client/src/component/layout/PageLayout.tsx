"use client";
import { Footer } from "./Footer";

import { useMemo } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import styled from "@emotion/styled";
import { HEAD_NAVBAR_HEIGHT } from "./HeadNavBar/NavBar";

const ClientHeadNavContainer = dynamic(
  () =>
    import("./HeadNavBar/HomeNavContainer").then((mod) => mod.HeadNavContainer),
  {
    loading: () => <></>,
    ssr: false,
  }
);

export function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isHome = useMemo(() => {
    return pathname === "/" || pathname?.includes("home");
  }, [pathname]);

  return (
    <>
      <ClientHeadNavContainer isHome={isHome} />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  margin-top: ${HEAD_NAVBAR_HEIGHT}px;
`;
