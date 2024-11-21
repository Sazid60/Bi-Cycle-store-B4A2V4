import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    // console.log(productData);
    // service function will be called from here
    const result = await ProductService.createProductInDB(productData);
    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: result,
    });
  } catch (err: any) {
    // console.log(err);
    res.status(500).json({
      message: 'Validation Failed',
      success: false,
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
};
