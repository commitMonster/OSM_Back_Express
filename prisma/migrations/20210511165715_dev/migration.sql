/*
  Warnings:

  - Added the required column `score` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `score` INTEGER NOT NULL;
