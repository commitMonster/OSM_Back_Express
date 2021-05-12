/*
  Warnings:

  - Added the required column `delivery` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `delivery` INTEGER NOT NULL;
