import { useContext, useEffect } from "react";

import OrdersForm from "../../components/OrdersForm";
import Table from "../../components/Table";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import formatDate from '../../utils/formatDate';
import OrdersView from "../../components/OrdersView";

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
      <h1>Adicionar pedido</h1>
      <OrdersForm />
      <OrdersView />
    </>
  );
}
