import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export const findById = async id => {
  try {
    return prisma.user.findUnique({ where: { id } });
  } catch (err) {
    console.error(err);
  }
};

export const findByUserId = async userId => {
  try {
    return prisma.user.findUnique({ where: { userId } });
  } catch (err) {
    console.error(err);
  }
};

export const create = async data => {
  const { password, userId, name, email, address } = data;
  try {
    return prisma.user.create({ data: { password, userId, name, email, address } });
  } catch (err) {
    console.error(err);
  }
};
