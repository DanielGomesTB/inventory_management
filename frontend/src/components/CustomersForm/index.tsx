import { useEffect, useState } from 'react';
import { Form, Label, Button, Text } from './style';
import { getStatesFromIBGE } from '../../services/externalApis/apiIBGE';
import { FaUserPlus } from 'react-icons/fa';
import { insert } from '../../services/api/api';

interface IStates {
  nome: string;
  sigla: string;
}

interface IProps {
  getAllCustomers: () => Promise<void>;
}

export default function CustomersForm(props: IProps) {
	const {getAllCustomers} = props;

	const [customerName, setCustomerName] = useState<string>('');
	const [cpf, setCpf] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [states, setStates] = useState<IStates[]>([]);
	const [isDisable, setIsDisable] = useState<boolean>(true);
	
	const [street, setStreet] = useState<string>('');
	const [num, setNum] = useState<string>('');
	const [neighborhood, setNeighborhood] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [state, setState] = useState<string>('');
	const [zipCode, setZipCode] = useState<string>('');
	
	const fetchStatesFromIBGE = async () => {
		const response = await getStatesFromIBGE();
		setStates(response);
	};

	const handleClick = async () => {
		const address = `${street}, ${num}, ${neighborhood} - ${city}/${state} - ${zipCode}`;
		const payload = {
			customer_name: customerName,
			cpf,
			address,
			email,
			phone,
		};
		await insert('customers', payload);
		await getAllCustomers();
	};

	const handleDisable = () => {
		const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		const isAnyFieldEmpty = !(
			customerName.length >= 3 &&
			cpf.length === 11 &&
			(phone.length === 11 || phone.length === 10) &&
			emailRegex.test(email) &&
			street &&
			num &&
			neighborhood &&
			city &&
			state &&
			zipCode.length === 8
		);
		setIsDisable(isAnyFieldEmpty);
	};

	useEffect(() => {
		fetchStatesFromIBGE();
	}, []);

	useEffect(() => {
		handleDisable();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [customerName, cpf, phone, email, street, num, neighborhood, city, state, zipCode]);

	return (
		<Form>
			<Text><FaUserPlus /> Cadastrar novo cliente</Text>
			<div>
				<Label htmlFor="customerName" width={40}>
          Nome
					<input
						type="text"
						id="customerName"
						value={customerName}
						onChange={(e) => setCustomerName(e.target.value)}
					/>
				</Label>
				<Label htmlFor="cpf" width={20}>
          CPF
					<input
						type="text"
						id="cpf"
						value={cpf}
						onChange={(e) => setCpf(e.target.value)}
					/>
				</Label>
				<Label htmlFor="phone" width={20}>
          Telefone
					<input
						type="text"
						id="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</Label>
				<Label htmlFor="email" width={20}>
          Email
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Label>
			</div>

			<div>
				<Label htmlFor="street" width={30}>
          Rua
					<input
						type="text"
						id="street"
						value={street}
						onChange={(e) => setStreet(e.target.value)}
					/>
				</Label>
				<Label htmlFor="num" width={5}>
          Nº
					<input
						type="text"
						id="num"
						value={num}
						onChange={(e) => setNum(e.target.value)}
					/>
				</Label>
				<Label htmlFor="neighborhood" width={20}>
          Bairro
					<input
						type="text"
						id="neighborhood"
						value={neighborhood}
						onChange={(e) => setNeighborhood(e.target.value)}
					/>
				</Label>
				<Label htmlFor="city" width={20}>
          Cidade
					<input
						type="text"
						id="city"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
				</Label>
				<Label htmlFor="state" width={15}>
          UF
					<select
						id="state"
						value={state}
						onChange={(e) => setState(e.target.value)}
					>
						{states.map(({ sigla, nome }) => (
							<option key={sigla} value={sigla}>{nome}</option>
						))}
					</select>
				</Label>
				<Label htmlFor="zipCode" width={10}>
          CEP
					<input
						type="text"
						id="zipCode"
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					/>
				</Label>
			</div>

			<Button
				disabled={isDisable}
				type="button"
				onClick={handleClick}
			>
          Cadastrar
			</Button>
		</Form>
	);
}
