import { useContext, useEffect } from 'react';

import ProductsForm from '../../components/ProductsForm';
import ProductsView from '../../components/ProductsView';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import { IProductApi, IMaterialApi } from '../../types';
import { Container } from '../CustomersPage/style';

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
		<Container>
			<ProductsForm materialsData={materialsData} fetchApi={fetchApi}/>
			<ProductsView productsData={productsData} setProductsData={setProductsData} fetchApi={fetchApi}/>
		</Container>
	);
}
