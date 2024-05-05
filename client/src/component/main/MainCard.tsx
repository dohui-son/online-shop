import styled from "@emotion/styled";
import dayjs from "dayjs";
import Coin from "../../../public/image/home/recommand_benefit.gif";
import {
  IconAdCircleFilled,
  IconBrandYoutubeFilled,
  IconHeart,
} from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { useMemo } from "react";

export enum DealEvent {
  EVENT = "event",
  LIVE = "live",
}

export interface CardItem {
  id: string;
  thumbnail: string;
  due: Date;
  title: string;
  tags: Array<"free_deliver" | string>; //TODO: typing
  price: number;
  groupPrice: boolean;
  retailPrice: number;
  purchasedTotal: number;
  recommandBenefit: boolean;
  userProfiles: string[];
  event?: { type: DealEvent; desc: string };
  liked: boolean;
  storeId: string;
  storeName?: string;
}

export function MainCard({
  thumbnail,
  title,
  due,
  price,
  groupPrice,
  purchasedTotal,
  recommandBenefit,
  liked = false,
  userProfiles,
  tags,
  event,
}: CardItem) {
  const today = dayjs(new Date());
  const dueDays = dayjs(due).diff(today, "day");
  const tagsWithKey = useMemo(
    () => tags.map((tag) => ({ label: tag, key: Math.random() })),
    [tags]
  );
  const userProfileWithKey = useMemo(
    () =>
      userProfiles.map((profile) => ({ profile: profile, key: Math.random() })),
    [userProfiles]
  );

  return (
    <CardContainer>
      <InfoBadge>마감 {dueDays}일전</InfoBadge>
      <ThumbWrapper>
        <Thumb background={thumbnail} />
      </ThumbWrapper>
      <span>
        {tagsWithKey.map(({ label, key }) => (
          <Tag
            key={key}
            backgroundColor={label === "free_deliver" ? `#f2f6f8` : "#fbefaa"}
          >
            {label === "free_deliver" ? "무료배송" : label}
          </Tag>
        ))}
      </span>
      {title}
      <span>
        <Price color="#4684e9">톡딜가 </Price>
        <Price color="#333">
          {new Intl.NumberFormat().format(price)}원{groupPrice && "~"}{" "}
        </Price>
        <RetailPrice>{new Intl.NumberFormat().format(price)}원</RetailPrice>
      </span>
      <MetaDataWrapper>
        <span>
          <ProfileWrapper>
            {userProfileWithKey.map(({ profile, key }, index) => (
              <ProfileImg
                key={key}
                translateX={(-6 * index).toString()}
                background={profile}
              />
            ))}
          </ProfileWrapper>
          {new Intl.NumberFormat().format(purchasedTotal)}명이 구매했어요
        </span>
        <span>
          {recommandBenefit && <img width={24} src={Coin.src} />}{" "}
          <IconHeart stroke={1} fill={liked ? "red" : "white"} size={24} />
        </span>
      </MetaDataWrapper>
      {event && <Event event={event} />}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  position: relative;
  width: 284px;
  min-height: 332px;
  display: flex;
  gap: 9px;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer !important;
  color: #111;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  padding-bottom: 40px;
`;

const ThumbWrapper = styled.div`
  width: 284px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
`;
const Thumb = styled.div<{ background: string }>`
  position: relative;
  width: inherit;
  height: inherit;
  background-image: url(${({ background }) => background});
  background-size: cover;
  border: 0 none;
  margin-bottom: 13px;
  transition: 0.4s;
  &:hover {
    transform: scale(1.2);
  }
`;

const InfoBadge = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 3px;
  z-index: 1;
  top: 10px;
  left: 10px;
  color: white;
  background-color: #333000cc;
`;

const Price = styled.em<{ color: string }>`
  font-weight: 700;
  font-size: 20px;
  font-style: normal;
  color: ${({ color }) => color};
`;

const RetailPrice = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #666;
`;

const MetaDataWrapper = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
`;

const ProfileWrapper = styled.div`
  float: left;
  position: relative;
`;
const ProfileImg = styled.img<{ background?: string; translateX: string }>`
  width: 20px;
  height: 20px;
  background-color: #fff;
  background-image: url(${({ background = "" }) => background});
  background-size: cover;
  border-radius: 50%;
  transform: translateX(${({ translateX }) => translateX}px);
`;

const Tag = styled.span<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? `#f2f6f8`};
  font-size: 12px;
  font-weight: 500;
  color: rgba(24, 32, 55, 0.7);
  padding: 4px 8px;
  margin-right: 4px;
`;

function Event({ event }: Pick<CardItem, "event">) {
  return (
    <EventWrapper
      backgroundColor={event?.type === DealEvent.EVENT ? "#f2f6f8" : "#fff5f6"}
    >
      <span>
        <LeftSpan>
          {(() => {
            switch (event?.type) {
              case DealEvent.EVENT:
                return (
                  <IconAdCircleFilled
                    style={{ color: "#4684e9", height: 20 }}
                  />
                );
              default:
                return (
                  <IconBrandYoutubeFilled
                    style={{ color: "#ff5252", height: 20 }}
                  />
                );
            }
          })()}
          <>{event?.desc}</>
        </LeftSpan>
      </span>
      <IconChevronRight stroke={1.5} size={19} />
    </EventWrapper>
  );
}

const EventWrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: auto;
  color: #333;
  padding: 7px 12px 7px 10px;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 0.5px solid #e1e4e7;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
const LeftSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;
