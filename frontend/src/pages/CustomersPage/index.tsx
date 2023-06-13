import { useContext, useEffect } from "react";

import CustomersForm from "../../components/CustomersForm";
import Table from "../../components/Table";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"

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
      <Table
        data={customersData}
        columns={{
          customer_name: 'Nome',
          cpf: 'CPF',
          address: 'Endereço',
          email: 'e-mail',
          phone: 'Telefone',
          created_at: 'Cadastrado em:'
        }}
      />
    </>
  );
}
