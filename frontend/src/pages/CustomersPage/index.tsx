import { useContext, useEffect } from "react";

import CustomersForm from "../../components/CustomersForm";
import Table from "../../components/Table";
import Context from "../../context/Context";
import { getAll } from "../../services/api/api"
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import formatCPF from '../../utils/formatCPF';
import formatDate from '../../utils/formatDate';


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
        columns={[
          {column: 'customer_name', header: 'Nome'},
          {column: 'cpf', header: 'CPF', formatter: formatCPF},
          {column: 'address', header: 'Endereço'},
          {column: 'email', header: 'e-mail'},
          {column: 'phone', header: 'Telefone', formatter: formatPhoneNumber},
          {column: 'created_at', header: 'Cadastrado em:', formatter: formatDate},
      ]}
      />
    </>
  );
}
