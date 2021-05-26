import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async data => {
  try {
    return prisma.noticeEvent.create({ data });
  } catch (err) {
    console.error(err);
  }
};

export const findAllOrderBy = async sort => {
  try {
    return prisma.noticeEvent.findMany({
      orderBy: [{ endDate: sort }],
    });
  } catch (err) {
    console.error(err);
  }
};

export const findAllBetween = async (start, end, sort) => {
  try {
    return prisma.noticeEvent.findMany({
      orderBy: [{ endDate: sort }],
      where: {
        startDate: { lte: end },
        endDate: { gte: start },
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const findAllBetweenAndActive = async (start, end, sort) => {
  try {
    return prisma.noticeEvent.findMany({
      orderBy: [{ endDate: sort }],
      where: {
        startDate: { lte: end },
        endDate: { gte: start },
        activation: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const findAllByEndDate = async (end, sort) => {
  try {
    return prisma.noticeEvent.findMany({
      orderBy: [{ endDate: sort }],
      where: {
        endDate: { lte: end },
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const findById = async id => {
  try {
    return prisma.noticeEvent.findUnique({ where: { id } });
  } catch (err) {
    console.error(err);
  }
};

export const updateById = async (id, data) => {
  try {
    return prisma.noticeEvent.update({
      where: { id },
      data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateActivationById = async (id, activation) => {
  try {
    return prisma.noticeEvent.update({
      where: { id },
      data: { activation },
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteById = async id => {
  try {
    return prisma.noticeEvent.delete({ where: { id } });
  } catch (err) {
    console.error(err);
  }
};
