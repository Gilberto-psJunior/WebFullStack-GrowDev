-- CreateTable
CREATE TABLE "Supplier" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "evaluation" INTEGER NOT NULL,
    "creation_date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);
