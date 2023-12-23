import { NextApiRequest, NextApiResponse } from "next/types";
import { introData } from "../../../../data/introData";

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextApiRequest) {
  // Do whatever you want
  return NextResponse.json(introData, { status: 200 });
}
