// components/shop/types.ts

export interface MerchItemData {
  id: string;
  name: string;
  description: string;
  imageUrl: Array<string>;
  extra: Array<string>;
  price: number
}

export interface CartItem extends MerchItemData {
  selectedFeature?: string;
  currentPrice: number;
}