import { TitledWrapper } from "./TitledWrapper";
import type { PropsWithChildren } from "react";

interface Props {
  title: string;
}

export function MainContainer({ title, children }: PropsWithChildren<Props>) {
  return (
    <TitledWrapper title={title} width="892px">
      {children}
    </TitledWrapper>
  );
}
