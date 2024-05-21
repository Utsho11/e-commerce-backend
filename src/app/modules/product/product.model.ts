import { Schema, model } from 'mongoose';
import {
  ProductModel,
  TInventory,
  TProduct,
  TVariants,
} from './product.interface';

const variantsSchema = new Schema<TVariants>({
  type: { type: String, required: true },
  value: { type: String, trim: true, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct, ProductModel>({
  name: { type: String, trim: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantsSchema], required: true },
  inventory: { type: inventorySchema, required: true },
  productImg: { type: String},
});



export const Product = model<TProduct, ProductModel>('Product', productSchema);

