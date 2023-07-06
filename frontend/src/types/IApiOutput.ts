interface BaseColumns {
  is_active?: boolean;
  created_at: string;
  updated_at: string;
}

export interface ICustomerApi extends BaseColumns {
  customer_id: number;
  customer_name: string;
  cpf: string;
  address: string;
  email: string;
  phone: string;
}

export interface IOrderApi extends BaseColumns {
  order_id: number;
  order_status: string;
  order_type: string;
  customer_id: number;
}

export interface IProductApi extends BaseColumns {
  product_id: number;
  product_name: string;
  selling_price: string;
  quantity?: number;
}

export interface IMaterialApi extends BaseColumns {
  material_id: number;
  material_name: string;
  color: string;
  cost_price: string;
  stock: string;
}