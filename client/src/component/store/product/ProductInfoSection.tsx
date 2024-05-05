import { Tab } from "@/component/common/Tab";
import { Product } from "@/lib/type/product";
import styled from "@emotion/styled";
import { useState } from "react";

import { ImageReview } from "@/lib/type/product/imageReview";
import { ProductImgReviewContainer } from "./ProductImgReviewContainer";

type ProductInfoMenu = "detail" | "review" | "inquiry";
const PRODUCT_INFO_MENU: { title: string; value: ProductInfoMenu }[] = [
  { title: "상세정보", value: "detail" },
  {
    title: "리뷰",
    value: "review",
  },
  {
    title: "문의",
    value: "inquiry",
  },
];

export function ProductInfoSection({
  product,
  imgReview,
}: {
  product: Product;
  imgReview: ImageReview | undefined;
}) {
  const [selectedTab, setSelectedTab] = useState<ProductInfoMenu>("detail");

  return (
    <>
      <TabWrapper>
        <Tab
          tabMenu={PRODUCT_INFO_MENU}
          selected={selectedTab}
          onClick={(s: ProductInfoMenu) => setSelectedTab(s)}
        />
      </TabWrapper>
      <ContentsContainer>
        {selectedTab === "detail" && (
          <DetailWrapper
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        )}
        {selectedTab === "review" && (
          <ProductImgReviewContainer imgReview={imgReview} />
        )}
        {selectedTab === "inquiry" && <div>inquiry</div>}
      </ContentsContainer>
    </>
  );
}

const ContentsContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;
const TabWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

// Question: how to fix width style?
export const DetailWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
