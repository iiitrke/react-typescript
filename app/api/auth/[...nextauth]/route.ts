import { NextRequest, NextResponse } from "next/server";

import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Providers from "next-auth/providers";

import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "process";
import { Session } from "inspector";
import prisma from "../../../../src/lib/prisma";

console.log("AUTH ROUTER CALLED");
export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),

    // CredentialsProvider({
    //   credentials: {
    //     usename: { label: "User Name", type: "text" },
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials.email || !credentials.password) {
    //       throw new Error("Please enter email or password");
    //     }
    //     const user = { id: "1", email: "sss@dd", name: "ddd" };
    //     return user;
    //   },
    // }),
    // ...add more providers here
  ],
  // callbacks: {
  //   async jwt({ token, user, session }) {
  //     console.log("jwt callback", { token, user, session });
  //     return {...token, id:user.id};
  //   },
  //   async session({ token, user, session }) {
  //     console.log("session callback", { token, user, session });
  //     return {...session, user: {...session.user, id:token.id}};
  //   },
  // },
  // secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: "jwt",
  // },
};
console.log("CALLIN NEXTAUTH");
export const handler = NextAuth(authOptions);
console.log(handler);

console.log("CALLIN NEXTAUTH");

export { handler as GET, handler as POST };

// export default handler; // To handle a GET request to /api
