import { NextApiRequest, NextApiResponse } from "next/types";
import { introData } from "../../../src/data/introData";
import prisma from "../../../src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  //   const datas = prisma.intro.createMany({ data: introData }).then((result) => {
  //     console.log(result);
  //     return result;
  //   });
  //   const datas = introData.map((intro) => {
  //     prisma.intro.create({ data: intro }).then((value) => value);
  //     console.log(intro);
  //   });
  //   console.log(datas);

  //   const deletedIntro = await prisma.intro
  //     .deleteMany({})
  //     .then((count) => console.log(count));

  const datas = await introData.map((intro) => {
    return prisma.intro.create({ data: intro }).then((data) => data);
  });

  //   const deleteIntros = prisma.intro.deleteMany();
  //   await prisma.$transaction([deleteIntros]);
  return NextResponse.json(
    { count: "Deleted", data: "Deleted" },
    { status: 200 }
  );
}
