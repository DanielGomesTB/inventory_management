import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { RiEdit2Fill, RiGroupFill } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

import { ICustomerApi } from '../../types';
import { remove } from '../../services/api/api';
import EditRegisterModal from '../EditRegisterModal';
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import formatCPF from '../../utils/formatCPF';
import formatDate from '../../utils/formatDate';

import { Container, Text, Table, ActionRow, SearchBar } from './style';


interface IProps {
  customersData: ICustomerApi[];
	getAllCustomers: () => Promise<void>;
}

export default function CostumersTable(props : IProps) {
	const {customersData, getAllCustomers} = props;

	const [filteredCustomer, setFilteredCustomer] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [customerInEdit, setCustomerInEdit] = useState<ICustomerApi>(customersData[0]);

	if (!customersData || customersData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	const handleDelete = async (id: number, name: string) => {
		const confirmed = window.confirm(`Tem certeza que quer deletar ${name.toUpperCase()}?`);

		if (confirmed) {
			await remove('customers', id);
			toast.success(`${name.split(' ')[0].toUpperCase()} deletado com sucesso!`);
			await getAllCustomers();
		}
	};

	const handleEdit = async (customer: ICustomerApi) => {
		setCustomerInEdit(customer);
		setIsModalOpen(true);
	};

	return (
		<Container>
			{isModalOpen &&
				<EditRegisterModal 
					setIsModalOpen={setIsModalOpen}
					customerInEdit={customerInEdit}
					getAllCustomers={getAllCustomers}
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
									<RiEdit2Fill style={{color: 'var(--main-white)'}} />
								</button>
								<button type="button" onClick={() => handleDelete(item.customer_id, item.customer_name)}>
									<MdDeleteForever style={{color: 'var(--main-red)'}}/>
								</button>
							</ActionRow>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
}
