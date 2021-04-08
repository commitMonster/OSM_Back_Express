-- CreateTable
CREATE TABLE `image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notice_event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `type` INTEGER NOT NULL,
    `activation` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notice_event_image` (
    `notice_event_id` INTEGER NOT NULL,
    `image_id` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
INDEX `notice_event_image_image_fk`(`image_id`),
INDEX `notice_event_image_notice_event_fk`(`notice_event_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `count` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_image` (
    `product_id` INTEGER NOT NULL,
    `image_id` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
INDEX `product_image_image_fk`(`image_id`),
INDEX `product_image_product_fk`(`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(100) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `is_admin` BOOLEAN NOT NULL,
    `address` VARCHAR(300),
UNIQUE INDEX `user.user_id_unique`(`user_id`),
UNIQUE INDEX `user.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `notice_event_image` ADD FOREIGN KEY (`image_id`) REFERENCES `image`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notice_event_image` ADD FOREIGN KEY (`notice_event_id`) REFERENCES `notice_event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_image` ADD FOREIGN KEY (`image_id`) REFERENCES `image`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_image` ADD FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
