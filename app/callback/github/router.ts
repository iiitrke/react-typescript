import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next/types";

export async function GET(request: NextApiRequest) {
  // Do whatever you want

  return NextResponse.json({ id: "yyy" }, { status: 200 });
}
