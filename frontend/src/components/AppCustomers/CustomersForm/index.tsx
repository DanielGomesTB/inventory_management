import { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

import { getStatesFromIBGE } from '../../../services/externalApis/apiIBGE';
import { insert } from '../../../services/api/api';
import Label from '../../Label';
import FormContainer from '../../FormContainer';

import { SelectLabel } from './style';


interface IStates {
  nome: string;
  sigla: string;
}

interface IProps {
  fetchApi: () => Promise<void>;
}

export default function CustomersForm(props: IProps) {
	const {fetchApi} = props;

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
	const [state, setState] = useState<string>(states[0]?.nome);
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

		setCustomerName('');
		setCpf('');
		setPhone('');
		setEmail('');
		setStreet('');
		setNum('');
		setNeighborhood('');
		setCity('');
		setZipCode('');

		await fetchApi();
	};

	const handleDisable = () => {
		const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		const isAnyFieldEmpty = !(
			customerName.length >= 3
			&& cpf.length === 11
			&& (phone.length === 11 || phone.length === 10)
			&& emailRegex.test(email)
			&& street
			&& num
			&& neighborhood
			&& city
			&& state
			&& zipCode.length === 8
		);
		setIsDisable(isAnyFieldEmpty);
	};

	useEffect(() => {
		fetchStatesFromIBGE();
	}, []);

	useEffect(() => {
		handleDisable();
	}, [customerName, cpf, phone, email, street, num, neighborhood, city, state, zipCode]);

	return (
		<FormContainer
			title="Cadastrar novo cliente"
			icon={<FaUserPlus />}
			handleClick={handleClick}
			buttonText="Cadastrar"
			isDisabled={isDisable}
		>
			<div key='1'>
				<Label label='Nome' value={{customerName}}	width={40} setState={setCustomerName} />
				<Label label='CPF' value={{cpf}} type='number' maxlength={11} width={20} setState={setCpf} />
				<Label label='Telefone' value={{phone}}	type='number' maxlength={11} width={20} setState={setPhone} />
				<Label label='e-mail' value={{email}}	type='email' width={20} setState={setEmail} />
			</div>

			<div key='2'>
				<Label label='Rua' value={{street}}	width={30} setState={setStreet} />
				<Label label='Nº' value={{num}}	width={5} setState={setNum} type='number'/>
				<Label label='Bairro' value={{neighborhood}} width={20} setState={setNeighborhood} />
				<Label label='Cidade' value={{city}} width={20} setState={setCity} />

				<SelectLabel htmlFor="state" width={15}>
          UF
					<select	id="state" value={state} onChange={(e) => setState(e.target.value)}>
						{states.map(({ sigla, nome }) => (
							<option key={sigla} value={sigla}>{nome}</option>
						))}
					</select>
				</SelectLabel>

				<Label label='CEP' value={{zipCode}} type='number' maxlength={8} width={10} setState={setZipCode} />
			</div>
		</FormContainer>
	);
}
