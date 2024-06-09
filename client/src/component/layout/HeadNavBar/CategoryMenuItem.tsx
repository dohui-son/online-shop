import { IconList } from "@tabler/icons-react";
import { PopoverMenu, PopoverItem } from "./PopoverMenu";
import { Dispatch, SetStateAction } from "react";

export const CategoryMenuItem = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <PopoverMenu
      target={
        <PopoverItem onClick={onClick}>
          <IconList />
          카테고리
        </PopoverItem>
      }
      open={isOpen}
    />
  );
};
