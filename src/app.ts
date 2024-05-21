import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to our e-commerce backend Server!!");
});

app.all('*', (req, res) => {
  res.status(400).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
