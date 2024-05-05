import styled from "@emotion/styled";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export type ShortcutItem = {
  title: string;
  img: string;
  href: string;
  routerQuery?: string;
  label?: string;
};

interface Props {
  items: ShortcutItem[];
}
export function ShortcutMenu({ items }: Props) {
  return (
    <ShortcutWrapper>
      <Ul>
        {items?.map((item) => (
          <Link
            key={item.href + "ShortcutMenu" + item.title}
            href={{
              pathname: item.href,
              query: item?.routerQuery && { talk_deal: item.routerQuery },
            }}
            shallow
          >
            <Li>
              <Thumbnail backgroundImg={item.img} />
              <Title>{item.title}</Title>
            </Li>
          </Link>
        ))}
      </Ul>
    </ShortcutWrapper>
  );
}

const ShortcutWrapper = styled.div`
  width: auto;
  min-height: 173px;
  height: auto;
  overflow: hidden;
  padding-top: 80px;
  text-align: center;
  margin-bottom: 40px;
`;

const Ul = styled.ul`
  min-height: 118px;
  display: flex;
  gap: 30px;
  overflow: unset;
  padding: 50px 0 20px;
  margin-bottom: 0;
  list-style: none;
`;

const Li = styled.li`
  width: auto;
  margin: 0;
  min-height: 103px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thumbnail = styled.img<{ backgroundImg: string }>`
  width: 80px;
  height: 80px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: var(--color-gray-main);
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: 100% 100%;
  cursor: pointer;
`;

const Title = styled.span`
  width: 52px;
  max-height: 30px;
  margin-top: 8px;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;
`;
