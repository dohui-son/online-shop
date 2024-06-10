import { IconHeadItem } from "@/component/layout/Header";
import { NavItem } from "@/component/layout/NavBar";

import { IconTruck, IconShoppingCart } from "@tabler/icons-react";
import { TextNavItemProps } from "@/component/layout/HeadNavBar/item/NavItem";
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
