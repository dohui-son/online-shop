import type { NextApiRequest, NextApiResponse } from "next";
import { GET } from "../../../../../server/product/imageReview";

export default async function getImageReviewById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await GET(req, res);
}
