import styled from "@emotion/styled";
import { IconInfoCircle, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { DefaultWrapper } from "../Wrapper";
import { NAV_ITEMS } from "@/lib/constant/store/nav";

interface Props {
  title: string;
  storeId: string;
  onClick: ({
    pathname,
    query,
  }: {
    pathname: string;
    query?: { sort: string };
  }) => void;
  currentPath: string;
}
export function StoreNav({ title, storeId, onClick, currentPath }: Props) {
  //const getStoreId = (path: string) => path?.split("/")?.slice(-1)[0];
  return (
    <></>
    // <MainContainer> TODO: refactor
    //   <Title>{title}</Title>
    //   <Link href={`/storeId/profile`}>
    //     <StoreInfo>
    //       <IconInfoCircle size={15} color="#999" />
    //       <p>스토어정보</p>
    //     </StoreInfo>
    //   </Link>

    //   <DefaultWrapper>
    //     <LowerContainer>
    //       <TabWrapper>
    //         {NAV_ITEMS.map(({ title, path, routerQuery }, key) => (
    //           <Tab
    //             role="tab"
    //             key={key}
    //             selected={getStoreId(currentPath).includes(
    //               !path ? storeId : path
    //             )}
    //             onClick={() =>
    //               onClick({
    //                 pathname: `/${storeId}/${path}`,
    //                 query: routerQuery,
    //               })
    //             }
    //           >
    //             {title}
    //           </Tab>
    //         ))}
    //       </TabWrapper>
    //       <SearchWrapper>
    //         <SearchInput placeholder={`${title} 상품검색`} />
    //         <IconSearch color="#999" size={22} />
    //       </SearchWrapper>
    //     </LowerContainer>
    //   </DefaultWrapper>
    //   <BorderLine />
    // </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: flex-end;
  padding-top: 40px;
`;

const Title = styled.strong`
  font-size: 34px;
  line-height: 41px;
  word-break: break-all;
  font-weight: bold;
  color: #111;
`;

const StoreInfo = styled.span`
  padding: 18px 0;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666;
  letter-spacing: -0.02em;
`;

const LowerContainer = styled.div`
  width: 100%;
  min-width: 1280px;
  display: flex;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  width: 230px;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 5px 5px 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 13px;
  align-items: flex-start;
  ::placeholder {
    color: #666;
    text-overflow: ellipsis;
  }
`;

const TabWrapper = styled.div`
  width: 400px;
  height: 40px;
  gap: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 15px;
`;

const Tab = styled.div<{ selected: boolean }>`
  min-width: auto;
  height: 48px;
  padding: 0 4px;
  font-size: 15px;
  line-height: 48px;
  color: ${({ selected }) => (selected ? "#000" : "#343A40;")};
  font-weight: ${({ selected }) => (selected ? "700" : "normal")};
  border-bottom: ${({ selected }) =>
    selected ? "2px solid #000" : "2px solid transparent"};
  cursor: pointer;
`;

const BorderLine = styled.span`
  border-top: 1px solid #e5e5e5;
  width: 100%;
`;
