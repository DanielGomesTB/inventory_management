import { ISelectedProducts } from '.';

export interface IOrder {
  customer_id: number;
  order_status?: string;
  order_type?: string;
  products: ISelectedProducts[];
}
