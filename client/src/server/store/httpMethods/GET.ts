import { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<any | AxiosError>
) {
  res.status(200).json([]);
}
