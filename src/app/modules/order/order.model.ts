import { Schema, model } from 'mongoose';
import { OrderModel, TOrder } from './order.interface';

const orderSchema = new Schema<TOrder, OrderModel>({
  email: { type: String },
  productId: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

export const Order = model<TOrder, OrderModel>('Order', orderSchema);
