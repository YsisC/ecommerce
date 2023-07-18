import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";


import { dbUsers } from "../../../database";

// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  providers: [
    // ...add more providers here

    Credentials({
      name: "Custom Login",
      credentials: {
        email: {
          label: "Correo:",
          type: "email",
          placeholder: "correo@google.com",
        },
        password: {
          label: "Contraseña:",
          type: "password",
          placeholder: "Contraseña",
        },
      },
      async authorize(credentials) {
        console.log({ credentials });
        // return { name: 'Juan', correo: 'juan@google.com', role: 'admin' };

        return await dbUsers.checkUserEmailPassword(
          credentials!.email,
          credentials!.password
        );
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/login",
    newUser: "",
    error: '/auth/error', // Error code passed in query string as ?error=
  },
  jwt: {},
  session: {
    maxAge: 2592000,
    strategy: "jwt",
    updateAge: 86400,
  },
 
  callbacks: {
    async jwt({ token, account, user }) {
      
      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case "oauth":
            token.user = await dbUsers.oAUthToDbUser(
              user?.email || "",
              user?.name || ""
            );
            break;

          case "credentials":
            token.user = user;
            break;
        }
      }

      return token;
    },

    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    },
  },
};

export default NextAuth(authOptions);
