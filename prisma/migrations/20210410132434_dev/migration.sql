-- AlterTable
ALTER TABLE `user` MODIFY `password` VARCHAR(100) NOT NULL,
    MODIFY `is_admin` BOOLEAN NOT NULL DEFAULT false;
