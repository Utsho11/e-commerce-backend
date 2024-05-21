import { z } from 'zod';

const OrderValidationSchema = z.object({
  email: z.string().email("{VALUE} is not a valid email type."),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export default OrderValidationSchema;