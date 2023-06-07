// import { useState, useEffect } from 'react'
// import { getAllProducts } from './services/api';
import MaterialsForm from './components/MaterialsForm';
import ProductsForm from './components/ProductsForm';
import OrdersForm from './components/OrdersForm';
import CustomersForm from './components/CustomersForm'

export default function App() {
  // const [products, setProducts] = useState([])
  // const getApi = async () => {
  //   const result = await getAllProducts();
  //   setProducts(result);
  // }
  // useEffect(() => {
  //   getApi()
  // }, []);

  return (
    <>
      <h1>Inventory Management</h1>
      <CustomersForm />
      <MaterialsForm />
      <ProductsForm />
      <OrdersForm />
    </>
  )
}
