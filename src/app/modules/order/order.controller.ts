import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { ProductService } from '../product/product.service';

// 1. create an order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    // checking if the product exists in database or not
    const product = await ProductService.getSingleProductFromDB(
      orderData.product,
    );
    if (!product) {
      res.status(404).json({
        message: 'Product is Not Found',
        status: false,
      });
    } else if (product.quantity < orderData.quantity) {
      res.status(400).json({
        message: 'Insufficient Stock',
        status: false,
      });
    } else {
      // Calling Service Function To Create an order
      const result = await OrderService.createAnOrderInDB(orderData);
      res.status(200).json({
        message: 'Order Created successfully',
        status: true,
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      message: 'Validation Failed',
      status: false,
      error: err,
      stack: err.stack,
    });
  }
};

// 2. get revenue from the order
const getRevenue = async (req: Request, res: Response) => {
  try {
    // Calling Service Function To Get Revenue
    const result = await OrderService.getRevenueFromDB();
    res.status(200).json({
      message: 'Revenue Obtained',
      status: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      message: 'Validation Failed',
      status: false,
      error: err,
      stack: err.stack,
    });
  }
};

export const OrderController = {
  createOrder,
  getRevenue,
};
