-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profile" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentDisplayPeriod" (
    "id" INTEGER NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,

    CONSTRAINT "ContentDisplayPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepresentativeProduct" (
    "id" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "productImageOrigin" TEXT,
    "originalPrice" INTEGER,
    "discountedPrice" INTEGER NOT NULL,
    "discountRate" INTEGER,
    "groupDiscountStatus" TEXT,
    "groupDiscountRate" INTEGER,
    "groupDiscountedPrice" INTEGER,
    "groupDiscountWillClosed" BOOLEAN,
    "groupDiscountUserCount" INTEGER,
    "groupDiscountStartAt" INTEGER,
    "groupDiscountEndAt" INTEGER,
    "alarmDisplaying" BOOLEAN,
    "groupDiscountRemainSeconds" INTEGER,
    "storeId" INTEGER NOT NULL,
    "storeName" TEXT NOT NULL,
    "storeDomain" TEXT,
    "storeProfileImage" TEXT NOT NULL,
    "new" BOOLEAN,
    "linkPath" TEXT NOT NULL,
    "storeLinkPath" TEXT NOT NULL,
    "plusFriendSubscriberExclusive" BOOLEAN,
    "farmer" BOOLEAN,
    "deliveryFeeType" TEXT,
    "freeDelivery" BOOLEAN NOT NULL,
    "reviewCount" INTEGER,
    "productPositivePercentage" INTEGER,
    "imageRatio" TEXT,
    "displayedSaleStatus" TEXT,
    "categoryId" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "hasAdditionalOptionPrice" BOOLEAN,
    "profiles" TEXT[],
    "totalSaleCount" INTEGER,
    "trackId" TEXT,
    "affiliate" BOOLEAN,
    "sharingImageUrl" TEXT,
    "affiliateSharingImageUrl" TEXT,
    "onAir" BOOLEAN,
    "isBrandTalkStore" BOOLEAN,
    "contentId" INTEGER,
    "type" TEXT,
    "landingUrl" TEXT NOT NULL,
    "mainCopy" TEXT,
    "label" TEXT,
    "imageUrl" TEXT NOT NULL,
    "imageUrlOrigin" TEXT,
    "logoImageUrl" TEXT,
    "contentRemainDays" INTEGER,
    "remainDays" INTEGER,
    "contentOpenDt" TEXT,
    "contentCloseDt" TEXT,
    "likeProductCount" INTEGER,
    "isLiked" BOOLEAN,
    "score" INTEGER,

    CONSTRAINT "RepresentativeProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupDiscountPeriod" (
    "id" INTEGER NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,

    CONSTRAINT "GroupDiscountPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT,
    "instantOrder" BOOLEAN,
    "adultOnly" BOOLEAN,
    "isLiquor" BOOLEAN,
    "minorPurchasable" BOOLEAN,
    "reviewUnexposed" BOOLEAN,
    "favorite" BOOLEAN,
    "reviewCreatable" BOOLEAN,
    "affiliate" BOOLEAN,
    "expectedAccumulatePoint" INTEGER,
    "preventCartOrder" BOOLEAN,
    "shoppingReward" BOOLEAN,
    "taxDeduction" BOOLEAN,
    "storeId" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quantity" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "minPurchase" INTEGER NOT NULL,
    "maxPurchase" INTEGER NOT NULL,
    "maxPurchaseOfBuyer" INTEGER NOT NULL,

    CONSTRAINT "Quantity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booked" (
    "productId" INTEGER NOT NULL,
    "booked" BOOLEAN NOT NULL,

    CONSTRAINT "Booked_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "imageRatio" TEXT NOT NULL,
    "images" TEXT[],
    "sharingImageUrl" TEXT NOT NULL,
    "affiliateSharingImageUrl" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalkDeal" (
    "id" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "groupSize" INTEGER NOT NULL,
    "period" TIMESTAMP(3)[],
    "ongoingRoomCount" INTEGER NOT NULL,
    "discountPrice" INTEGER NOT NULL,
    "discountRate" INTEGER NOT NULL,

    CONSTRAINT "TalkDeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "productId" INTEGER NOT NULL,
    "deliveryMethodType" TEXT NOT NULL,
    "optionalDeliveries" TEXT[],
    "deliveryFeeType" TEXT NOT NULL,
    "deliveryFeePaymentType" TEXT NOT NULL,
    "deliveryFee" INTEGER NOT NULL,
    "bundleGroupAvailable" BOOLEAN NOT NULL,
    "availableIsolatedArea" BOOLEAN NOT NULL,
    "hasInstallationFee" BOOLEAN NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "OriginArea" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT,
    "others" BOOLEAN,

    CONSTRAINT "OriginArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gift" (
    "productId" INTEGER NOT NULL,
    "gift" TEXT NOT NULL,

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "farmer" BOOLEAN NOT NULL,
    "coverImage" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "channelName" TEXT NOT NULL,
    "channelUrl" TEXT NOT NULL,
    "trackId" TEXT,
    "subscribed" BOOLEAN,
    "fresh" BOOLEAN,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "productId" INTEGER NOT NULL,
    "standardPrice" INTEGER NOT NULL,
    "discountedPrice" INTEGER NOT NULL,
    "discountRate" INTEGER NOT NULL,
    "minDiscountedPrice" INTEGER NOT NULL,
    "maxDiscountedPrice" INTEGER NOT NULL,
    "totalDiscountedPrice" INTEGER NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Review" (
    "productId" INTEGER NOT NULL,
    "qnaCount" INTEGER NOT NULL,
    "reviewCount" INTEGER NOT NULL,
    "averageRating" INTEGER NOT NULL,
    "totalProductStarRating" INTEGER NOT NULL,
    "totalDeliveryStarRating" INTEGER NOT NULL,
    "productPositivePercentage" INTEGER NOT NULL,
    "deliveryPositivePercentage" INTEGER NOT NULL,
    "productStar1Percentage" INTEGER NOT NULL,
    "productStar2Percentage" INTEGER NOT NULL,
    "productStar3Percentage" INTEGER NOT NULL,
    "productStar4Percentage" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "TopReview" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "productRating" INTEGER NOT NULL,
    "deliveryRating" INTEGER NOT NULL,
    "productStarRating" INTEGER NOT NULL,
    "deliveryStarRating" INTEGER NOT NULL,
    "best" BOOLEAN NOT NULL,
    "writer" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "backgroundColor" TEXT,

    CONSTRAINT "TopReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "firstImageUrl" TEXT NOT NULL,
    "landingType" TEXT NOT NULL,
    "landingUrl" TEXT NOT NULL,
    "ad" BOOLEAN NOT NULL,
    "remainSeconds" INTEGER NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Quantity_productId_key" ON "Quantity"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "TalkDeal_productId_key" ON "TalkDeal"("productId");

-- AddForeignKey
ALTER TABLE "ContentDisplayPeriod" ADD CONSTRAINT "ContentDisplayPeriod_id_fkey" FOREIGN KEY ("id") REFERENCES "RepresentativeProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupDiscountPeriod" ADD CONSTRAINT "GroupDiscountPeriod_id_fkey" FOREIGN KEY ("id") REFERENCES "RepresentativeProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quantity" ADD CONSTRAINT "Quantity_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booked" ADD CONSTRAINT "Booked_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalkDeal" ADD CONSTRAINT "TalkDeal_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OriginArea" ADD CONSTRAINT "OriginArea_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopReview" ADD CONSTRAINT "TopReview_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Banner" ADD CONSTRAINT "Banner_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
