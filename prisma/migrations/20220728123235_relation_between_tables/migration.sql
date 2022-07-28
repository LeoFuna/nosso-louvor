/*
  Warnings:

  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `roleId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `UserMusicRole` (
    `userId` INTEGER NOT NULL,
    `musicRoleId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `musicRoleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserScale` (
    `scaleId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `musicRoleId` INTEGER NOT NULL,

    PRIMARY KEY (`scaleId`, `userId`, `musicRoleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMusicRole` ADD CONSTRAINT `UserMusicRole_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMusicRole` ADD CONSTRAINT `UserMusicRole_musicRoleId_fkey` FOREIGN KEY (`musicRoleId`) REFERENCES `MusicRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserScale` ADD CONSTRAINT `UserScale_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserScale` ADD CONSTRAINT `UserScale_musicRoleId_fkey` FOREIGN KEY (`musicRoleId`) REFERENCES `MusicRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserScale` ADD CONSTRAINT `UserScale_scaleId_fkey` FOREIGN KEY (`scaleId`) REFERENCES `Scale`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
