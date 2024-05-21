import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api",)

export default app;
