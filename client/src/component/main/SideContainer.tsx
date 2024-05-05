import styled from "@emotion/styled";

export function SideContainer({ children }: { children: React.ReactNode }) {
  return <MainWrapper>{children}</MainWrapper>;
}

const MainWrapper = styled.span`
  width: 320px;
  min-width: 324px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #fff;
  padding: 0 0 100px 32px;
  border-left: 1px solid #f5f5f5;
  margin-left: 31px;
`;
