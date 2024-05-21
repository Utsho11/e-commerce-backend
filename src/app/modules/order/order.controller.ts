import { Request, Response } from 'express';
import OrderValidationSchema from './order.validation';
import { OrderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  const { order: orderData } = req.body;
  try {
    const zodParseData = OrderValidationSchema.parse(orderData);

    const result = await OrderService.createOrderIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error || 'Something went wrong.',
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  const email = req.query.email as string;

  try {
    if (!email) {
      const result = await OrderService.getAllOrdersFromDB();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    } else {
      const result = await OrderService.getOrderByEmailFromDB(email);
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user email!`,
        data: result,
      });
    }
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error || 'Something went wrong.',
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
