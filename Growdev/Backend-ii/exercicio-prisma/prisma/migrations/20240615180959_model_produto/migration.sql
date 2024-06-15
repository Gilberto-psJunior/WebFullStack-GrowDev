-- CreateTable
CREATE TABLE "Products" (
    "id" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "product_type" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "disponibility" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
