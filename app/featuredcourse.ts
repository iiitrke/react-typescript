import { NextApiRequest, NextApiResponse } from "next/types";
import { featuredcourseData } from "../data/featuredCoursesData";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(200).json(featuredcourseData);
      break;
  }
}
