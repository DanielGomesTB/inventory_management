import { ICustomerApi } from '../../types';
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import formatCPF from '../../utils/formatCPF';
import formatDate from '../../utils/formatDate';
import { Container, Text, Table, ActionRow } from './style';
import { RiEdit2Fill, RiGroupFill } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';

interface IProps {
  customersData: ICustomerApi[];
}

export default function CostumersTable(props : IProps) {
	const {customersData} = props;

	if (!customersData || customersData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	return (
		<Container>
			<Text><RiGroupFill /> Clientes</Text>
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
								<button type="button" onClick={() => alert('Editar!')}>
									<RiEdit2Fill style={{color: 'var(--main-white)'}} />
								</button>
								<button type="button" onClick={() => alert('Deletar!')}>
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
