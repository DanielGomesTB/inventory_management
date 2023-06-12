import { useContext, useEffect } from "react";

import ProductsForm from "../../components/ProductsForm";
import Table from "../../components/Table";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"

export default function ProductsPage() {
  const {
    productsData,
    setProductsData,
  } = useContext(Context)

  const getAllCustomers = async () => {
    const response = await getAll('products')
    console.log(response)
    setProductsData(response.data)
  }

  useEffect(() => {
    getAllCustomers()
  }, [])

  return (
    <>
      <h2>Produtos</h2>
      <ProductsForm />
      <Table data={productsData} />
    </>
  );
}
