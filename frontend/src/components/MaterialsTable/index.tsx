import { IMaterialApi } from '../../types';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

interface IProps {
  materialsData: IMaterialApi[];
}

export default function MaterialsTable(props : IProps) {
	const {materialsData} = props;

	if (!materialsData || materialsData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	return (
		<div style={{backgroundColor: 'var(--zinc-900)'}}>
			<h3>Estoque</h3>
			<table>
				<thead>
					<tr>
						<th>Material</th>
						<th>Descrição</th>
						<th>Cor</th>
						<th>Preço de custo</th>
						<th>Quantidade em estoque</th>
						<th>Cadastrado em:</th>
						<th>Atualizado em:</th>
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
							<td>
								<button type="button" onClick={() => alert('Editar!')}>
                Editar
								</button>
								<button type="button" onClick={() => alert('Deletar!')}>
                Deletar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
