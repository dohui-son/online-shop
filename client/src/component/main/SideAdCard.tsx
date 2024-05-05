import styled from "@emotion/styled";

export function SideAdCard({
  img,
  href,
  title,
  desc,
  price,
  backgroundColor = "gray",
}: {
  img: string;
  href: string;
  title: string;
  desc: string;
  price: string;
  backgroundColor?: string;
}) {
  return (
    <MainContainer href={href}>
      <Img bgImg={img} />
      <TypoWrapper backgroundColor={backgroundColor}>
        <Desc>{desc}</Desc>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </TypoWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.a`
  width: 100%;
  height: auto;
  border: none;
  box-sizing: border-box;
`;

const Img = styled.div<{ bgImg: string }>`
  background-image: url(${({ bgImg }) => bgImg});
  width: 100%;
  height: 180px;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`;

const TypoWrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 13px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  border-radius: 0 0 8px 8px;
`;

const Title = styled.span`
  color: white;
  font-size: 14px;
  line-height: 15px;
  padding-bottom: 15px;
`;

const Desc = styled.span`
  color: rgb(255, 245, 158);
  font-size: 12px;
  line-height: 15px;
  padding-bottom: 5px;
`;

const Price = styled.span`
  color: white;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  padding-bottom: 5px;
`;
