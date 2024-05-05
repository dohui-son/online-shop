import { Option } from "@/lib/type/product/option";
import styled from "@emotion/styled";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

interface Props {
  onClick: () => void;
  selected: string;
  options: Option[];
  price: number;
}

export function OptionSelect({ selected, onClick, options, price }: Props) {
  const [opened, setOpened] = useState(false);
  return (
    <MainContainer opened={opened}>
      <Button onClick={() => setOpened(!opened)}>
        <div>
          <ButtonText>선택</ButtonText>
          <ButtonText color={"#999"} fontWeight="bold">
            {selected}
          </ButtonText>
        </div>
        <ChevronDown opened={opened}>
          <IconChevronDown size={20} />
        </ChevronDown>
      </Button>
      {opened && (
        <OptionContainer>
          {options.map(({ value, addPrice }) => (
            <OptionWrapper key={value + addPrice} onClick={onClick}>
              <OptionTitle>{value}</OptionTitle>
              <OptionPrice>
                {new Intl.NumberFormat().format(price + addPrice)} 원
              </OptionPrice>
            </OptionWrapper>
          ))}
        </OptionContainer>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div<{ opened: boolean }>`
  width: 100%;
  height: ${(props) => (props.opened ? "auto" : "50px")};
  max-height: 230px;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  font-size: 15px;
  line-height: 19px;
  color: #222;
  text-align: left;
  cursor: pointer;
  overflow: auto;
`;

const Button = styled.button`
  width: 100%;
  padding: 11px 12px 12px 14px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  cursor: pointer;
`;
const ButtonText = styled.span<{ color?: string; fontWeight?: string }>`
  font-size: 15px;
  line-height: 19px;
  color: ${(props) => props.color ?? "#222"};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  padding-right: 5px;
`;

const ChevronDown = styled.div<{ opened: boolean }>`
  transform: ${(props) => (props.opened ? "rotate(180deg)" : "rotate(0deg)")};
`;

const OptionContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 1000px;
  overflow: auto;
`;

const OptionWrapper = styled.button`
  width: 100%;
  height: 58px;
  color: #000;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
  background-color: #fff;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 10px 12px 20px 14px;
  line-height: 20px;
  border-bottom: 1px solid #f2f2f2;
  &:last-of-type {
    border-bottom: none;
  }
  cursor: pointer;
`;

const OptionTitle = styled.span`
  font-weight: 400;
`;
const OptionPrice = styled.span`
  font-weight: bold;
`;
