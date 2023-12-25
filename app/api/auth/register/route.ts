import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  return NextResponse.json({ id: "hhh" }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json(body, { status: 200 });
}
