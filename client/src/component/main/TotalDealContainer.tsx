import { TitledWrapper } from "./TitledWrapper";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function TotalDealContainer({ title, children }: Props) {
  return (
    <>
      <TitledWrapper title={title}>{children}</TitledWrapper>
    </>
  );
}
