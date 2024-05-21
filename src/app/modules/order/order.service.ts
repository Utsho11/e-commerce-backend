import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: TOrder) => {
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
    throw new Error('No order found for email: ' + email);
  }

  return result;
};
export const OrderService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getOrderByEmailFromDB,
};
