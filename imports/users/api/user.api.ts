// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../prisma';
import express from 'express';

type Data = {
  allUsers: any
}

const app = express();

app.get('/api/users', async (req: express.Request, res: express.Response<Data>) => {
  const allUsers = await db.user.findMany();
  res.status(200).json({ allUsers });
});

export default app;
