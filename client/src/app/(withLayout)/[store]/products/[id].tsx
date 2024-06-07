import { StoreNav } from "@/component/store/StoreNav";
import { OptionSelect } from "@/component/store/product/OptionSelect";
import { ProductInfoSection } from "@/component/store/product/ProductInfoSection";
import { ProductSummarySection } from "@/component/store/product/ProductSummarySection";
import { PurchaseSection } from "@/component/store/product/PurchaseSection";
import { useFetchProduct } from "@/lib/query/product";
import { useFetchProductOptions } from "@/lib/query/product/option";
import { Option } from "@/lib/type/product/option";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFetchProductImgReview } from "@/lib/query/product/imageReview";

export default function Index() {
  const router = useRouter();
  const [optionSelected, setOptionSelected] = useState("선택안함");

  const { data: product, isLoading } = useFetchProduct({
    id: router.query.id as string,
  });
  const { data: optionData, isLoading: optionLoading } = useFetchProductOptions(
    {
      id: router.query.id as string,
    }
  );
  const { data: imgReview } = useFetchProductImgReview({
    id: router.query.id as string,
  });

  if (isLoading || optionLoading || !product || !optionData) return <></>;
  return (
    <div>
      <StoreNav
        title={product.store.name}
        storeId="shinsegaefood"
        onClick={(routingData) =>
          router.push(routingData, undefined, { shallow: true })
        }
        currentPath={router.asPath}
      />
      <Container>
        {/* <DefaultWrapper> */}
        <LeftContainer>
          <ProductSummarySection
            product={product}
            initThumb={product.image.images[0]}
            thumbList={[...product.image.images]}
          />
          <ProductInfoSection product={product} imgReview={imgReview} />
        </LeftContainer>
        <PurchaseSection
          deliveryFee={
            product.delivery.deliveryFeeType === "FREE" ? "무료" : "3,000원"
          }
          deliveryType="택배배송"
          optionTitle="옵션선택"
          totalCount={0}
          onClickCart={() => alert("로그인이 필요한 메뉴입니다.")}
          onClickLike={() => alert("로그인이 필요한 메뉴입니다.")}
          onClickPurchase={
            () => router.push("/shopping-front/store/order/id") // TODO: fix with login logic
          }
        >
          <OptionSelect
            selected={optionSelected}
            onClick={() => alert("로그인이 필요한 메뉴입니다.")}
            options={optionData.data.options as Option[]}
            price={product.price.discountedPrice}
          />
        </PurchaseSection>
        {/* </DefaultWrapper> */}
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: auto;
  min-height: 500vh; //TODO: fix
  display: flex;
  justify-content: center;
  align-items: start;
  border: 1px solid #e7e8eb;
`;

const LeftContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  border-right: 1px solid #e7e8eb;
  padding-right: 30px;
`;
