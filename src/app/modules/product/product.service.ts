import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

// create a product

const createProductInDB = async (productData: TProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

// get all product

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// get searched product
const getAllSearchedProductsFromDB = async (searchTerm: string) => {
  // console.log(searchTerm);

  // used regex is used here to match partially with the data
  const result = await ProductModel.find({
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { brand: { $regex: searchTerm, $options: 'i' } },
      { type: { $regex: searchTerm, $options: 'i' } },
    ],
  });
  // console.log(result);
  return result;
};

// get single product from db
const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

// update a single product in db
const updateAProductInDB = async (
  productId: string,
  updates: Partial<TProduct>,
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, updates, {
    new: true,
  });
  return result;
};

// delete a product from db
const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: productId });
  return result;
};
export const ProductService = {
  createProductInDB,
  getAllProductsFromDB,
  getAllSearchedProductsFromDB,
  getSingleProductFromDB,
  updateAProductInDB,
  deleteProductFromDB,
};
