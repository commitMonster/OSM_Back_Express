import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findAllByOrderList = async orderList => {
  try {
    return prisma.basket.findMany({
      where: {
        id: { in: orderList },
      },
      include: {
        product: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
