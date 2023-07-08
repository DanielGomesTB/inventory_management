import { useState, useContext } from 'react';
import { RiEdit2Fill, RiGroupFill } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

import { ICustomerApi } from '../../../types';
import { remove } from '../../../services/api/api';
import EditCustomerModal from '../EditCustomerModal';
import formatPhoneNumber from '../../../utils/formatPhoneNumber';
import formatCPF from '../../../utils/formatCPF';
import formatDate from '../../../utils/formatDate';

import { Container, Text, Table, ActionRow, SearchBar } from './style';
import Context from '../../../context/Context';


interface IProps {
	fetchApi: () => Promise<void>;
}

export default function CostumersTable(props : IProps) {
	const { fetchApi} = props;

	const { customersData } = useContext(Context);

	const [filteredCustomer, setFilteredCustomer] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [inEdit, setInEdit] = useState<ICustomerApi>(customersData[0]);

	if (!customersData || customersData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	const handleDelete = async (id: number, name: string) => {
		const confirmed = window.confirm(`Tem certeza que quer deletar ${name.toUpperCase()}?`);

		if (confirmed) {
			await remove('customers', id);
			await fetchApi();
		}
	};

	const handleEdit = async (customer: ICustomerApi) => {
		setInEdit(customer);
		setIsModalOpen(true);
	};

	return (
		<Container>
			{isModalOpen &&
				<EditCustomerModal 
					setIsModalOpen={setIsModalOpen}
					inEdit={inEdit}
					fetchApi={fetchApi}
				/>
			}
			<SearchBar>
				<Text><RiGroupFill /> Clientes</Text>
				<label htmlFor="filteredCustomer">
					<input
						type="search"
						id="filteredCustomer"
						placeholder='Pesquisar Cliente'
						value={filteredCustomer}
						onChange={(e) => setFilteredCustomer(e.target.value)}
					/>
					<FaSearch />
				</label>
			</SearchBar>
			<Table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>CPF</th>
						<th>Endereço</th>
						<th>e-mail</th>
						<th>Telefone</th>
						<th>Cadastrado em:</th>
						<th>Ação</th>
					</tr>
				</thead>
				<tbody>
					{customersData.map((item, rowIndex) => (
						<tr key={rowIndex}>
							<td>{item.customer_name}</td>
							<td>{formatCPF(item.cpf)}</td>
							<td>{item.address}</td>
							<td>{item.email}</td>
							<td>{formatPhoneNumber(item.phone)}</td>
							<td>{formatDate(item.created_at)}</td>
							<ActionRow color='white'>
								<button type="button" onClick={() => handleEdit(item)}>
									<RiEdit2Fill style={{color: 'var(--zinc-50)'}} />
								</button>
								<button type="button" onClick={() => handleDelete(item.customer_id, item.customer_name)}>
									<MdDeleteForever style={{color: 'var(--red-500)'}}/>
								</button>
							</ActionRow>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
}
