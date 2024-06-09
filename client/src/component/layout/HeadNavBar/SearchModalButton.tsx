import { FullPageModal } from "@/component/common/Modal/FullPageModal";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export function SearchModalButton() {
  const [searchModalOpened, setSearchModalOpened] = useState<boolean>(false);

  return (
    <>
      <IconSearch
        size={20}
        color="gray"
        onClick={() => setSearchModalOpened(true)}
      />
      <FullPageModal
        onClose={() => setSearchModalOpened(false)}
        opened={searchModalOpened}
      ></FullPageModal>
    </>
  );
}
