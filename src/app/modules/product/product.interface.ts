import { Model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export type TVariants = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: TInventory;
  productImg?: string;
};

export interface ProductModel extends Model<TProduct> {}
