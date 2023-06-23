import React, { useState, useMemo } from 'react';

import { ICustomerApi, IOrderApi, IProductApi, IMaterialApi } from '../types';

import Context from './Context';

interface IProps {
  children: React.ReactNode
}

export default function Provider({ children }: IProps) {
  
	const [customersData, setCustomersData] = useState<ICustomerApi[]>([]);
	const [ordersData, setOrdersData] = useState<IOrderApi[]>([]);
	const [productsData, setProductsData] = useState<IProductApi[]>([]);
	const [materialsData, setMaterialsData] = useState<IMaterialApi[]>([]);

	const context = useMemo(() => ({
		customersData, setCustomersData,
		ordersData, setOrdersData,
		productsData, setProductsData,
		materialsData, setMaterialsData,
	}), [customersData, ordersData, productsData, materialsData]);

	return (
		<Context.Provider value={context}>
			{children}
		</Context.Provider>
	);
}
