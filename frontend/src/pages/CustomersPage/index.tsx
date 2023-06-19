import { useContext, useEffect } from "react";

import CustomersForm from "../../components/CustomersForm";
import CostumersTable from "../../components/CustomersTable";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import { ICustomerApi } from "../../types";

// import { customersDataMock } from '../../mocks' // Remove this line

export default function CustomersPage() {
  const { customersData, setCustomersData } = useContext(Context)

  const getAllCustomers = async () => {
    const response = await getAll('customers')
    setCustomersData(response as ICustomerApi[])
  }

  useEffect(() => {
    getAllCustomers()
  }, [])

  return (
    <>
      <h2>Clientes</h2>
      <CustomersForm />
      <CostumersTable data={customersData} />
    </>
  );
}
