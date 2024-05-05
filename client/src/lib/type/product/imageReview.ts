export interface ImageReview {
  result: boolean;
  data: Data;
}

interface Data {
  contents: Content[];
  timestamp: number;
  page: number;
  totalCount: number;
  last: boolean;
}

export interface Content {
  id: string;
  createdAt: string;
  displayStatus: string;
  orderId: number;
  productId: number;
  domain: string;
  optionDisplayable: boolean;
  optionText: string;
  imageViews: ImageView[];
  content: string;
  ratingView: RatingView;
  writer: Writer;
  likeView: LikeView;
  storeRecommendationReviewView: StoreRecommendationReviewView;
  productStatus: string;
  productDetailReviewDiscountView: ProductDetailReviewDiscountView;
  previewProduct: PreviewProduct;
  storeProfileImage: string;
  hasAdditionalOptionPrice: boolean;
  categoryId: string;
  categoryName: string;
  storeId: number;
  isTalkdealProduct: boolean;
}

interface ImageView {
  width: number;
  height: number;
  originUrl: string;
  originThumbnailUrl: string;
  previewThumbnailUrl: string;
  detailThumbnailUrl: string;
  bubbleThumbnailUrl: string;
}

interface RatingView {
  productStarRating: number;
  deliveryStarRating: number;
  productStarRatingName: string;
  deliveryStarRatingName: string;
}

interface Writer {
  backgroundColor?: string;
  displayName: string;
  imageUrl: string;
}

interface LikeView {
  viewerLiked: boolean;
  likeCount: number;
  likeUrl: string;
}

interface StoreRecommendationReviewView {
  used: boolean;
  pointPaid: boolean;
}

interface ProductDetailReviewDiscountView {
  discountType: string;
  originalPrice: number;
  totalDiscountedPrice: number;
}

interface PreviewProduct {
  name: string;
  imageUrl: string;
  storeName: string;
  linkUrl: string;
  isAdult: boolean;
}
