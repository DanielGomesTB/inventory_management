import OrdersBoard from "../OrdersBoard"
import { useContext, useEffect } from "react";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import { Container } from './style';

export default function OrdersView() {
  const {
    ordersData,
    setOrdersData,
  } = useContext(Context) || {}

  const getAllOrders = async () => {
    const response = await getAll('orders')
    console.log(response)
    setOrdersData(response.data)
  }

  useEffect(() => {
    getAllOrders()
  }, [])

  const pendente = ordersData.filter((item) => item.oder_status === 'pendente');
  const producao = ordersData.filter((item) => item.order_status === 'iniciado');
  const finalizado = ordersData.filter((item) => item.order_status === 'concluído' || item.status ==='cancelado');

  return (
    <>
      <h1>Pedidos</h1>
      <Container>
        <OrdersBoard status='pendente' data={pendente}/>
        <OrdersBoard status='em produção' data={producao}/>
        <OrdersBoard status='finalizado' data={finalizado}/>
      </Container>
    </>
  )
}
