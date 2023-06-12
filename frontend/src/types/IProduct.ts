interface IProductMaterials {
  material_id: string;
  quantity: number;
}

export interface IProduct {
  product_name: string;
  selling_price: number;
  materials: IProductMaterials[];
}