import { useContext, useEffect } from "react";

import ProductsForm from "../../components/ProductsForm";
import Table from "../../components/Table";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';

export default function ProductsPage() {
  const {
    productsData,
    setProductsData,
  } = useContext(Context) || {}

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
      <Table
        data={productsData}
        columns={[
          {column: 'product_id', header: 'Produto'},
          {column: 'product_name', header: 'Descrição'},
          {column: 'selling_price', header: 'Preço', formatter: formatCurrency},
          {column: 'created_at', header: 'Cadastrado em:', formatter: formatDate},
        ]}
      />
    </>
  );
}
