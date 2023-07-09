import { useContext, useEffect } from 'react';

import ProductsForm from '../../components/AppProducts/ProductsForm';
import ProductsView from '../../components/AppProducts/ProductsView';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import { IProductApi } from '../../types';
import { Container } from '../../styles/PageContainer';


interface IProductWithQuantity extends IProductApi {
  quantity: number;
}

export default function ProductsPage() {
	const { setProductsData	} = useContext(Context);

	const fetchApi = async () => {
		const productsResponse = await getAll('products');
		const productsWithQuantity = productsResponse.map((item: IProductApi) => ({...item, quantity: 0}));
		setProductsData(productsWithQuantity as IProductWithQuantity[]);
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
