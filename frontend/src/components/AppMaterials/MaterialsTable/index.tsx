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

export default function MaterialsTable(props : IProps) {
	const { fetchApi } = props;

	const { materialsData } = useContext(Context);

	const [filteredMaterial, setFilteredMaterial] = useState<string>('');
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
						value={filteredMaterial}
						onChange={(e) => setFilteredMaterial(e.target.value)}
					/>
					<FaSearch />
				</label>
			</SearchBar>
			<Table>
				<thead>
					<tr>
						<th>Material</th>
						<th>Descrição</th>
						<th>Cor</th>
						<th>Preço de custo</th>
						<th>Quantidade em estoque</th>
						<th>Cadastrado em:</th>
						<th>Atualizado em:</th>
						<th>Ação</th>
					</tr>
				</thead>
				<tbody>
					{materialsData.map((item, rowIndex) => (
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
