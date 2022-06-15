// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../prisma';

type Data = {
  allUsers: any
}

async function list(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const allUsers = await db.user.findMany();
  res.status(200).json({ allUsers });
}


export default {
  list,
};
