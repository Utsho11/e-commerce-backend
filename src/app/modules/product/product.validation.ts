import { z } from 'zod';

const variantsValidationSchema = z.object({
  type: z.string({ message: 'Please insert a type' }),
  value: z.string({ message: 'Please insert a value' }),
});

const inventoryValidationSchema = z.object({
  quantity: z.number({ message: 'Please insert a quantity' }),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string({ message: 'Please insert a name' }),
  description: z.string({ message: 'Please insert a description' }),
  price: z.number({ message: 'Please insert a price' }),
  category: z.string({ message: 'Please insert a catagory' }),
  tags: z.array(z.string({ message: 'Please insert a tags' })),
  variants: z.array(variantsValidationSchema),
  inventory: inventoryValidationSchema,
  productImg: z.string().optional(),
});

export default productValidationSchema;
