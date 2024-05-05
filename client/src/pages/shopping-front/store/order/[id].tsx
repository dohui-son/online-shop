import { Select } from "@/component/common/Select";
import styled from "@emotion/styled";
import { useState } from "react";
import { useForm } from "../../../../lib/hook/useForm";
import {
  ADDR_OPTION_TYPING,
  ADDR_OPTIONS,
} from "../../../../lib/constant/shopping-front/order";
import { OrderForm } from "../../../../lib/type/shopping-front/order";
import {
  IconBuildingStore,
  IconChevronDown,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Link from "next/link";
import { MOCK_PRODUCT_INFO } from "../../../../lib/constant/server";
import { Badge } from "@/component/common/Badge";
import { ConfirmModal } from "@/component/common/Modal/ConfirmModal";

import { Button } from "@/component/common/Button/Button";

const SPACE_BETWEEN_CONTENT = "16px";

const signIn = true; //TODO: to use enable for fetching
const userInfo: Pick<
  OrderForm,
  "name" | "phone" | "address" | "detailAddress"
> = {
  name: "배수지",
  phone: "010-1234-5678",
  address: "(123456) 서울특별시 강남구 논현동 123-456",
  detailAddress: "123호",
};

export default function Index() {
  const [drawersOpened, setDrawersOpened] = useState<{
    address: boolean;
    orderInfo: boolean;
  }>({ address: true, orderInfo: true });
  const [deliveryReqSelected, setdeliveryReqSelected] =
    useState<OrderForm["deliveryRequest"]>("");
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const orderForm = useForm<OrderForm>({
    initValue: {
      name: userInfo.name,
      phone: userInfo.phone,
      address: userInfo.address,
      detailAddress: userInfo.detailAddress,
      deliveryRequest: "",
      point: 0,
      paymentMethod: "",
      accumulatedPoint: 0,
      totalPayment: 0,
      discount: 0,
      productCount: 1,
      productId: "",
      productOption: "",
    },
  });

  return (
    <>
      <ConfirmModal
        opened={modalOpened}
        onCloseModal={() => setModalOpened(false)}
        overlayed
        cancelText="닫기"
      >
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Subtitle size="16px" weight={600}>
            쇼핑포인트 충전결제
          </Subtitle>
          <br />
          쇼핑포인트를 충전하여 결제 수단으로 사용할 수 있는 서비스입니다.
          <Desc size={"12px"}>
            - 부족한 금액만큼 1만원 단위로 자동 충전됩니다. (유효기간 5년)
          </Desc>
        </div>
      </ConfirmModal>
      <MainContainer>
        <DefaultWrapper>
          <CenterContainer>주문하기</CenterContainer>
          <DrawerButton
            onClick={() =>
              setDrawersOpened((prev) => ({
                ...prev,
                address: !prev.address,
              }))
            }
          >
            <span>배송지 정보 {signIn && <Desc>(kakao 계정 제공)</Desc>}</span>
            <DrawerIcon opened={drawersOpened.address}>
              <IconChevronDown />
            </DrawerIcon>
          </DrawerButton>
          {drawersOpened.address && (
            <InfoWrapper>
              <Title>{userInfo.name}</Title>
              <Subtitle> {userInfo.phone}</Subtitle>
              <Address>
                {userInfo.address}
                <br />
                {userInfo.detailAddress}
              </Address>
              <Select
                options={ADDR_OPTIONS}
                placeholder="배송 요청사항을 선택해주세요."
                value={deliveryReqSelected}
                onChange={(val) => {
                  setdeliveryReqSelected(val as OrderForm["deliveryRequest"]);
                  orderForm.setFormValue(
                    "deliveryRequest",
                    val === ADDR_OPTION_TYPING ? "" : (val as string)
                  );
                }}
              />
              <TextArea
                maxLength={50}
                placeholder="배송시 요청사항을 입력해주세요 (최대 50자)"
                value={orderForm.values.deliveryRequest}
                onChange={(e) =>
                  orderForm.setFormValue("deliveryRequest", e.target.value)
                }
                disabled={deliveryReqSelected !== ADDR_OPTION_TYPING}
              />
            </InfoWrapper>
          )}
          <DrawerButton
            marginTop={SPACE_BETWEEN_CONTENT}
            borderBottomed
            onClick={() =>
              setDrawersOpened((prev) => ({
                ...prev,
                orderInfo: !prev.orderInfo,
              }))
            }
          >
            <span>
              주문상품 정보 <Desc>(총 {orderForm.values.productCount}개)</Desc>
            </span>
            <DrawerIcon opened={drawersOpened.orderInfo}>
              <IconChevronDown />
            </DrawerIcon>
          </DrawerButton>
          {drawersOpened.orderInfo && (
            <>
              <InfoWrapper>
                <Link href={`/store/${MOCK_PRODUCT_INFO[0].storeId}`}>
                  <Subtitle size="16px" weight={600}>
                    <IconBuildingStore stroke={1.5} />{" "}
                    {MOCK_PRODUCT_INFO[0].storeName}
                  </Subtitle>
                </Link>
                <ItemWrapper
                  href={`/store/${MOCK_PRODUCT_INFO[0].storeId}/${orderForm.values.productId}`} //TODO: fix href
                >
                  <img
                    height={60}
                    width={60}
                    alt={MOCK_PRODUCT_INFO[0].title}
                    style={{ borderRadius: "4px" }}
                    src={
                      "https://img1.kakaocdn.net/thumb/C60x60@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fproduct%2F20230401064622_b96127ce0d7b43239e9cea04af6a214f.jpg"
                    }
                  />
                  <ItemInfo>
                    <Subtitle size="13px" weight={600}>
                      {MOCK_PRODUCT_INFO[0].title}
                    </Subtitle>
                    <Subtitle size="12px">
                      [옵션{orderForm.values.productOption}]{" "}
                      {orderForm.values.productCount} 개
                    </Subtitle>
                    <span style={{ display: "flex", gap: "10px" }}>
                      {!!MOCK_PRODUCT_INFO[0].retailPrice && (
                        <Subtitle
                          size="11px"
                          color="grey"
                          textDeco="line-through"
                        >
                          {MOCK_PRODUCT_INFO[0].retailPrice} 원
                        </Subtitle>
                      )}
                      <Subtitle size="14px" weight={700}>
                        {MOCK_PRODUCT_INFO[0].price} 원
                      </Subtitle>
                    </span>
                  </ItemInfo>
                </ItemWrapper>
              </InfoWrapper>
              <CenterContainer weight={400} color={"#4684e9"}>
                <IconTruckDelivery color={"#4684e9"} stroke={1.5} /> 무료배송
              </CenterContainer>
            </>
          )}
          <InfoWrapper margin="16px 0 16px 0">
            <Title>결제 수단</Title>
            <BorderedBox>
              <Subtitle color={"#4684e9"} weight={600}>
                혜택
              </Subtitle>
              쇼핑포인트 충전 결제시 2% 적립
            </BorderedBox>
            <BorderedContainer>
              <span
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ display: "flex", gap: "10px" }}>
                  <Subtitle size="16px" weight={600}>
                    쇼핑포인트 충전결제
                  </Subtitle>
                  <CustomBadge>최대 2% 적립</CustomBadge>
                </span>
                <Button
                  onClick={() => setModalOpened(true)}
                  size={"xs"}
                  variant="text"
                  underlined
                >
                  충전결제란?
                </Button>
              </span>
              <BorderedBox
                bgColor={"#f3faff"}
                borderColor={"rgba(196,216,248,.5)"}
                flexDir="column"
                gap={"1px"}
                padding={"25px"}
              >
                <Desc lineHeight="auto">충전결제 이용하고</Desc>
                <Desc lineHeight="auto" weight={700}>
                  포인트 혜택 받으세요!
                </Desc>
                <Button
                  size={"sm"}
                  radius="m"
                  onClick={() => alert("서비스 준비중입니다.")}
                >
                  계좌 연결하기
                </Button>
              </BorderedBox>
            </BorderedContainer>
          </InfoWrapper>
        </DefaultWrapper>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  height: auto;
  min-width: 1280px;
  min-height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const DefaultWrapper = styled.div`
  width: 870px;
  height: auto;
  background-color: transparent;
  line-height: 44px;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 33px;
`;

const CenterContainer = styled.strong<{ weight?: number; color?: string }>`
  width: 100%;
  height: 44px;
  background-color: #fff;
  border-top: 1px solid #ebebeb;
  font-weight: ${(props) => props.weight || 700};
  color: ${(props) => props.color || "#333"};
  font-size: 15px;
  text-align: center;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const DrawerButton = styled.button<{
  borderBottomed?: boolean;
  marginTop?: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px 6px 14px;
  width: 100%;
  background-color: #fff;
  border: none;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 44px;
  color: #333;
  text-align: left;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.borderBottomed ? "1px solid #ebebeb" : "none"};
  margin-top: ${(props) => props.marginTop || "0px"};
`;

const DrawerIcon = styled.span<{ opened: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  rotate: ${(props) => (props.opened ? "0deg" : "180deg")};
  transition: 0.3s;
`;

const Desc = styled.span<{
  size?: string;
  lineHeight?: string;
  weight?: number;
}>`
  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || "14px"};
  line-height: ${(props) => props.lineHeight || "44px"};
  color: #333;
`;
const Title = styled.strong`
  font-weight: 700;
  font-size: 18px;
  line-height: 44px;
  color: #333;
`;

const Subtitle = styled.span<{
  size?: string;
  weight?: number;
  color?: string;
  textDeco?: string;
}>`
  height: auto;
  display: flex;
  gap: 6px;
  align-items: center;
  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || "14px"};
  color: ${(props) => props.color || "#111"};
  text-decoration: ${(props) => props.textDeco || "none"};
