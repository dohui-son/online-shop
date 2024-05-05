import axios from "axios";
import { UseQueryOptions, useQuery } from "react-query";
import { ImageReview } from "../../type/product/imageReview";

export const useFetchProductImgReview = (
  params: { id: string },
  options?: UseQueryOptions<ImageReview, { error: string }>
) =>
  useQuery(
    ["/product/review/id", params.id],
    async () =>
      (await axios.get(`/api/product/review/${params.id}`)).data as ImageReview
  );
