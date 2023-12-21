import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await prisma.user.findMany({
      select: { name: true, id: true, email: true },
    });
    console.log("IN FETCH USERS");
    console.log(users);
    res.status(200).json({ users: users });
  } catch (error) {
    console.log(error);
  }
}
