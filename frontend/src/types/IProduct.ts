interface IProductMaterials {
  material_id: string;
  quantity: number;
}

export interface IProduct {
  product_name: string;
  selling_price: number;
  materials: IProductMaterials[];
}

// {
//   "product_id": 4,
//   "product_name": "Saia",
//   "selling_price": "24.99",
//   "is_active": 1,
//   "created_at": "2023-06-02T19:06:31.000Z",
//   "updated_at": "2023-06-02T19:06:31.000Z"
// }
