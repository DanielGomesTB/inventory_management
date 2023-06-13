import { useContext, useEffect } from "react";

import MaterialsForm from "../../components/MaterialsForm";
import Table from "../../components/Table";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"

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
        columns={{
          material_id: 'Material',
          material_name: 'Descrição',
          color: 'Cor',
          cost_price: 'Preço de custo',
          stock: 'Quantidade em estoque',
          created_at: 'Cadastrado em:',
          updated_at: 'Atualizado em:',
        }}
      />
    </>
  );
}
