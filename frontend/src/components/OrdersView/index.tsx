import OrdersBoard from "../OrdersBoard"
import { IOrderApi } from '../../types';
import { Container } from './style';

interface IProps {
  data: IOrderApi[];
}

export default function OrdersView(props : IProps) {
  let {data} = props;

  if (!data || data.length === 0) {
    data = []
    return <p>Nenhum dado disponível.</p>;
  }

  const pending = data.filter((item) => item.order_status === 'pendente');
  const initialized = data.filter((item) => item.order_status === 'iniciado');
  const completedAndCanceled = data.filter((item) => item.order_status === 'concluído' || item.order_status ==='cancelado');

  return (
    <>
      <h1>Pedidos</h1>
      <Container>
        <OrdersBoard icon='🕒' status='Pendentes' data={pending} />
        <OrdersBoard icon='🪡' status='Em Produção' data={initialized} />
        <OrdersBoard icon='✅' status='Finalizados' data={completedAndCanceled} />
      </Container>
    </>
  )
}
