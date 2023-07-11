import { useContext, useEffect } from 'react';

import CustomersForm from '../../components/AppCustomers/CustomersForm';
import CostumersTable from '../../components/AppCustomers/CustomersTable';
import Context from '../../context/Context';
import { getAll } from '../../services/api/api';
import { ICustomerApi } from '../../types';
import { Container } from '../../styles/PageContainer';


export default function CustomersPage() {
	const { setCustomersData } = useContext(Context);

	const fetchApi = async () => {
		const response = await getAll('customers');
		setCustomersData(response as ICustomerApi[]);
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<Container>
			<CustomersForm fetchApi={fetchApi}/>
			<CostumersTable fetchApi={fetchApi}/>
		</Container>
	);
}
