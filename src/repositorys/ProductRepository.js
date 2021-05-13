import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async data => {
  return await prisma.product.create({ data });
};

export const updateById = async (id, data) => {
  return prisma.product.update({
    where: { id },
    data,
  });
};

export const deleteById = async id => {
  return await prisma.product.update({
    where: { id },
    data: { isDeleted: true },
  });
};

export const findById = async id => {
  return await prisma.product.findUnique({
    where: { id },
    include: {
      _count: {
        select: { review: true },
      },
    },
  });
};

export const findAllByWhereOptionOrderByOrderOption = async (whereOption, orderOption) => {
  return await prisma.product.findMany({
    where: {
      AND: whereOption,
    },
    include: {
      _count: {
        select: { review: true },
      },
    },
    orderBy: [orderOption],
  });
};
