import axios from "axios";
import { UseQueryOptions, useQuery } from "react-query";
import { ProductOption } from "../../type/product/option";

export const useFetchProductOptions = (
  params: { id: string },
  options?: UseQueryOptions<ProductOption, { error: string }>
) =>
  useQuery(
    ["/product/option/id", params.id],
    async () =>
      (await axios.get(`/api/product/option/${params.id}`))
        .data as ProductOption
    // { ...options } //질문: 에러가 나는데 타이핑을 어떻게 해야할까요?
  );
