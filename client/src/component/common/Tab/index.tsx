import { COLOR } from "@/lib/constant/style/color";
import styled from "@emotion/styled";
import { Key } from "react";

interface Props<T extends Key> {
  tabMenu: { title: string; value: T }[];
  selected: T;
  width?: string;
  height?: string;
  onClick: (value: T) => void;
}
export function Tab<T extends Key>({ tabMenu, selected, onClick }: Props<T>) {
  return (
    <TabContainer>
      {tabMenu.map(({ title, value }) => (
        <TabMenu
          key={title + value}
          selected={selected === value}
          onClick={() => onClick(value)}
        >
          {title}
        </TabMenu>
      ))}
    </TabContainer>
  );
}

const TabContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e0e0e0;
`;
const TabMenu = styled.li<{ selected: boolean }>`
  width: 0;
  height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e0e0e0;
  background-color: ${({ selected }) =>
    selected ? "var(--color-black-main)" : "var(--color-white)"};
  color: ${({ selected }) =>
    selected ? "var(--color-white)" : "var(--color-black-main)"};
  cursor: pointer;
  border-right: 1px solid #e0e0e0;
  &:last-of-type {
    border-right: none;
  }
`;
