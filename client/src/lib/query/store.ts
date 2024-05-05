import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

export const useFetchStores = (
  options: { onError?: (err: AxiosError) => void } = {}
) =>
  useQuery(
    [],
    async () => (await axios.get(`/api/stores`)).data, // TODO: server
    {
      ...options,
    }
  );

export const useFetchStore = (
  params: { id: string },
  options: { onError?: (err: AxiosError) => void } = {}
) =>
  useQuery(
    [params.id],
    async () => (await axios.post(`api/stores/${params.id}`, params.id)).data, // TODO: server
    {
      ...options,
    }
  );