`;

const Address = styled.span`
  font-size: 14px;
  line-height: 21px;
  color: #666;
  word-break: keep-all;
`;

const InfoWrapper = styled.div<{ margin?: string }>`
  width: 100%;
  margin: ${(props) => props.margin || "0px"};
  font-size: 14px;
  line-height: 21px;
  color: #666;
  word-break: keep-all;
  padding: 12px 16px 16px 16px;
  background-color: #fff;
  padding: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 6px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 11px 11px 11px 14px;
  border: 0 none;
  border-radius: 4px;
  font-size: 14px;
  line-height: 17px;
  color: #222;
  letter-spacing: 0.02em;
  background: #fff;
  border: 1px solid #e5e5e5;
  &::placeholder {
    color: grey;
  }
`;

const ItemWrapper = styled.a`
  width: 100%;
  borderradius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 16px 0 6px 0;
  cursor: pointer;
`;
const ItemInfo = styled.span`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5px;
`;

const BorderedBox = styled.span<{
  bgColor?: string;
  margin?: string;
  borderColor?: string;
  flexDir?: string;
  gap?: string;
  padding?: string;
}>`
  width: 100%;
  border: 1px solid ${(props) => props.borderColor || "rgba(0, 0, 0, 0.04)"};
  padding: ${(props) => props.padding || "12px"};
  display: flex;
  flex-direction: ${(props) => props.flexDir || "row"};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap || "4px"};
  background-color: ${(props) => props.bgColor || "rgba(0, 0, 0, 0.01)"};
  border-radius: 5px;
  margin: ${(props) => props.margin || "0px"};
`;

const BorderedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  padding: 16px 0;
  margin: 16px 0;
`;

const CustomBadge = styled(Badge)`
  background-color: red;
  padding: 0 6px;
  font-size: 0.6rem;
`;
