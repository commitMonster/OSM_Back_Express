import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findByProductId = async productId => {
  return await prisma.review.findMany({
    where: { productId },
  });
};

export const create = async data => {
  return await prisma.review.create({ data });
};

export const countAll = async () => {
  return await prisma.review.count();
};
