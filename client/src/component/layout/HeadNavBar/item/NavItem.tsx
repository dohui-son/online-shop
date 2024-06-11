import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface TextNavItemProps {
  title: string;
  href: string;
  withAsterisk?: boolean;
}

/**
 * TextNavItems should be used in the HeadNavContainer component.
 */
function TextNavItem({ title, href, withAsterisk = false }: TextNavItemProps) {
  const pathname = usePathname();

  return (
    <Link href={href} shallow>
      <Nav withAsterisk={withAsterisk} selected={pathname == href}>
        {title}
      </Nav>
    </Link>
  );
}

const TextNavItemContainer = styled.div`
  width: auto;
  height: auto;
  padding: 0 12px 0 42px;
  display: flex;
  gap: 20px;
`;

const Nav = styled.nav<{ withAsterisk?: boolean; selected: boolean }>`
  display: flex;
  padding: 22px 0;
  font-weight: ${({ selected }) => (selected ? 700 : 500)};
  border-bottom: ${({ selected }) =>
    selected ? "3px solid black" : "3px solid transparent"};
  &:hover {
    font-weight: 700;
  }
`;

export default {
  TextNavItem,
  TextNavItemContainer,
};
