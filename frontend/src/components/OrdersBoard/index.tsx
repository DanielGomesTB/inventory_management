import { Board, OrdersContainer } from './style';
import formatDate from '../../utils/formatDate';

export default function OrdersBoard(props) {
  const {status, data} = props;

  return (
    <Board>
      <header>
        <strong>{status}</strong>
      </header>
      <OrdersContainer>
      {data.map((order, index) => (
            <button type="button" key={index}>
              <strong>Pedido n# {order.order_id}</strong>
              <span>Tipo: {order.order_type}</span>
              <span>Cliente n# {order.customer_id}</span>
              <span>Pedido criado em: {formatDate(order.created_at)}</span>
            </button>
          ))}
      </OrdersContainer>
    </Board>
  )
}
