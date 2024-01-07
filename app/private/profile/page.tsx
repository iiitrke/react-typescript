import React from "react";
import Profile from "./profile";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log("Session :", session);
  if (!session) {
    redirect("/login");
  }
  return <Profile />;
}
