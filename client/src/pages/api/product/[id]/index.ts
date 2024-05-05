import type { NextApiRequest, NextApiResponse } from "next";
import { GET } from "../../../../server/product";

export default async function getProductById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await GET(req, res);
}
