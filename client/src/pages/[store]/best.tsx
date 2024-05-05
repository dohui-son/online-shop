import { StoreNav } from "@/component/store/StoreNav";
import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";

export default function Best() {
  const router = useRouter();

  return (
    <div>
      <StoreNav
        title="신세계 푸드"
        storeId="shinsegaefood"
        onClick={(data: Url) => router.push(data, undefined, { shallow: true })}
        currentPath={router.asPath}
      />
      <>Best</>
    </div>
  );
}
