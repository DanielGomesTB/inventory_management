import { useContext } from 'react';

import OrdersBoard from '../OrdersBoard';
import Context from '../../../context/Context';

import { Container } from './style';

interface IProps {
	fetchApi: () => Promise<void>;
}

export default function OrdersView(props : IProps) {
	const { fetchApi} = props;

	const { ordersData } = useContext(Context);

	if (!ordersData || ordersData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	const pending = ordersData.filter((item) => item.order_status === 'pendente');
	const initialized = ordersData.filter((item) => item.order_status === 'iniciado');
	const completedAndCanceled = ordersData.filter((item) => item.order_status === 'concluído' || item.order_status ==='cancelado');

	return (
		<>
			<h1>Pedidos</h1>
			<Container>
				<OrdersBoard icon='🕒' status='Pendentes' data={pending} />
				<OrdersBoard icon='🪡' status='Em Produção' data={initialized} />
				<OrdersBoard icon='✅' status='Finalizados' data={completedAndCanceled} />
			</Container>
		</>
	);
}
