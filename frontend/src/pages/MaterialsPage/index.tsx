import { useContext, useEffect } from "react";

import MaterialsForm from "../../components/MaterialsForm";
import Table from "../../components/Table";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';

export default function MaterialsPage() {
  const {
    materialsData,
    setMaterialsData,
  } = useContext(Context) || {}

  const getAllCustomers = async () => {
    const response = await getAll('materials')
    console.log(response)
    setMaterialsData(response.data)
  }

  useEffect(() => {
    getAllCustomers()
  }, [])

  return (
    <>
      <h2>Estoque</h2>
      <MaterialsForm />
      <Table
        data={materialsData}
        columns={[
          {column: 'material_id', header: 'Material'},
          {column: 'material_name', header: 'Descrição'},
          {column: 'color', header: 'Cor'},
          {column: 'cost_price', header: 'Preço de custo', formatter: formatCurrency},
          {column: 'stock', header: 'Quantidade em estoque'},
          {column: 'created_at', header: 'Cadastrado em:', formatter: formatDate},
          {column: 'updated_at', header: 'Atualizado em:', formatter: formatDate},
        ]}
      />
    </>
  );
}
