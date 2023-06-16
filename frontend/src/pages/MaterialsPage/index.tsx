import { useContext, useEffect } from "react";

import MaterialsForm from "../../components/MaterialsForm";
import MaterialsTable from "../../components/MaterialsTable";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"

import { materialsDataMock } from '../../mocks' // Remove this line

export default function MaterialsPage() {
  const { materialsData, setMaterialsData } = useContext(Context)

  const getAllCustomers = async () => {
    const response = await getAll('materials')
    setMaterialsData(response.data)
  }

  useEffect(() => {
    getAllCustomers()
  }, [])

  return (
    <>
      <h2>Estoque</h2>
      <MaterialsForm />
      <MaterialsTable data={materialsDataMock}/>
    </>
  );
}
