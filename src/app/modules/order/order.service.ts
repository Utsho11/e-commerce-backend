import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: TOrder) => {
  const { productId, quantity } = orderData;

  const product = await Product.findById(productId);

  if (!product) {
    throw new Error('Order not found');
  }

  if (product.inventory.quantity < quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  product.inventory.quantity -= quantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  await product.save();

  const result = await Order.create(orderData);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmailFromDB = async (email: string) => {
  const result = await Order.find({ email: email });
  if (result.length === 0) {
    throw new Error('No order found for this email: ' + email);
  }

  return result;
};
export const OrderService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getOrderByEmailFromDB,
};
