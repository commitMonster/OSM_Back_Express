/*
  Warnings:

  - You are about to alter the column `is_default` on the `destination` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `destination` MODIFY `is_default` BOOLEAN NOT NULL;
