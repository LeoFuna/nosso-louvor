import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import db from "../../../prisma";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { firebaseConfig } from "imports/core/services/firebase";

type LoginUser = {
  username: string,
  password: string,
}

const secret = 'mysecret';
const maxAge = 24 * 60 * 60;

const authorize = async (credentials: LoginUser | undefined): Promise<User | null> => {
  try {
    if (!credentials?.username || !credentials?.password) return null;

    const user = await db.user.findUnique({
      where: { username: credentials.username },
    });
    if (user && (user?.password && (await bcrypt.compare(credentials.password, user.password)))) {
      return user;
    }

    return null;
  } catch(e) {
    console.error('Error: ', e);
    return null;
  }
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Minha Credential',
      credentials: {
        username: { label: 'Usuário', type: 'text' },
        password: { label: 'Senha', type: 'password' },
      },
      authorize,
    }),
    GoogleProvider({
      clientId: '471060799256-ib653mbmtllogtgqlcud6qkhmbs0mf8c.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  adapter: FirestoreAdapter(firebaseConfig),
  secret,
  jwt: {
    secret,
    maxAge,
  },
  session: {
    maxAge,
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
  callbacks: {

  }
});
