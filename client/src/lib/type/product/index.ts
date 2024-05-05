interface ImageData {
  imageRatio: string;
  images: string[];
  sharingImageUrl: string;
  affiliateSharingImageUrl: string;
}

interface Period {
  from: string;
  to: string;
}

interface TalkDeal {
  id: number;
  status: string;
  groupSize: number;
  period: Period;
  ongoingRoomCount: number;
  discountPrice: number;
  discountRate: number;
}

interface EventPeriod {
  from: string;
  to: string;
}

interface LiveBenefits {
  description: string;
  landingUrl: string;
  eventPeriod: EventPeriod;
}

interface Delivery {
  deliveryMethodType: string;
  optionalDeliveries: any[];
  deliveryFeeType: string;
  deliveryFeePaymentType: string;
  deliveryFee: number;
  bundleGroupAvailable: boolean;
  availableIsolatedArea: boolean;
  hasInstallationFee: boolean;
  deliveryDays: number;
}

interface Quantity {
  minPurchase: number;
  maxPurchase: number;
  maxPurchaseOfBuyer: number;
}

interface Review {
  topReviews: TopReview[];
  qnaCount: number;
  reviewCount: number;
  averageRating: number;
  totalProductStarRating: number;
  totalDeliveryStarRating: number;
  productPositivePercentage: number;
  deliveryPositivePercentage: number;
  productStar1Percentage: number;
  productStar2Percentage: number;
  productStar3Percentage: number;
  productStar4Percentage: number;
}

interface TopReview {
  id: string;
  content: string;
  productRating: number;
  deliveryRating: number;
  productStarRating: number;
  deliveryStarRating: number;
  best: boolean;
  writer: string;
  imageUrl: string;
  backgroundColor: string;
}

interface Banner {
  id: number;
  name: string;
  firstImageUrl: string;
  landingType: string;
  landingUrl: string;
  ad: boolean;
  remainSeconds: number;
}

interface SellerProductPoint {}

export interface Product {
  id: number;
  name: string;
  image: ImageData;
  status: string;
  description: string;
  instantOrder: boolean;
  talkDeal: TalkDeal;
  benefits: any[];
  liveBenefits: LiveBenefits;
  delivery: Delivery;
  taxDeduction: boolean;
  gift: {
    gift: string;
  };
  quantity: Quantity;
  adultOnly: boolean;
  isLiquor: boolean;
  minorPurchasable: boolean;
  booked: {
    booked: boolean;
  };
  notices: any[];
  reviewUnexposed: boolean;
  favorite: boolean;
  reviewCreatable: boolean;
  store: {
    id: number;
    name: string;
    domain: string;
    farmer: boolean;
    coverImage: string;
    profileImage: string;
    channelName: string;
    channelUrl: string;
    subscribed: boolean;
    fresh: boolean;
    trackId: string;
  };
  category: {
    id: string;
    name: string;
  };
  price: {
    standardPrice: number;
    discountedPrice: number;
    discountRate: number;
    minDiscountedPrice: number;
    maxDiscountedPrice: number;
    totalDiscountedPrice: number;
  };
  events: any[];
  review: Review;
  banners: Banner[];
  sellerProductPoint: SellerProductPoint;
  affiliate: boolean;
  expectedAccumulatePoint: number;
  preventCartOrder: boolean;
  shoppingReward: boolean;
}
