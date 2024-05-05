import { NextApiRequest, NextApiResponse } from "next";
import tmpData from "../db/product/88006799.json";
import { Product } from "@/lib/type/product";

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Product | { error: string }>
) {
  if (!req.query.id) {
    res.status(400).json({ error: " id is required" });

    return;
  }
  res.status(200).json(tmpData);
}
