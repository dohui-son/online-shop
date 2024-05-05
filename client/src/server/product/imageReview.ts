import { NextApiRequest, NextApiResponse } from "next";
import tmpData from "../db/image-review/88006799.json";
import { ImageReview } from "@/lib/type/product/imageReview";

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ImageReview | { error: string }>
) {
  if (!req.query.id) {
    res.status(400).json({ error: " id is required" });
    return;
  }
  res.status(200).json(tmpData as ImageReview);
}
