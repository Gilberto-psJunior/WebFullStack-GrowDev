-- CreateTable
CREATE TABLE "Store" (
    "cnpj" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "branchsQuantity" INTEGER NOT NULL,
    "OpenTime" TIME NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("cnpj")
);
