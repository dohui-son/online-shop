"use client";
import { StoreNav } from "@/component/store/StoreNav";
import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();

  return (
    <div>
      <StoreNav
        title="신세계 푸드"
        storeId="shinsegaefood"
        onClick={(data: Url) => router.push(data, { shallow: true })}
        currentPath={router.asPath}
      />
      <>상품상세정보 Layout</>
    </div>
  );
}
