import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();

// will call controller function
// create a product
router.post('/products', ProductController.createProduct);

// get all product
router.get('/products', ProductController.getProducts);

export const ProductRoutes = router;
