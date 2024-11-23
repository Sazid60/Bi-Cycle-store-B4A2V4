import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

//  create an order function
const createAnOrderInDB = async (orderData: TOrder) => {
  const productDetails = await ProductModel.findById(orderData.product);

  if (!productDetails) {
    throw new Error('Product Not Found');
  }

  const totalPrice: number = productDetails.price * orderData.quantity;
  const result = await OrderModel.create({ ...orderData, totalPrice });

  if (result) {
    const updatedQuantity: number =
      productDetails.quantity - orderData.quantity;

    // this is the logic for decreasing the quantity and changing status while order is placed
    await ProductModel.findByIdAndUpdate(
      orderData.product,
      {
        $inc: { quantity: updatedQuantity },
        $set: { inStock: updatedQuantity > 0 },
      },
      { new: true },
    );
  }
  return result;
};

//  get revenue from db function
const getRevenueFromDB = async () => {
  // this is the logic for going through all the documents and grabbing the price to calculate revenue
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
