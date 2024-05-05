import { Content, ImageReview } from "@/lib/type/product/imageReview";
import styled from "@emotion/styled";
import { H4 } from "@/component/common/Typo";
import { Badge } from "@/component/common/Badge";

export function ProductImgReviewContainer({
  imgReview,
}: {
  imgReview: ImageReview | undefined;
}) {
  if (!imgReview) return <></>;
  return (
    <ReviewWrapper>
      <H4>사진 리뷰 {imgReview.data.totalCount}</H4>
      <H4>상품 리뷰</H4>
      {imgReview.data.contents.map((c, index) => (
        <ReviewCard key={index} content={c} />
      ))}
    </ReviewWrapper>
  );
}

function ReviewCard({ content }: { content: Content }) {
  return (
    <CardWrapper>
      <ProfileThumb imgUrl={content.writer.imageUrl} />
      <ImgReviewWrapper>
        {content.imageViews.map((img, index) => (
          <ReviewThumb key={index} imgUrl={img.originUrl} />
        ))}
      </ImgReviewWrapper>
      <TypoContentsWrapper>
        {" "}
        <BadgeContainer>옵션</BadgeContainer> {content.optionText}
      </TypoContentsWrapper>
      <TypoContentsWrapper>
        <BadgeContainer>배송</BadgeContainer>
        {content.ratingView.deliveryStarRatingName}
      </TypoContentsWrapper>
      <TypoContentsWrapper>{content.content}</TypoContentsWrapper>
    </CardWrapper>
  );
}

const ReviewWrapper = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 20px;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 20px;
  border-bottom: 1px solid #e7e8eb;
  padding: 20px 0 20px 0;
`;

const ImgReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
const TypoContentsWrapper = styled(ImgReviewWrapper)`
  gap: 10px;
`;

const ProfileThumb = styled.img<{ imgUrl: string }>`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ReviewThumb = styled.img<{ imgUrl: string }>`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center center;
  width: 145px;
  height: 145px;
`;

const BadgeContainer = styled(Badge)`
  width: 30px;
  height: 15px;
  padding: 1px 3px;
  background-color: grey;
  color: #fff;
  font-size: 10px;
  text-align: center;
  border-radius: 30px;
`;
