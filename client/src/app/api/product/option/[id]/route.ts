import type { NextApiRequest, NextApiResponse } from "next";
import { GET } from "../../../../../server/product/option";

export default async function getProductOptionById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await GET(req, res);
}
