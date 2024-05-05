import { NextApiRequest, NextApiResponse } from "next";
import tmpData from "../db/option/88006799.json";
import { ProductOption } from "@/lib/type/product/option";

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ProductOption | { error: string }>
) {
  if (!req.query.id) {
    res.status(400).json({ error: " id is required" });
    return;
  }
  res.status(200).json(tmpData);
}
