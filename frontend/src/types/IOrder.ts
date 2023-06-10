interface IOrderItems {
  product_id: string;
  quantity: number;
}

export interface IOrder {
  customer_id: number;
  order_status?: string;
  order_type?: string;
  products: IOrderItems[];
}