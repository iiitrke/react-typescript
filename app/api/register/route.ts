import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../src/generated/client";
import prisma from "../../../src/lib/prisma";
import { RegisterSchema } from "../../../src/validations/register/register";
import bcrypt from "bcryptjs";

import * as Yup from "yup";
import axios from "axios";

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
  const body: Request = await request.json();
  // return NextResponse.json({ name: "hhjjh" }, { status: 200 });
  try {
    const bodySchema = Yup.object({
      name: Yup.string().required().notOneOf(["admin"]).min(3, "size error"),

      age: Yup.number()
        .transform((value, original) =>
          original == null || original === "" ? undefined : value
        )
        .required(),
    });

    const validatedData = await validateInput<
      Yup.Asserts<typeof RegisterSchema>
    >(RegisterSchema, body);

    const record = {
      name: body.name,
      email: body.email,
      emailVerified: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const salt = bcrypt.genSaltSync(10);
    validatedData.name = bcrypt.hashSync(validatedData.name, salt);
    // validatedData.name = nameHashValue;
    // const result = await prisma.user.create({ data: record });

    // console.log(validatedData);
    // console.log("In Post", validatedData);
    return NextResponse.json({ result: validatedData }, { status: 200 });
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
