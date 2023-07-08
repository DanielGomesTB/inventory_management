import { useContext, useEffect } from 'react';

import CustomersForm from '../../components/AppCustomers/CustomersForm';
import CostumersTable from '../../components/AppCustomers/CustomersTable';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import { ICustomerApi } from '../../types';
import { Container } from '../../styles/PageContainer';


export default function CustomersPage() {
	const { customersData, setCustomersData } = useContext(Context);

	const getAllCustomers = async () => {
		const response = await getAll('customers');
		setCustomersData(response as ICustomerApi[]);
	};

	useEffect(() => {
		getAllCustomers();
	}, []);

	return (
		<Container>
			<CustomersForm getAllCustomers={getAllCustomers}/>
			<CostumersTable customersData={customersData} getAllCustomers={getAllCustomers}/>
		</Container>
	);
}
