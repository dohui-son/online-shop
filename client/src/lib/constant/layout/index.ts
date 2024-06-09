import { IconHeadItem } from "@/component/layout/Header";
import { NavItem } from "@/component/layout/NavBar";

import { IconTruck, IconShoppingCart } from "@tabler/icons-react";

export const NAV_ITEMS: NavItem[] = [
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
  {
    title: "연말결산",
    href: "/home/pcms/documents/event_id",
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
