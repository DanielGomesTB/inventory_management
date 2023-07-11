import { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import OrdersForm from '../../components/AppOrders/OrdersForm';
import OrdersView from '../../components/AppOrders/OrdersView';
import { IOrderApi } from '../../types';
import { Container } from '../../styles/PageContainer';

export default function OrdersPage() {
	const { setOrdersData	} = useContext(Context);

	const fetchApi = async () => {
		const ordersResponse = await getAll('orders');
		setOrdersData(ordersResponse as IOrderApi[]);
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<Container>
			<OrdersForm fetchApi={fetchApi} />
			<OrdersView fetchApi={fetchApi} />
		</Container>
	);
}
