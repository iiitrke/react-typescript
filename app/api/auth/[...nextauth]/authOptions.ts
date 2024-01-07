import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import { type NextAuthOptions } from "next-auth";
// import NextAuth from "./next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import Adapters from "next-auth/adapters";

import CredentialsProvider from "next-auth/providers/credentials";
import { emit, env } from "process";
import { Session } from "inspector";
import prisma from "../../../../src/lib/prisma";
import Email from "next-auth/providers/email";
import axios from "axios";
import { signJwtAccessToken } from "../../../../src/lib/jwt/jwt";
// import {   } from "@next-auth/mo";

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter,
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      id: "github",
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      // id: "credentials",
      name: "credentials",
      credentials: {
        // usename: { label: "User Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("AUTH:- ");
        try {
          const user: any = await prisma.user.findFirst({
            where: { email: credentials?.email },
          });

          console.log("Result:- ", user);
          const { password, ...userWithoutPass } = user;

          const accessToken = signJwtAccessToken(userWithoutPass);
          const result = { ...userWithoutPass, accessToken };
          return result;
        } catch (error) {
          console.error("Result:- ", error);
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    // signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(
        "CALLBACK CALLED",
        user,
        credentials,
        credentials?.csrfToken,
        account,
        profile,
        email
      );

      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },

    async session({ session, token, user }) {
      // sessiols = token.accessToken;
      // session.access_token = token.access_token as string;

      return session;
    },

    async jwt({ token, account, profile }) {
      console.log("TOKEN", token, account);
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        // token.id = profile.id
      }
      return token;
    },
  },
};
