import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../src/lib/prisma";

import * as Yup from "yup";

export const validateInput = async <T>(
  schema: Yup.ObjectSchema<any>,
  input: any
): Promise<T> => {
  await schema.validate(input, { abortEarly: false });
  return schema.cast(input);
};

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
  console.log("IN POST FUNCTIN");

  console.log("Reading JSON request body");
  const body: Request = await request.json();

  console.log("Reading JSON request body111");
  console.log(body);
  // return NextResponse.json({ name: "hhjjh" }, { status: 200 });
  try {
    const bodySchema = Yup.object({
      name: Yup.string().required().notOneOf(["admin"]).min(3, "size error"),

      // password: Yup.string()
      //   .required()
      //   .notOneOf(["admin"])
      //   .min(3, "size error"),

      // age: Yup.number()
      //   .transform((value, original) =>
      //     original == null || original === "" ? undefined : value
      //   )
      //   .required(),
    });

    const salt = bcrypt.genSaltSync(10);
    const record = {
      name: body.name,
      email: body.email,
      password: bcrypt.hashSync(body.password, salt),
      emailVerified: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await prisma.user.create({ data: record });

    const { password, ...noB } = result;

    console.log("In Post", result);
    return NextResponse.json({ result: noB }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error, { status: 400 });
  }
}

// const body: Request = await request.json();
// const record = {
//   name: body.name,
//   email: body.email,
//   emailVerified: new Date(),
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };
// const result = await prisma.user.create({ data: record });
