import { Request, Response } from 'express';
import { ProductService } from './product.service';

// 1. Create a product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    // Calling Service Function To Create a product
    const result = await ProductService.createProductInDB(productData);
    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      message: 'Validation Failed',
      success: false,
      error: err,
    });
  }
};

// 2. Get all products or searched products
const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { searchTerm } = req.query;

    let result;
    if (searchTerm) {
      // Calling Service Function To get searched data
      result = await ProductService.getAllSearchedProductsFromDB(
        searchTerm as string,
      );
    } else {
      // Calling Service Function To Get All Products Data
      result = await ProductService.getAllProductsFromDB();
    }

    // checks the if the result contains empty array
    if (result.length === 0) {
      res.status(404).json({
        message: 'No products found',
        status: true,
        data: [],
      });
    } else {
      res.status(200).json({
        message: 'Got products successfully',
        status: true,
        data: result,
      });
    }
  } catch (err: unknown) {
    res.status(500).json({
      message: 'Validation Error',
      status: false,
      error: err,
    });
  }
};

// 3. Get a single product

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // Calling Service Function To Get Single Product
    const result = await ProductService.getSingleProductFromDB(productId);
    // checks if the product exists in the the database or not
    if (!result) {
      res.status(404).json({
        message: 'Product not found',
        status: false,
      });
    } else {
      res.status(200).json({
        message: 'Bicycle retrieved successfully',
        status: true,
        data: result,
      });
    }
  } catch (err: unknown) {
    res.status(500).json({
      message: 'Validation Error',
      status: false,
      error: err,
    });
  }
};

// 4.Update a product

const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId } = req.params;
    // Calling Service Function To search for the expected product that is supposed to be updated
    const product = await ProductService.getSingleProductFromDB(productId);

    if (!product) {
      res.status(404).json({
        message: 'Product not found',
        status: false,
      });
    } else {
      const updates = req.body;
      // Calling Service Function To Update a Product
      const result = await ProductService.updateAProductInDB(
        productId,
        updates,
      );
      res.status(200).json({
        message: 'Bicycle updated successfully',
        status: true,
        data: result,
      });
    }
  } catch (err: unknown) {
    res.status(500).json({
      message: 'Validation Error',
      status: false,
      error: err,
    });
  }
};

// 5.Delete a product
const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId } = req.params;
    // Calling Service Function To Delete a Product
    const result = await ProductService.deleteProductFromDB(productId);

    if (!result) {
      res.status(404).json({
        message: 'Product not found',
        status: false,
        data: {},
      });
    } else {
      res.status(200).json({
        message: 'Bicycle deleted successfully',
        status: true,
        data: {},
      });
    }
  } catch (err: unknown) {
    res.status(500).json({
      message: 'Validation Error',
      status: false,
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
