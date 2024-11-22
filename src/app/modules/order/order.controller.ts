import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { ProductModel } from '../product/product.model';
import { ProductService } from '../product/product.service';

// create a product
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    // console.log(orderData);
    const product = await ProductService.getSingleProductFromDB(
      orderData.product,
    );
    if (!product) {
      res.status(404).json({
        message: 'Product is Not Found',
        success: false,
      });
    } else if (product.quantity < orderData.quantity) {
      // console.log(product.quantity, orderData.quantity);
      res.status(400).json({
        message: 'Insufficient Stock',
        success: false,
      });
    } else {
      const result = await OrderService.createAnOrderInDB(orderData);
      res.status(200).json({
        success: true,
        message: 'Order Created Successfully',
        data: result,
      });
    }
  } catch (err: unknown) {
    // console.log(err);
    res.status(500).json({
      message: 'Validation Failed',
      success: false,
      error: err,
    });
  }
};

export const OrderController = {
  createOrder,
};
