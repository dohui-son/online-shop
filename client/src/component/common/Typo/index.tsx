import styled from "@emotion/styled";

export function H4({ children }: { children: React.ReactNode }) {
  return <Strong4>{children}</Strong4>;
}

const Strong4 = styled.strong`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-weight: bold;
`;
