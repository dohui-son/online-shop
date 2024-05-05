import { Product } from "@/lib/type/product";
import { parseStringToDate } from "@/lib/util/date";
import styled from "@emotion/styled";
import { IconAlertCircle, IconStarFilled } from "@tabler/icons-react";
import { useState } from "react";
import * as _ from "lodash";

interface Props {
  initThumb: string;
  thumbList: string[];
  product: Product;
}

export function ProductSummarySection({
  initThumb,
  thumbList,
  product,
}: Props) {
  const [curThumb, setCurThumb] = useState(() => initThumb);
  return (
    <MainContainer>
      <MainInfoContainer>
        <ThumbContainer>
          <Thumb src={curThumb} />
          <ThumbButtonContainer>
            {thumbList.map((src) => (
              <ThumbButton
                onClick={() => setCurThumb(src)}
                imgSrc={src}
                clicked={curThumb === src}
                key={src}
              />
            ))}
          </ThumbButtonContainer>
        </ThumbContainer>
        <InfoWrapper>
          <RateWrapper>
            {_.times(product.review.averageRating, () => (
              <IconStarFilled size={20} />
            ))}
            <ReviewButton>리뷰 {product.review.reviewCount}건</ReviewButton>
          </RateWrapper>
          <Title>{product.name}</Title>
          <Price>{product.price.discountedPrice.toLocaleString()}원</Price>
          {(parseStringToDate(product.talkDeal.period.to) as Date) <
            new Date() && (
            <TalkDealFinishContainer>
              <IconAlertCircle size={20} stroke={"grey"} />
              톡딜 할인이 종료되어 정상가로 주문 가능합니다. 상품을 찜 해두면
              톡딜 재오픈 시 알려드려요.
            </TalkDealFinishContainer>
          )}
        </InfoWrapper>
      </MainInfoContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 900px;
  height: 600px;
  margin: 30px 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MainInfoContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  gap: 20px;
`;

const ThumbContainer = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const Thumb = styled.img`
  width: 430px;
  height: 430px;
  background-color: #e7e8eb;
  border-radius: 3px;
  border: none;
`;
const ThumbButtonContainer = styled.div`
  width: 350px;
  height: 56px;
  display: flex;
  justify-content: space-around;
`;

const ThumbButton = styled.button<{ clicked: boolean; imgSrc: string }>`
  height: 56px;
  width: 56px;
  background-image: url(${(props) => props.imgSrc});
  background-size: 100%;
  background-repeat: no-repeat;
  border: ${(props) => (props.clicked ? "1px solid #000" : "none")};
  border-radius: 3px;
  cursor: pointer;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.strong`
  font-size: 24px;
  line-height: 35px;
  color: #111;
  word-break: break-all;
  font-weight: 400;
`;

const Price = styled.strong`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  color: #333;
`;

const RateWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
`;

const ReviewButton = styled.button`
  border: none;
  text-decoration: underline;
  color: #4684e9;
  background-color: transparent;
  font-size: 16px;
  margin-left: 10px;
  height: 100%;
  line-height: normal;
  cursor: pointer;
`;

const TalkDealFinishContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  background-color: #fff;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  background-color: #fafafa;
  gap: 10px;
`;
