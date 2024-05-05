import axios from "axios";
import { useQuery } from "react-query";
import { Product } from "../../type/product/index";

export const useFetchProduct = (
  params: { id: string },
  options = {} // TODO: add typing
) =>
  useQuery(
    ["/product/id", params.id],
    async () => (await axios.get(`/api/product/${params.id}`)).data as Product,
    { ...options }
  );
