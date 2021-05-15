import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findByProductId = async productId => {
  return await prisma.review.findMany({
    where: { productId },
  });
};
