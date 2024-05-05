import styled from "@emotion/styled";
interface Props {
  target: React.ReactNode;
  open: boolean;
}

export function PopoverMenu({ target, open }: Props) {
  return (
    <>
      {target}
      {open && <Content />}
    </>
  );
}

const Content = styled.div`
  position: absolute;
  top: 70px;
  width: 889px;
  padding: 20px 4px 30px;
  border: 1px solid var(--color-grey-light);
  border-radius: 4px;
  background-color: #fff;
  white-space: nowrap;
  box-sizing: border-box;
  z-index: 2;
`;
