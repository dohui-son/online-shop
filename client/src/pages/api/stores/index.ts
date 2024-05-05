import type { NextApiRequest, NextApiResponse } from "next";
import * as STORE from "../../../server/store";
import { GET } from "../../../server/store/httpMethods/GET";
type RouteMehtod = {
  [key: string]: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method as string;
  const HttpFunctions: RouteMehtod = STORE;

  await GET(req, res);
  // HttpFunctions[method](req, res);
}
