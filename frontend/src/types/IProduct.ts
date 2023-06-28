interface IProductMaterials {
  material_id: string | number;
  quantity: string | number;
}

export interface IProduct {
  product_name: string;
  selling_price: string | number;
  materials: IProductMaterials[];
}
