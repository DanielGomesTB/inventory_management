import { useContext, useEffect } from "react";

import MaterialsForm from "../../components/MaterialsForm";
import MaterialsTable from "../../components/MaterialsTable";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import { IMaterialApi } from "../../types";

// import { materialsDataMock } from '../../mocks' // Remove this line

export default function MaterialsPage() {
  const { materialsData, setMaterialsData } = useContext(Context)

  const getAllMaterials = async () => {
    const response = await getAll('materials')
    setMaterialsData(response as IMaterialApi[])
  }

  useEffect(() => {
    getAllMaterials()
  }, [])

  return (
    <>
      <h2>Estoque</h2>
      <MaterialsForm />
      <MaterialsTable data={materialsData}/>
    </>
  );
}
