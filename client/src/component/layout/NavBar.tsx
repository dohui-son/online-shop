import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavItem {
  title: string;
  href: string;
  withAsterisk?: boolean;
}

interface Props {
  navItems: NavItem[];
}

export function NavBar({ navItems }: Props) {
  const router = useRouter();

  return (
    <NavWrapper>
      {navItems?.map(({ title, href, withAsterisk }, key) => (
        <Link href={href} key={title + href + "NavigationItem"} shallow>
          <Nav withAsterisk={withAsterisk} selected={router.pathname == href}>
            {title}
          </Nav>
        </Link>
      ))}
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 0 12px 0 42px;
  display: flex;
  gap: 20px;
`;

const Nav = styled.nav<{ withAsterisk?: boolean; selected: boolean }>`
  padding: 31px 0px 29px;
  font-weight: ${({ selected }) => (selected ? 700 : 500)};
  border-bottom: ${({ selected }) =>
    selected ? "3px solid black" : "3px solid transparent"};
  &:hover {
    font-weight: 700;
  }
`;
