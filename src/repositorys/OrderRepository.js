import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async data => {
  try {
    return prisma.order.create({ data });
  } catch (err) {
    console.error(err);
  }
};

export const findAllByUserIdAndStateIsWait = async userId => {
  try {
    return prisma.order.findMany({
      where: { userId, state: 'wait' },
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateByByUserIdAndStateIsWait = async userId => {
  try {
    return prisma.order.updateMany({
      where: { userId, state: 'wait' },
      data: { state: 'approve' },
    });
  } catch (err) {
    console.error(err);
  }
};
