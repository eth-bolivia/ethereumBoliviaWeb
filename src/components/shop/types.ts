// components/shop/types.ts

export interface MerchItemData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number
}

export interface CartItem extends MerchItemData {
  size: string;
  currentPrice: number;
}