import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../prisma";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

type LoginUser = {
  username: string,
  password: string,
}

const secret = 'mysecret';
const maxAge = 24 * 60 * 60;

const authorize = async (credentials: LoginUser | undefined): Promise<User | null> => {
  try {
    if (!credentials?.username || !credentials?.password) return null;
    // PEGAR OS DADOS DO USER NO FIREBASE E RETORNMAR
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
  ],
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
    session({ session }) {
      const currentSession = session;
      currentSession.user = { name: 'Leonardo' };
      return currentSession;
    },
  },
});
