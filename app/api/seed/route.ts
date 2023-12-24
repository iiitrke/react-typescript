import { NextApiRequest, NextApiResponse } from "next/types";
import { introData } from "../../../src/data/introData";

import { featuredcourseData } from "../../../src/data/featuredCoursesData";
import prisma from "../../../src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { FeaturedCourse, Intro } from "../../../src/generated/client";
// To handle a GET request to /api
export async function GET(request: NextRequest) {
  const deleteIntros = prisma.intro.deleteMany();
  await prisma.$transaction([deleteIntros]);

  const datas: Promise<Intro>[] = introData.map<Promise<Intro>>((intro) => {
    return prisma.intro.create({ data: intro });
    // .then((result) => result);
  });
  const resolvedPromises = await Promise.all(datas);

  const deletedFeaturedCourses = prisma.featuredCourse.deleteMany();
  await prisma.$transaction([deletedFeaturedCourses]);

  const featuredCourses$: Promise<FeaturedCourse>[] = featuredcourseData.map<
    Promise<FeaturedCourse>
  >((item) => {
    return prisma.featuredCourse.create({ data: item });
    // .then((result) => result);
  });
  const resolvedFCPromises = await Promise.all(featuredCourses$);

  return NextResponse.json(
    { count: "Deleted", data: resolvedPromises, featured: resolvedFCPromises },
    { status: 200 }
  );
}
