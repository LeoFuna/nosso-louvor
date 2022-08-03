import express from 'express';
import { Role } from '@prisma/client';
import { STATUS_CODE } from 'imports/core/utils/status-code.utils';
import db from '../../../prisma';

const app = express();

type Roles = {
  roles: Role[]
}

app.get('/api/roles', async (_req: express.Request, res: express.Response<Roles>) => {
  const roles = await db.role.findMany();
  res.status(STATUS_CODE.OK).json({ roles });
});

export default app;
