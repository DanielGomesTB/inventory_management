import { useContext, useEffect } from 'react';

import ProductsForm from '../../components/AppProducts/ProductsForm';
import ProductsView from '../../components/AppProducts/ProductsView';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import { IProductApi, IMaterialApi } from '../../types';
import { Container } from '../../styles/PageContainer';


export default function ProductsPage() {
	const { setProductsData, setMaterialsData	} = useContext(Context);

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
			<ProductsForm fetchApi={fetchApi} />
			<ProductsView fetchApi={fetchApi} />
		</Container>
	);
}
