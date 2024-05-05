import styled from "@emotion/styled";

type Option = {
  label: string;
  value: string | number | readonly string[] | undefined;
};
interface Props
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "value" | "onChange"
  > {
  options: Option[];
  placeholder?: string;
  value: Option["value"];
  onChange: (value: Option["value"]) => void;
}

export function Select({
  options,
  placeholder = "",
  value,
  onChange,
  ...selectProps
}: Props) {
  return (
    <SelectWrapper
      {...selectProps}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={""}>{placeholder}</option>
      {options.map(({ label, value }) => (
        <option key={label + value} value={value}>
          {label}
        </option>
      ))}
    </SelectWrapper>
  );
}

const SelectWrapper = styled.select`
  width: 100%;
  height: 40px;
  padding: 11px 11px 10px 11px;
  border: 0 none;
  border-radius: 4px;
  font-size: 14px;
  line-height: 17px;
  color: #222;
  letter-spacing: 0.02em;
  background: #fff;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`;
