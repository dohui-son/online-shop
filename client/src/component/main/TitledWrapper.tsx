import styled from "@emotion/styled";
import { H4 } from "../common/Typo";
import { PropsWithChildren } from "react";

interface Props {
  title: string;
  width?: string;
}

export function TitledWrapper({
  title,
  children,
  width,
}: PropsWithChildren<Props>) {
  return (
    <Wrapper width={width ?? "100%"}>
      <H4>{title}</H4>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width};

  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 0 0 892px;
  padding: 30px 0 120px;
  gap: 16px;
`;
