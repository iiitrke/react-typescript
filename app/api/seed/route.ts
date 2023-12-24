import { NextApiRequest, NextApiResponse } from "next/types";
import { introData } from "../../../src/data/introData";
import prisma from "../../../src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Intro } from "../../../src/generated/client";
// To handle a GET request to /api
export async function GET(request: NextRequest) {
  const deleteIntros = prisma.intro.deleteMany();
  await prisma.$transaction([deleteIntros]);

  const datas: Promise<Intro>[] = introData.map<Promise<Intro>>((intro) => {
    return prisma.intro.create({ data: intro });
    // .then((result) => result);
  });
  const resolvedPromises = await Promise.all(datas);

  return NextResponse.json(
    { count: "Deleted", data: resolvedPromises },
    { status: 200 }
  );
}
