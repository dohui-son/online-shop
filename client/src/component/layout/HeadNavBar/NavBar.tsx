import styled from "@emotion/styled";
export const HEAD_NAVBAR_HEIGHT = 64;

interface Props {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}

export function NavBar({ leftComponent, rightComponent }: Props) {
  return (
    <Head>
      <HeadItem>{leftComponent}</HeadItem>
      <HeadItem>{rightComponent}</HeadItem>
    </Head>
  );
}

const Head = styled.header`
  width: 100%;
  height: ${HEAD_NAVBAR_HEIGHT}px;
  padding: 0 24px;

  position: fixed;
  top: 0;
  z-index: 100;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 14px;
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
`;

const HeadItem = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

export const AuthItem = styled.span`
  display: flex;
  align-items: center;
  padding: 10px 0px 10px 20px;
  border-left: 1px solid #e3e3e3;
`;

export const PopoverItem = styled.span`
  padding-left: 20px;
  border-left: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  color: #4684e9;
  cursor: pointer;
`;

export const ActionButton = styled.button`
  appearance: none;
  outline: none;
  background: none;
  border: none;
`;
