import { useContext, useEffect } from 'react';

import ProductsForm from '../../components/ProductsForm';
import ProductsTable from '../../components/ProductsTable';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import { IProductApi, IMaterialApi } from '../../types';

// import { productsDataMock } from '../../mocks' // Remove this line

export default function ProductsPage() {
	const { 
		productsData, setProductsData,
		materialsData, setMaterialsData 
	} = useContext(Context);

	const fetchApi = async () => {
		const productsResponse = await getAll('products');
		const materialsResponse = await getAll('materials');
		setProductsData(productsResponse as IProductApi[]);
		setMaterialsData(materialsResponse as IMaterialApi[]);
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<>
			<h2>Produtos</h2>
			<ProductsForm materialsData={materialsData} />
			<ProductsTable productsData={productsData} />
		</>
	);
}
