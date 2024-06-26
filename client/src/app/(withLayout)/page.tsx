"use client";
import { DefaultWrapper } from "@/component/Wrapper";

import { Carousel } from "@/component/common/Carousel";
import { SLIDE } from "@/lib/constant/carousel";
import { DEAL_TITLE, SHORTCUT_ITEMS } from "@/lib/constant/shortCutMenu";

import { Nav } from "@/component/main/CategoryNav";
import { MainCard } from "@/component/main/MainCard";
import { MainContainer } from "@/component/main/MainContainer";
import { Grid } from "@/component/main/MainGridWrapper";
import { ShortcutMenu } from "@/component/main/ShortcutMenu";
import { SideAdCard } from "@/component/main/SideAdCard";
import { SideContainer } from "@/component/main/SideContainer";
import { TotalDealContainer } from "@/component/main/TotalDealContainer";
import { TODAY_CATEGORIES, TOTAL_CATEGORIES } from "@/lib/constant/category";
import { MOCK_PRODUCT_INFO } from "@/lib/constant/server";
import { RouteKey } from "@/lib/type/route";
import styled from "@emotion/styled";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Main() {
  const { talk_deal, category } = useParams();
  const talkDealParam = (talk_deal as RouteKey) ?? RouteKey.TODAY;

  return (
    <>
      <Carousel slides={SLIDE} />
      <DefaultWrapper direction="column">
        <ShortcutMenu items={SHORTCUT_ITEMS} />
        {talk_deal === RouteKey.TOTAL ? (
          <TotalDealContainer title={DEAL_TITLE[talkDealParam]}>
            <Nav items={TOTAL_CATEGORIES} curItem={category as string} />
            토탈딜 네이게이션
          </TotalDealContainer>
        ) : (
          <RowWrapper>
            <MainContainer title={DEAL_TITLE[talkDealParam]}>
              <Nav items={TODAY_CATEGORIES} curItem={category as string} />
              <Grid>
                {MOCK_PRODUCT_INFO.map((item) => (
                  <Link
                    key={item.title + "MainCards"}
                    href={"/store/products/88006799"}
                    shallow
                  >
                    <MainCard key={item.title} {...item} />
                  </Link>
                ))}
              </Grid>
            </MainContainer>
            <SideAdSection />
          </RowWrapper>
        )}
      </DefaultWrapper>
    </>
  );
}

//TODO: add props for SideAdSection
function SideAdSection() {
  return (
    <SideContainer>
      오른쪽 광고 그리드
      <SideAdCard
        href="#"
        img="https://via.placeholder.com/300x300"
        title="충청도 재래식 포기 김치 10kg"
        desc="새해맞이 식품 베스트"
        price="할인가 29,900원 ~"
        backgroundColor="rgb(137, 43, 3)"
      />
    </SideContainer>
  );
}

const RowWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
