import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../../src/generated/client";
import prisma from "../../../../src/lib/prisma";

interface Request {
  name: string;
  email: string;
  password: string;
  repassword: string;
}

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  return NextResponse.json({ id: "hhh" }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body: Request = await request.json();
  const record = {
    name: body.name,
    email: body.email,
    emailVerified: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await prisma.user.create({ data: record });

  console.log("In Post", body);
  return NextResponse.json({ data: result }, { status: 200 });
}
