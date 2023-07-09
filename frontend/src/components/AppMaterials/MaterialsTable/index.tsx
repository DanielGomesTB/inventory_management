import { useState, useContext } from 'react';
import { RiEdit2Fill, RiArchiveFill } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

import formatCurrency from '../../../utils/formatCurrency';
import formatDate from '../../../utils/formatDate';
import Context from '../../../context/Context';
import { IMaterialApi } from '../../../types';
import { remove } from '../../../services/api/api';

import { Container, Text, Table, ActionRow, SearchBar } from './style';
import EditMaterialModal from '../EditMaterialModal';


interface IProps {
	fetchApi: () => Promise<void>;
}

interface ISortConfig {
	key: keyof IMaterialApi,
	direction: 'ascending' | 'descending' | null;
	arrow: ' ↑' | ' ↓' | null;
}

export default function MaterialsTable(props : IProps) {
	const { fetchApi } = props;

	const { materialsData } = useContext(Context);

	const [sortConfig, setSortConfig] = useState<ISortConfig>({ key: 'material_id', direction: 'ascending', arrow: ' ↓' });
	const [filter, setFilter] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [inEdit, setInEdit] = useState<IMaterialApi>(materialsData[0]);

	if (!materialsData || materialsData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	const handleDelete = async (id: number, name: string) => {
		const confirmed = window.confirm(`Tem certeza que quer deletar ${name.toUpperCase()}?`);

		if (confirmed) {
			await remove('materials', id);
			await fetchApi();
		}
	};

	const handleEdit = async (material: IMaterialApi) => {
		setInEdit(material);
		setIsModalOpen(true);
	};

	const handleColumnHeaderClick = (key: keyof IMaterialApi) => {
		const IsThisKeyAlreadyAscending = sortConfig.key === key && sortConfig.direction === 'ascending';
		setSortConfig({
			key,
			direction: IsThisKeyAlreadyAscending ? 'descending' : 'ascending',
			arrow: IsThisKeyAlreadyAscending ? ' ↑' : ' ↓',
		});
	};

	const sortedData = [...materialsData].sort((a: IMaterialApi, b: IMaterialApi) => {
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
			item.material_name.toLowerCase(),
			(item.color ? item.color : '').toLowerCase(),
			item.cost_price
		];
		return columns.some((column) => column.includes(filter.toLowerCase()));
	});

	return (
		<Container>
			{isModalOpen &&
				<EditMaterialModal 
					setIsModalOpen={setIsModalOpen}
					inEdit={inEdit}
					fetchApi={fetchApi}
				/>
			}
			<SearchBar>
				<Text><RiArchiveFill /> Materiais</Text>
				<label htmlFor="filteredMaterial">
					<input
						type="search"
						id="filteredMaterial"
						placeholder='Pesquisar no Estoque'
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					/>
					<FaSearch />
				</label>
			</SearchBar>
			<Table>
				<thead>
					<tr>
						<th onClick={() => handleColumnHeaderClick('material_id')}>
							Material {sortConfig.key === 'material_id' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('material_name')}>
							Descrição {sortConfig.key === 'material_name' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('color')}>
							Cor {sortConfig.key === 'color' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('cost_price')}>
							Preço de custo {sortConfig.key === 'cost_price' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('stock')}>
							Quantidade em estoque {sortConfig.key === 'stock' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('created_at')}>
							Cadastrado em: {sortConfig.key === 'created_at' && sortConfig.arrow}
						</th>
						<th onClick={() => handleColumnHeaderClick('updated_at')}>
							Atualizado em: {sortConfig.key === 'updated_at' && sortConfig.arrow}
						</th>
						<th>Ação</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((item, rowIndex) => (
						<tr key={rowIndex}>
							<td>{item.material_id}</td>
							<td>{item.material_name}</td>
							<td>{item.color}</td>
							<td>{formatCurrency(item.cost_price)}</td>
							<td>{item.stock}</td>
							<td>{formatDate(item.created_at)}</td>
							<td>{formatDate(item.updated_at)}</td>
							<ActionRow color='white'>
								<button type="button" onClick={() => handleEdit(item)}>
									<RiEdit2Fill style={{color: 'var(--zinc-50)'}} />
								</button>
								<button type="button" onClick={() => handleDelete(item.material_id, item.material_name)}>
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
