import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import prisma from "../../../src/lib/prisma";
import { verifyJwt } from "../../../src/lib/jwt/jwt";
export async function POST(request: NextRequest) {
  console.log("IN POST BODY");
  const body = await request.json();
  console.log("POST BODY", body);
  prisma.$connect();
  const user = await prisma.user.findFirst({
    where: { email: body.email },
  });
  console.log("POST USER", user);
  prisma.$disconnect();

  // try {
  //   const body = await request.json();
  //   console.log("POST BODY", body);
  //   prisma.$connect();
  //   try {
  //     const user = await prisma.user.findFirst({
  //       where: { email: body.email },
  //     });
  //   } catch (error) {
  //     console.log("PRISMA", error);
  //   }
  //   const user = await prisma.user.findFirst({
  //     where: { email: body.email },
  //   });

  //   prisma.$disconnect();

  //   if (user && (await bcrypt.compare(body?.password, user.password!))) {
  //     const { password, ...userWithoutPass } = user;
  //     const accessToken = signJwtAccessToken(userWithoutPass);
  //     const result = { ...userWithoutPass, accessToken };
  //     return NextResponse.json(result, { status: 200 });
  //   } else {
  //     return NextResponse.json("No such user", { status: 401 });
  //   }
  // } catch (error) {
  //   console.log("ERROR", error);
  // }
}

export async function GET(request: NextRequest) {
  const accessToken = request.headers.get("Authorization");
  if (accessToken && verifyJwt(accessToken)) {
    return NextResponse.json("Authrized", { status: 401 });
  }
  return NextResponse.json("UnAuthorized", { status: 401 });
}
