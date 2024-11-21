import { Request, Response } from 'express';
import { ProductService } from './product.service';

// create a product
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // console.log(err);
    res.status(500).json({
      message: 'Validation Failed',
      success: false,
      error: err,
    });
  }
};

// get all products or searched products

// here  Promise<void> is used to say that it will return nothing
const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { searchTerm } = req.query;
    // console.log(searchTerm);

    let result;
    if (searchTerm) {
      result = await ProductService.getAllSearchedProductsFromDB(
        searchTerm as string,
      );
      // console.log(result);
    } else {
      result = await ProductService.getAllProductsFromDB();
    }

    if (result.length === 0) {
      res.status(404).json({
        success: false,
        message: 'No products found',
        data: [],
      });
    }
    res.status(200).json({
      success: true,
      message: 'Got products successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      message: 'No Data Found',
      success: false,
      error: err,
    });
  }
};

//  get a single product

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Got The Expected Product',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      message: 'No Data Found',
      success: false,
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getProducts,
  getSingleProduct,
};
