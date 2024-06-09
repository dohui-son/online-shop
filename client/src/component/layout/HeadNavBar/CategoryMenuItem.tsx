import { IconList } from "@tabler/icons-react";
import { useState } from "react";
import { PopoverItem, PopoverMenu } from "./PopoverMenu";

export const CategoryMenuItem = () => {
  const [categoryMenuOpened, setCategoryMenuOpen] = useState<boolean>(false);
  return (
    <PopoverMenu
      target={
        <PopoverItem onClick={() => setCategoryMenuOpen((prev) => !prev)}>
          <IconList />
          카테고리
        </PopoverItem>
      }
      opened={categoryMenuOpened}
      onClose={() => setCategoryMenuOpen(false)}
    />
  );
};
