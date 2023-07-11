import { useContext } from 'react';

import OrdersBoard from '../OrdersBoard';
import Context from '../../../context/Context';

import { Container, Text } from './style';
import { FaClipboardList } from 'react-icons/fa';

interface IProps {
	fetchApi: () => Promise<void>;
}

export default function OrdersView(props : IProps) {
	const { fetchApi } = props;

	const { ordersData } = useContext(Context);

	if (!ordersData || ordersData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	const pending = ordersData.filter((item) => item.order_status === 'pendente');
	const initialized = ordersData.filter((item) => item.order_status === 'iniciado');
	const completed = ordersData.filter((item) => item.order_status === 'concluído');
	const canceled = ordersData.filter((item) => item.order_status ==='cancelado');

	return (
		<Container>
			<Text><FaClipboardList /> Pedidos</Text>
			<div className='boards'>
				<OrdersBoard icon='🕒' status='Pendentes' data={pending} />
				<OrdersBoard icon='🪡' status='Em Produção' data={initialized} />
				<OrdersBoard icon='✅' status='Concluídos' data={completed} />
				<OrdersBoard icon='❌' status='Cancelados' data={canceled} />
			</div>
		</Container>
	);
}
