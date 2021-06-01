import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async data => {
  try {
    return prisma.basket.create({ data });
  } catch (err) {
    console.error(err);
  }
};

export const findAllByUserId = async userId => {
  try {
    return prisma.basket.findMany({
      where: { userId, isDeleted: false },
      include: {
        product: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const findById = async id => {
  try {
    return prisma.basket.findUnique({ where: { id } });
  } catch (err) {
    console.error(err);
  }
};

export const findByUserIdAndProductId = async (userId, productId) => {
  try {
    return prisma.basket.findMany({ where: { userId, productId, isDeleted: false } });
  } catch (err) {
    console.error(err);
  }
};

export const updateByIdAndCount = async (id, count) => {
  try {
    return prisma.basket.update({ where: { id }, data: { count } });
  } catch (err) {
    console.error(err);
  }
};

export const deleteById = async id => {
  try {
    return prisma.basket.delete({ where: { id } });
  } catch (err) {
    console.error(err);
  }
};

export const deleteMany = async userId => {
  try {
    return prisma.basket.deleteMany({ where: { userId, isDeleted: false } });
  } catch (err) {
    console.error(err);
  }
};

export const deleteManyInOrder = async (userId, order) => {
  try {
    return prisma.basket.updateMany({
      where: {
        userId,
        id: {
          in: order,
        },
      },
      data: {
        isDeleted: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateIsDeletedManyInOrder = async (userId, order) => {
  try {
    return prisma.basket.updateMany({
      where: {
        userId,
        id: {
          in: order,
        },
      },
      data: {
        isDeleted: false,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const count = async userId => {
  try {
    return prisma.basket.count({ where: { AND: { userId, isDeleted: false } } });
  } catch (err) {
    console.error(err);
  }
};
