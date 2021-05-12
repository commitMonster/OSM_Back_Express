-- CreateTable
CREATE TABLE `review` (
    `id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `score` INTEGER NOT NULL,
    `description` MEDIUMTEXT,

    INDEX `review_product_fk`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `review` ADD FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
