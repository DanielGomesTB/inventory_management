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

// {
//   "order_id": 1,
//   "order_status": "pendente",
//   "order_type": "varejo",
//   "customer_id": 1,
//   "created_at": "2023-06-02T19:06:31.000Z",
//   "updated_at": "2023-06-02T19:06:31.000Z"
// }
