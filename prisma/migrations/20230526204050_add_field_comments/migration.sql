-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "comment" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "refresh_token" DROP NOT NULL;
