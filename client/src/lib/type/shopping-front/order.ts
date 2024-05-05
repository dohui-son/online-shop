export interface OrderForm {
  name: string;
  phone: string;
  address: string;
  detailAddress: string;
  deliveryRequest: string;
  point: number;
  paymentMethod: string;
  accumulatedPoint: number;
  totalPayment: number;
  discount: number;
  productCount: number;
  productId: string;
  productOption?: string;
}
