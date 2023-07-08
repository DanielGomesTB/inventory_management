import { ISelectedMaterials } from '.';

export interface IProduct {
  product_name: string;
  selling_price: string | number;
  materials: ISelectedMaterials[];
}
