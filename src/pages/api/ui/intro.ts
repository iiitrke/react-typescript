import { NextApiRequest, NextApiResponse } from "next/types";
import { introData } from "../../../data/introData";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(200).json(introData);
      break;
  }
}
