import { useContext, useEffect } from "react";

import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import OrdersForm from "../../components/OrdersForm";
import OrdersView from "../../components/OrdersView";

// import { ordersDataMock } from '../../mocks' // Remove this line

export default function OrdersPage() {
  const { ordersData, setOrdersData } = useContext(Context)

  const getAllOrders = async () => {
    const response = await getAll('orders')
    setOrdersData(response.data)
  }

  useEffect(() => {
    getAllOrders()
  }, [])

  return (
    <>
      <h1>Adicionar pedido</h1>
      <OrdersForm />
      <OrdersView data={ordersData} />
    </>
  );
}
