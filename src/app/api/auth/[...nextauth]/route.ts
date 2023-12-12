import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const user = {
          id: "1",
          username: "John Doe",
          email: "user@email.com",
          password: "123",
          role: "admin",
        };

        const isValidEmail = credentials?.email === user.email;
        const isValidPassword = credentials?.password === user.password;

        if (!isValidEmail || !isValidPassword) {
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const customUser = user as any;

      if (user) {
        token.id = customUser.id;
        token.username = customUser.username;
        token.email = customUser.email;
        token.role = customUser.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          username: token.username,
          email: token.email,
        },
      };
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
