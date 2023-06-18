import { useContext, useEffect } from "react";

import ProductsForm from "../../components/ProductsForm";
import ProductsTable from "../../components/ProductsTable";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"

// import { productsDataMock } from '../../mocks' // Remove this line

export default function ProductsPage() {
  const { productsData, setProductsData } = useContext(Context)

  const getAllProducts = async () => {
    const response = await getAll('products')
    setProductsData(response.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <h2>Produtos</h2>
      <ProductsForm />
      <ProductsTable data={productsData}/>
    </>
  );
}
