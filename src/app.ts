import cors from 'cors';
import express, { Application } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api', ProductRoutes);

export default app;
