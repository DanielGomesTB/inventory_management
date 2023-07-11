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

interface ISortConfig {
	key: keyof ICustomerApi,
	direction: 'ascending' | 'descending' | null;
	arrow: ' ↑' | ' ↓' | null;
}

export default function CostumersTable(props : IProps) {
	const { fetchApi} = props;

	const { customersData } = useContext(Context);

	const [sortConfig, setSortConfig] = useState<ISortConfig>({ key: 'customer_id', direction: 'ascending', arrow: ' ↓' });
	const [filter, setFilter] = useState<string>('');
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

	const handleColumnHeaderClick = (key: keyof ICustomerApi) => {
		const IsThisKeyAlreadyAscending = sortConfig.key === key && sortConfig.direction === 'ascending';
		setSortConfig({
			key,
			direction: IsThisKeyAlreadyAscending ? 'descending' : 'ascending',
			arrow: IsThisKeyAlreadyAscending ? ' ↑' : ' ↓',
		});
	};

	const sortedData = [...customersData].sort((a: ICustomerApi, b: ICustomerApi) => {
		const { key } = sortConfig;

		if (sortConfig.direction === 'ascending') {
			if (a[key] < b[key]) return -1;
			if (a[key] > b[key]) return 1;
			return 0;
		}
		if (sortConfig.direction === 'descending') {
			if (a[key] > b[key]) return -1;
			if (a[key] < b[key]) return 1;
			return 0;
		}
		return 0;
	});

	const filteredData = sortedData.filter((item) => {
		const columns = [
			item.customer_name.toLowerCase(),
			item.address.toLowerCase(),
			item.email.toLowerCase(),
			item.phone,
			item.cpf
		];
		return columns.some((column) => column.includes(filter.toLowerCase()));
	});

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
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					/>
					<FaSearch />
				</label>
			</SearchBar>
			<Table>
				<thead>
					<tr>
						<th onClick={() => handleColumnHeaderClick('customer_name')}>
							Nome {sortConfig.key === 'customer_name' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('cpf')}>
							CPF {sortConfig.key === 'cpf' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('address')}>
							Endereço {sortConfig.key === 'address' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('email')}>
							e-mail {sortConfig.key === 'email' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('phone')}>
							Telefone {sortConfig.key === 'phone' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('created_at')}>
							Cadastrado em: {sortConfig.key === 'created_at' && sortConfig.arrow}
						</th>
						<th>Ação</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((item, rowIndex) => (
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
