import { NextApiRequest, NextApiResponse } from "next/types";
import { introData } from "../../../../data/introData";

import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export function GET(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json(introData, { status: 200 });
}
