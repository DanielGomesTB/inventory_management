import { ICustomerApi } from '../../types';
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import formatCPF from '../../utils/formatCPF';
import formatDate from '../../utils/formatDate';

interface IProps {
  customersData: ICustomerApi[];
}

export default function CostumersTable(props : IProps) {
	const {customersData} = props;

	if (!customersData || customersData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Nome</th>
					<th>CPF</th>
					<th>Endereço</th>
					<th>e-mail</th>
					<th>Telefone</th>
					<th>Cadastrado em:</th>
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
