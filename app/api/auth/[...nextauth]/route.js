// import { NextRequest, NextResponse } from "next/server";

// import NextAuth, { type NextAuthOptions } from "next-auth";
// import GithubProvider, { GithubProfile } from "next-auth/providers/github";
// import Providers from "next-auth/providers";

// import CredentialsProvider from "next-auth/providers/credentials";

// import { env } from "process";
// import { Session } from "inspector";
// import prisma from "../../../../src/lib/prisma";
// // import {   } from "@next-auth/mo";

// console.log("AUTH ROUTER CALLED");
// export const authOptions: NextAuthOptions = {
//   // adapter: PrismaAdapter,
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       profile(profile: GithubProfile) {
//         // console.log("");
//         return { ...profile, role: "user", id: profile.id.toString() };
//       },
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),

//     CredentialsProvider({
//       id: "credentials",
//       name: "credentials",
//       credentials: {
//         // usename: { label: "User Name", type: "text" },
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         console.log(credentials?.email);
//         debugger;
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Please enter email or password");
//         }

//         console.log(credentials.email);
//         console.log(credentials.password);
//         const user = { id: "1", email: "sss@dd", name: "ddd" };
//         return user;
//       },
//     }),
//     // ...add more providers here
//   ],
//   pages: {
//     // signIn: "/login",
//     signOut: "/auth/signout",
//     error: "/auth/error", // Error code passed in query string as ?error=
//     verifyRequest: "/auth/verify-request", // (used for check email message)
//     newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,

//   callbacks: {
//     async jwt({ token, user, session, trigger }) {
//       if (trigger === "update" && session?.name) {
//         token.name = session.name;
//       }
//       console.log("jwt callback", { token, user, session });
//       return { ...token, id: user.id };
//     },
//     async session({ token, user, session }) {
//       console.log("session callback", { token, user, session });
//       return { ...session, user: { ...session.user, id: token.id } };
//     },
//   },
// };
// console.log("CALLIN NEXTAUTH");
// export const handler = NextAuth(authOptions);
// console.log(handler);

// console.log("CALLIN NEXTAUTH");

// export { handler as GET, handler as POST };

// // export default handler; // To handle a GET request to /api

import nextAuth from "next-auth";
import { authOptions } from "./authOptions";

export const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
export default handler;