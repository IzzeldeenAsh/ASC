-- CreateTable
CREATE TABLE "ContactSubmission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "howWeCanHelp" TEXT NOT NULL,
    "sector" TEXT,
    "service" TEXT,
    "subservice" TEXT,
    "positionType" TEXT,
    "consultingField" TEXT,
    "position" TEXT,
    "otherPosition" TEXT,
    "resume" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);
