import { useContext, useEffect } from "react";

import OrdersForm from "../../components/OrdersForm";
import Table from "../../components/Table";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import formatDate from '../../utils/formatDate';

export default function OrdersPage() {
  const {
    ordersData,
    setOrdersData,
  } = useContext(Context) || {}

  const getAllCustomers = async () => {
    const response = await getAll('orders')
    console.log(response)
    setOrdersData(response.data)
  }

  useEffect(() => {
    getAllCustomers()
  }, [])

  return (
    <>
      <h2>Pedidos</h2>
      <OrdersForm />
      <Table
        data={ordersData}
        columns={[
          {column: 'order_id', header: 'Pedido'},
          {column: 'customer_id', header: 'Cliente'},
          {column: 'order_type', header: 'Tipo'},
          {column: 'order_status', header: 'Status'},
          {column: 'created_at', header: 'Pedido realizado em:', formatter: formatDate},
        ]}
      />
    </>
  );
}
