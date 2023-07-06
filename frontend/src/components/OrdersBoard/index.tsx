import formatDate from '../../utils/formatDate';
import formatTitle from '../../utils/formatTitle';
import { IOrderApi } from '../../types';

import { Board, OrdersContainer, ColoredText } from './style';

interface IProps {
  icon: string;
  status: string;
  data: IOrderApi[];
}

export default function OrdersBoard(props: IProps) {
	const {icon, status, data} = props;

	return (
		<Board>
			<header>
				<strong>{`${icon} ${status}`}</strong>
			</header>
			<OrdersContainer>
				{data.map((order) => (
					<button type="button" key={order.order_id} onClick={() => alert(`Pedido n#: ${order.order_id}`)}>
						<strong>n# {order.order_id}</strong>
						<span>{formatTitle(order.order_type, 'capitalize')}</span>
						<span>Cliente: n# {order.customer_id}</span>
						<span>Data: {formatDate(order.created_at)}</span>
						{order.order_status === 'cancelado' && <ColoredText color={'red'}>{formatTitle(order.order_status, 'capitalize')}</ColoredText>}
						{order.order_status === 'concluído' && <ColoredText color={'blue'}>{formatTitle(order.order_status, 'capitalize')}</ColoredText>}
					</button>
				))}
			</OrdersContainer>
		</Board>
	);
}
