import NextAuth, { DefaultSession } from "next-auth";

export enum Role {
  user = "user",
  admin = "admin",
}
declare module "next-auth" {
  interface User {
    role?: Role;
    subscribed: boolean;
  }

  interface Session extends DefaultSession {
    user?: {
      role?: string;
    };
    access_token?: string;
  }

  interface JWT {
    role?: Role;
    subscribed: boolean;
  }
}
