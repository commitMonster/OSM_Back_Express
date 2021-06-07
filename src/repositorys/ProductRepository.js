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

export const updateCountById = async (id, count) => {
  return prisma.product.update({
    where: { id },
    data: { stock: count },
  });
};

export const updateScoreById = async (id, score) => {
  return prisma.product.update({
    where: { id },
    data: { score },
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
      review: {
        include: { user: true },
      },
    },
  });
};

export const findAllByWhereOptionOrderByOrderOption = async (pagination, whereOption, orderOption) => {
  return await prisma.product.findMany({
    skip: pagination.skip,
    take: pagination.take,
    where: {
      AND: whereOption,
    },
    include: {
      _count: {
        select: { review: true },
      },
    },
    orderBy: orderOption,
  });
};

export const countByWhereOptionOrderByOrderOption = async whereOption => {
  return await prisma.product.count({
    where: {
      AND: whereOption,
    },
  });
};

export const findOrderByCreatedAtLimitFive = async () => {
  return await prisma.product.findMany({
    where: { isDeleted: false },
    orderBy: { createdAt: 'desc' },
    take: 5,
  });
};

export const findOrderByScoreLimitFive = async () => {
  return await prisma.product.findMany({
    where: { isDeleted: false },
    orderBy: { score: 'desc' },
    take: 5,
  });
};
