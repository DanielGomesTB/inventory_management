import { useState, useEffect } from 'react'
import { getAllProducts } from './service/api'


export default function App() {
  const [products, setProducts] = useState([])
  const getApi = async () => {
    const result = await getAllProducts();
    setProducts(result);
    console.log(result.data);
  }
  useEffect(() => {
    getApi()
  }, []);
  return (
    <>
      <h1>Inventory Management</h1>
      <p>é nois carai</p>
    </>
  )
}
