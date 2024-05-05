import { OrderForm } from "../../type/shopping-front/order";

export const ADDR_OPTION_TYPING: OrderForm["deliveryRequest"] = "직접입력";
export const ADDR_OPTIONS: {
  label: OrderForm["deliveryRequest"];
  value: OrderForm["deliveryRequest"];
}[] = [
  { label: "배송전 연락주세요.", value: "배송전 연락주세요." },
  { label: "부재시 연락주세요.", value: "부재시 연락주세요." },
  {
    label: "부재시 경비실에 맡겨주세요.",
    value: "부재시 경비실에 맡겨주세요.",
  },
  { label: ADDR_OPTION_TYPING, value: ADDR_OPTION_TYPING },
];
