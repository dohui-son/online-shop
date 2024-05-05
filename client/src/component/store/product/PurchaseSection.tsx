import styled from "@emotion/styled";
import { IconHeart, IconShoppingCart } from "@tabler/icons-react";
import { PropsWithChildren } from "react";
interface Props {
  optionTitle: string;
  deliveryType: string;
  deliveryFee: string;
  totalCount: number;
  totalPrice?: number;
  onClickLike?: () => void;
  onClickCart?: () => void;
  onClickPurchase?: () => void;
}

export function PurchaseSection({
  optionTitle,
  deliveryType,
  deliveryFee,
  totalCount,
  children,
  onClickCart,
  onClickLike,
  onClickPurchase,
}: PropsWithChildren<Props>) {
  return (
    <MainContainer>
      <Title size={16}>{optionTitle}</Title>
      {children}
      <DeliveryContainer>
        <DeliveryWrapper>
          <Title width={65}>배송방법</Title>
          <TextContent>{deliveryType}</TextContent>
        </DeliveryWrapper>
        <DeliveryWrapper>
          <Title width={65}>배송비</Title>
          <DeliveryFee>{deliveryFee}</DeliveryFee>
        </DeliveryWrapper>
      </DeliveryContainer>
      <Dl>
        <div>
          <Dt>총 수량 {totalCount} 개</Dt>
        </div>
        <div>
          <Dt>
            총 주문금액{" "}
            <Text weight="bold" color="red">
              {totalCount}
            </Text>{" "}
            원
          </Dt>
        </div>
      </Dl>
      <ButtonWrapper>
        <Button bgColor="#5f5f5f" onClick={onClickLike}>
          <IconHeart size={28} color="#dcdcdc" />
        </Button>
        <Button bgColor="#1e1e1e" onClick={onClickCart}>
          <IconShoppingCart size={28} color="#dcdcdc" />
        </Button>
        <Button
          width="202px"
          color="#000"
          bgColor="#ffeb00"
          onClick={onClickPurchase}
        >
          <Text weight="normal" color="#000">
            바로구매
          </Text>
        </Button>
      </ButtonWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 360px;
  height: 100vh;
  position: sticky;
  top: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 0 30px 30px;
  gap: 10px;
`;

const Title = styled.span<{ size?: number; width?: number }>`
  width: ${(props) => `${props.width}px` ?? "auto"};
  padding-top: 7px;
  font-size: ${(props) => props.size ?? 14}px;
  line-height: 17px;
  color: #000;
  vertical-align: top;
  letter-spacing: -0.04em;
  font-weight: bold;
`;

const DeliveryContainer = styled.div`
  width: auto;
  padding: 30px 0 20px 0;
`;

const DeliveryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const TextContent = styled.span`
  display: block;
  padding-left: 3px;
  font-size: 14px;
  line-height: 32px;
  color: #000;
  letter-spacing: -0.02em;
`;

const DeliveryFee = styled.span`
  width: 265px;
  height: 36px;
  border-color: #e6e6e6;
  color: #666;
  background-color: #fafafa;
  display:flex;
  align-items:center;
  padding: 5px 9px 6px;
  border: 1px solid #d5d5d5;
  border-radius: 2px;
  font-size: 13px;
  line-height: normal
  color: #333;
  letter-spacing: -0.02em;
`;

const Dl = styled.dl`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #f2f2f2;
  list-style: none;
  padding: 22px 3px 20px 0;
`;
const Dt = styled.dt`
  font-size: 18px;
  letter-spacing: -0.05em;
  vertical-align: top;
  line-height: 24px;
  color: #000;
`;

const Text = styled.span<{ weight: string; color: string }>`
  font-size: 18px;
  letter-spacing: -0.05em;
  vertical-align: top;
  line-height: 24px;
  color: #000;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  padding-left: 5px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button<{ width?: string; bgColor: string }>`
  height: 57px;
  width: ${(props) => props.width ?? `57px`};
  background-color: ${(props) => props.bgColor ?? `#fff`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: none;
  cursor: pointer !important;
`;
