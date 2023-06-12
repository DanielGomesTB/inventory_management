import { useContext, useEffect } from "react";

import OrdersForm from "../../components/OrdersForm";
import Table from "../../components/Table";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"

export default function OrdersPage() {
  const {
    ordersData,
    setOrdersData,
  } = useContext(Context)

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
      <Table data={ordersData} />
    </>
  );
}
