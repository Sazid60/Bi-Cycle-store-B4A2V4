import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();
// create an Order
router.post('/orders', OrderController.createOrder);
// get revenue
router.get('/orders/revenue', OrderController.getRevenue);

export const OrderRoutes = router;
