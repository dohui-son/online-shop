import { TextNavItemProps } from "@/component/layout/HeadNavBar/item/NavItem";
import { IconHeadItem } from "@/lib/type/layout";
import { IconShoppingCart, IconTruck } from "@tabler/icons-react";
export const HOME_NAV_ITEMS: TextNavItemProps[] = [
  {
    title: "홈",
    href: "/",
  },
  {
    title: "브랜드데이",
    href: "/home/brand",
  },
  {
    title: "랭킹",
    href: "/home/best",
    withAsterisk: true,
  },
  {
    title: "라이브",
    href: "/home/live",
  },
  {
    title: "기획전",
    href: "/home/promotion",
  },
];

export const PRIVATE_MENU_ITEMS: Omit<IconHeadItem, "onClick">[] = [
  {
    icon: IconTruck,
    href: "/deliver",
  },
  {
    icon: IconShoppingCart,
    href: "/cart",
  },
];
