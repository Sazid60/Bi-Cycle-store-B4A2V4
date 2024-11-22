import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

//  create an order
const createAnOrderInDB = async (orderData: TOrder) => {
  const productDetails = await ProductModel.findById(orderData.product);

  // console.log(productDetails);
  if (productDetails) {
    const updatedQuantity: number =
      productDetails.quantity - orderData.quantity;

    await ProductModel.findByIdAndUpdate(
      orderData.product,
      {
        $inc: { quantity: -orderData.quantity },
        $set: { inStock: updatedQuantity > 0 },
      },
      { new: true },
    );
  }
  const result = await OrderModel.create(orderData);
  return result;
};

//  get revenue from db
const getRevenueFromDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } },
    },
    { $project: { _id: 0, totalRevenue: 1 } },
  ]);
  return result;
};

export const OrderService = {
  createAnOrderInDB,
  getRevenueFromDB,
};
