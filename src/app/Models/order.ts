import { EmiType } from './emi-type';
import { Product } from './product';

export class Order {
  orderId: number;

  product: Product;

  orderDate: Date;

  emiType: EmiType;

  installments: number;

  emiAmount: number;

  amountDue: number;

  orderCost: number;

  canPay: boolean;
}
