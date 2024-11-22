import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

//  create an order
const createAnOrderInDB = async (orderData: TOrder) => {
  const result = await OrderModel.create(orderData);
  return result;
};

export const OrderService = {
  createAnOrderInDB,
};
