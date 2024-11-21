import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';

const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is Running',
  });
});

export default app;
