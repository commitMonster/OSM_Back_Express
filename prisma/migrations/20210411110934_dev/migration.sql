/*
  Warnings:

  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notice_event_image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `notice_event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `notice_event_image` DROP FOREIGN KEY `notice_event_image_ibfk_1`;

-- DropForeignKey
ALTER TABLE `notice_event_image` DROP FOREIGN KEY `notice_event_image_ibfk_2`;

-- DropForeignKey
ALTER TABLE `product_image` DROP FOREIGN KEY `product_image_ibfk_1`;

-- DropForeignKey
ALTER TABLE `product_image` DROP FOREIGN KEY `product_image_ibfk_2`;

-- AlterTable
ALTER TABLE `notice_event` ADD COLUMN     `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN     `image` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `image`;

-- DropTable
DROP TABLE `notice_event_image`;

-- DropTable
DROP TABLE `product_image`;
