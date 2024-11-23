import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

// Creating a Schema corresponding to the document interface.

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: false,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: '{VALUE} is not a valid email',
      },
    },
    product: {
      type: String,
      required: [true, 'Id is Required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity Is Needed'],
      min: [1, 'Quantity must be greater than 0'],
    },
    totalPrice: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true },
);

export const OrderModel = model<TOrder>('Order', orderSchema);
