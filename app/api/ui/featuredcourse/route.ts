import { featuredcourseData } from "../../../../src/data/featuredCoursesData"; //   src/data/featuredCoursesData";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "../../../../src/lib/prisma";
// export default function GET(req: NextRequestuest) {

//       res.status(200).json(featuredcourseData);
//       break;
//   }
// }

export async function GET(request: NextRequest) {
  // Do whatever you want
  const data = await prisma.featuredCourse.findMany();
  console.log(data);
  return NextResponse.json(data, { status: 200 });
}
