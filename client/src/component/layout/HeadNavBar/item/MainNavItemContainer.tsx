import { HOME_NAV_ITEMS } from "@/lib/constant/layout";
import NavItem from "./NavItem";

export function HomeNavItemContainer() {
  return (
    <NavItem.TextNavItemContainer>
      {HOME_NAV_ITEMS.map(({ title, href, withAsterisk }) => (
        <NavItem.TextNavItem
          key={title + href}
          href={href}
          withAsterisk={withAsterisk}
          title={title}
        />
      ))}
    </NavItem.TextNavItemContainer>
  );
}
