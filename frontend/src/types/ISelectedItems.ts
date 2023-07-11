interface ISelectedItems{
  quantity: string | number;
	[key: string]: number | string | undefined;
}

export interface ISelectedProducts extends ISelectedItems {
  product_id?: string | number;
}

export interface ISelectedMaterials extends ISelectedItems {
	material_id?: string | number;
}