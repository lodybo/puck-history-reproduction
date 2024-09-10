import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare global {
  // eslint-disable-next-line no-var
  var __db__: PrismaClient;
}

function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

if (process.env.NODE_ENV === 'production') {
  prisma = getPrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = getPrismaClient();
  }

  prisma = global.__db__;
}

export default prisma;
