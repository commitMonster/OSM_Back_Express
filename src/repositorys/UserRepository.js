import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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

export const findByEmail = async email => {
  try {
    return prisma.user.findUnique({ where: { email } });
  } catch (err) {
    console.error(err);
  }
};

export const create = async data => {
  const { password, userId, name, address } = data;
  try {
    return prisma.user.create({ data: { password, userId, name, address } });
  } catch (err) {
    console.error(err);
  }
};
