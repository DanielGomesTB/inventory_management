import { IProductApi } from '../../types';
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';

interface IProps {
  productsData: IProductApi[];
}

export default function ProductsTable(props : IProps) {
	const {productsData} = props;

	if (!productsData || productsData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Produto</th>
					<th>Descrição</th>
					<th>Preço</th>
					<th>Cadastrado em:</th>
				</tr>
			</thead>
			<tbody>
				{productsData.map((item, rowIndex) => (
					<tr key={rowIndex}>
						<td>{item.product_id}</td>
						<td>{item.product_name}</td>
						<td>{formatCurrency(item.selling_price)}</td>
						<td>{formatDate(item.created_at)}</td>
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
	);
}
