import { useContext, useEffect } from "react";

import CustomersForm from "../../components/CustomersForm";
import CostumersTable from "../../components/CustomersTable";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"

import {customersDataMock} from '../../mocks'


export default function CustomersPage() {
  const {
    customersData,
    setCustomersData,
  } = useContext(Context) || {}

  const getAllCustomers = async () => {
    const response = await getAll('customers')
    console.log(response)
    setCustomersData(response.data)
  }

  useEffect(() => {
    getAllCustomers()
  }, [])

  return (
    <>
      <h2>Clientes</h2>
      <CustomersForm />
      <CostumersTable data={customersDataMock}/>
    </>
  );
}
