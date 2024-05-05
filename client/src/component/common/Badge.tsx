import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface Props {
  className?: any;
}

export function Badge({ children, ...props }: PropsWithChildren<Props>) {
  return <BadgeContainer {...props}>{children}</BadgeContainer>;
}

const BadgeContainer = styled.div`
  width: auto;
  height: auto;
  padding: 1px 3px;
  background-color: #000;
  color: #fff;
  font-size: 10px;
  text-align: center;
  border-radius: 30px;
`;
