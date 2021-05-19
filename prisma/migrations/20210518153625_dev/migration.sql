-- CreateTable
CREATE TABLE `destination` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `main_address` VARCHAR(191) NOT NULL,
    `detail_address` VARCHAR(191) NOT NULL,
    `zone_number` VARCHAR(191) NOT NULL,
    `is_default` VARCHAR(191) NOT NULL,

    INDEX `destination_user_fk`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `destination` ADD FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
