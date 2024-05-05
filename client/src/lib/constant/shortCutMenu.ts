import { ShortcutItem } from "@/component/main/ShortcutMenu";
import TodyDeal from "../../../public/image/shortcutMenu/thumb_todaydeal_new.png";
import AllTalkDeal from "../../../public/image/shortcutMenu/thumb_talkdeal.png";
import EncoreTalkDeal from "../../../public/image/shortcutMenu/thumb_again_talkdeal.png";
import Fashion from "../../../public/image/shortcutMenu/thumb_fashion.png";
import Fresh from "../../../public/image/shortcutMenu/thumb_fresh.png";
import TodayDeliver from "../../../public/image/shortcutMenu/thumb_today_deliver.gif";
import Store from "../../../public/image/shortcutMenu/thumb_stores.png";
import Refresh from "../../../public/image/shortcutMenu/thumb_refresh_week.png";
import My from "../../../public/image/shortcutMenu/thumb_myshopping_new.png";
import { RouteKey } from "@/lib/type/route";

export const DEAL_TITLE: Record<RouteKey, string> = {
  [RouteKey.TODAY]: "오늘의 딜",
  [RouteKey.TOTAL]: "전체 톡딜",
  [RouteKey.THEME]: "테마딜",
};

export const SHORTCUT_ITEMS: Array<ShortcutItem> = [
  {
    title: "오늘의 딜",
    img: TodyDeal.src,
    href: "/",
  },
  {
    title: "전체톡딜",
    img: AllTalkDeal.src,
    href: "/",
    routerQuery: RouteKey.TOTAL,
  },
  {
    title: "앵콜톡딜",
    img: EncoreTalkDeal.src,
    href: "/",
    routerQuery: RouteKey.THEME,
  },
  {
    title: "연말결산 패션",
    img: Fashion.src,
    href: `/fashion`,
  },
  {
    title: "신선마켓",
    img: Fresh.src,
    href: `/fresh`,
  },
  {
    title: "오늘출발",
    img: TodayDeliver.src,
    href: `/today_deliver`,
  },
  {
    title: "스토어의 발견",
    img: Store.src,
    href: `/store_intro`,
  },
  {
    title: "리프레시 위크",
    img: Refresh.src,
    href: `/refresh_week`,
  },
  {
    title: "마이쇼핑",
    img: My.src,
    href: `/my`,
  },
];
