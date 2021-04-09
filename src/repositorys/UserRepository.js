import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export class UserRepository {
  async findById(id) {
    try {
      return prisma.user.findUnique({ where: { id } });
    } catch (err) {
      console.error(err);
    }
  }

  async findByUserId(userId) {
    try {
      return prisma.user.findUnique({ where: { userId } });
    } catch (err) {
      console.error(err);
    }
  }

  async create(data) {
    const { password, userId, name, email } = data;
    try {
      return prisma.user.create({ data: { password, userId, name, email } });
    } catch (err) {
      console.error(err);
    }
  }
}
