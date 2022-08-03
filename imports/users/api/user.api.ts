// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../prisma';
import express from 'express';
import { STATUS_CODE } from 'imports/core/utils/status-code.utils';

type UserNoPassword = {
  id: number;
  username: string;
  name: string;
  lastName: string;
  roleId: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type Users = {
  allUsers: UserNoPassword[],
}

const app = express();

app.get('/api/users', async (_req: express.Request, res: express.Response<Users>) => {
  const allUsers = await db.user.findMany();
  const usersWithoutPassword = allUsers.map((user) => {
    const { password, ...userDataNoPassword } = user;
    return userDataNoPassword;
  });
  res.status(STATUS_CODE.OK).json({ allUsers: usersWithoutPassword });
});
app.post('/api/users', async (req: express.Request, res: express.Response<UserNoPassword>) => {
  const { username, password, name, lastName, roleId } = req.body;
  const createResponse = await db.user.create({
    data: {
      username,
      password,
      name,
      lastName,
      roleId,
    },
  });
  res.status(STATUS_CODE.CREATED).json(createResponse);
});

export default app;
