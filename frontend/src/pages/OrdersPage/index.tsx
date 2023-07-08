import { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import OrdersForm from '../../components/AppOrders/OrdersForm';
import OrdersView from '../../components/AppOrders/OrdersView';
import { IOrderApi, ICustomerApi, IProductApi } from '../../types';
import { Container } from '../../styles/PageContainer';

export default function OrdersPage() {
	const {
		ordersData, setOrdersData,
		customersData, setCustomersData,
		productsData, setProductsData,
	} = useContext(Context);

	const fetchApi = async () => {
		const ordersResponse = await getAll('orders');
		const customersResponse = await getAll('customers');
		const productsResponse = await getAll('products');
		setOrdersData(ordersResponse as IOrderApi[]);
		setCustomersData(customersResponse as ICustomerApi[]);
		setProductsData(productsResponse as IProductApi[]);
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<Container>
			<OrdersForm customersData={customersData} productsData={productsData} />
			<OrdersView ordersData={ordersData} />
		</Container>
	);
}
