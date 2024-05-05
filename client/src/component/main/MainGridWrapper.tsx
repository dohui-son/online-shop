import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

export function Grid({ children }: PropsWithChildren) {
  return <GridWrapper>{children}</GridWrapper>;
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;
