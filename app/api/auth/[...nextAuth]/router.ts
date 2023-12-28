import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "My Provider Name",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
      },
      async authorize(credentials, request) {
        const user = { id: "1", name: "Sanjay", email: "sanjay@abc" };
        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
