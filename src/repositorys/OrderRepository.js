import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async data => {
  try {
    return prisma.order.create({ data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteById = async id => {
  try {
    return prisma.order.delete({ where: { id } });
  } catch (err) {
    console.error(err);
  }
};

export const findById = async id => {
  try {
    return prisma.order.findUnique({ where: { id } });
  } catch (err) {
    console.error(err);
  }
};

export const findAllByWhereOptionAndPagination = async (whereOption, pagination) => {
  try {
    return prisma.order.findMany({
      where: {
        AND: whereOption,
      },
      include: {
        user: {
          select: { Destination: true },
        },
      },
      orderBy: {
        creaetdAt: 'desc',
      },
      skip: pagination.skip,
      take: pagination.take,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateStateeById = async (id, state) => {
  try {
    return prisma.order.update({
      where: { id },
      data: { state },
    });
  } catch (err) {
    console.error(err);
  }
};

export const countAllByWhereOption = async whereOption => {
  try {
    return prisma.order.count({
      where: {
        AND: whereOption,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
