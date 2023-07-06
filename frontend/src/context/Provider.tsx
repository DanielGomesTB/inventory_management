import React, { useState, useMemo } from 'react';

import { ICustomerApi, IOrderApi, IProductApi, IMaterialApi, ISelectedProducts, ISelectedMaterials } from '../types';

import Context from './Context';

interface IProps {
  children: React.ReactNode
}

export default function Provider({ children }: IProps) {
  
	const [customersData, setCustomersData] = useState<ICustomerApi[]>([]);
	const [ordersData, setOrdersData] = useState<IOrderApi[]>([]);
	const [productsData, setProductsData] = useState<IProductApi[]>([]);
	const [materialsData, setMaterialsData] = useState<IMaterialApi[]>([]);

	const [selectedProducts, setSelectedProducts] = useState<ISelectedProducts[]>([{product_id: '', quantity: ''}]);
	const [selectedMaterials, setSelectedMaterials] = useState<ISelectedMaterials[]>([{material_id: '', quantity: ''}]);

	const context = useMemo(() => ({
		customersData, setCustomersData,
		ordersData, setOrdersData,
		productsData, setProductsData,
		materialsData, setMaterialsData,
		selectedProducts, setSelectedProducts,
		selectedMaterials, setSelectedMaterials,
	}), [customersData, ordersData, productsData, materialsData, selectedProducts, selectedMaterials]);

	return (
		<Context.Provider value={context}>
			{children}
		</Context.Provider>
	);
}
