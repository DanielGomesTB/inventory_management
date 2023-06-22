import { useContext, useEffect } from "react";

import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import OrdersForm from "../../components/OrdersForm";
import OrdersView from "../../components/OrdersView";
import { IOrderApi } from "../../types";

// import { ordersDataMock } from '../../mocks' // Remove this line

export default function OrdersPage() {
  const { ordersData, setOrdersData } = useContext(Context)

  const getAllOrders = async () => {
    const response = await getAll('orders')
    setOrdersData(response as IOrderApi[])
  }

  useEffect(() => {
    getAllOrders()
  }, [])

  return (
    <>
      <h2>Pedidos</h2>
      <OrdersForm />
      <OrdersView data={ordersData} />
    </>
  );
}
