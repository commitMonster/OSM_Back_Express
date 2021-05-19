import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async data => {
  return prisma.destination.create({ data });
};

export const findAll = async () => {
  return prisma.destination.findMany({
    orderBy: [{ isDefault: 'desc' }],
  });
};

export const updateById = async (id, data) => {
  return prisma.destination.update({
    where: { id },
    data,
  });
};

export const deleteById = async id => {
  return prisma.destination.delete({ where: { id } });
};
