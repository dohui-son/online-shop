import styled from "@emotion/styled";

export const DefaultWrapper = styled.div<{ direction?: string }>`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  flex-direction: ${({ direction }) => direction ?? `row`};
  justify-content: center;
  align-items: center;
`;
