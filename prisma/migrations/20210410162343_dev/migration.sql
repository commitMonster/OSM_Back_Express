/*
  Warnings:

  - Added the required column `start_date` to the `notice_event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_date` to the `notice_event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notice_event` ADD COLUMN     `start_date` DATETIME(3) NOT NULL,
    ADD COLUMN     `end_date` DATETIME(3) NOT NULL;
