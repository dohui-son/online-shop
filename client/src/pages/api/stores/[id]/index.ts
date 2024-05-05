import { NextApiRequest, NextApiResponse } from "next";

type Store = {
  id: string;
  name: string;
};
export default async function getStoreById(
  req: NextApiRequest,
  res: NextApiResponse<
    | Store
    | {
        error: string;
      }
  >
) {
  const { id } = req.query;
  if (id == null) {
    res.status(400).json({ error: "id is required" });
    return;
  }
  res.status(200).json({ id: id?.toString(), name: "store_name" });
}
