import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();
// create an Order route
router.post('/orders', OrderController.createOrder);
// get revenue route
router.get('/orders/revenue', OrderController.getRevenue);

export const OrderRoutes = router;
