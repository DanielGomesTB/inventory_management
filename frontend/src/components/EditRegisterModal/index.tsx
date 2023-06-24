import { FaUserEdit } from 'react-icons/fa';
import { ModalBody, Overlay, Text, Label, Button} from './style';
import { useEffect, useState } from 'react';
import { ICustomerApi } from '../../types';
import { update } from '../../services/api/api';
import { toast } from 'react-hot-toast';

interface IProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	customerInEdit: ICustomerApi;
	getAllCustomers: () => Promise<void>;
}

export default function EditRegisterModal(props: IProps) {
	const {setIsModalOpen, customerInEdit, getAllCustomers} = props;

	const [customerName, setCustomerName] = useState<string>(customerInEdit.customer_name);
	const [cpf, setCpf] = useState<string>(customerInEdit.cpf);
	const [phone, setPhone] = useState<string>(customerInEdit.cpf);
	const [email, setEmail] = useState<string>(customerInEdit.email);
	const [completeAddress, setCompleteAddress] = useState<string>(customerInEdit.address);
	const [isDisable, setIsDisable] = useState<boolean>(true);

	const handleDisable = () => {
		const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		const isAnyFieldEmpty = !(
			customerName.length >= 3 &&
			cpf.length === 11 &&
			(phone.length === 11 || phone.length === 10) &&
			emailRegex.test(email) &&
			completeAddress.length >= 5
		);
		setIsDisable(isAnyFieldEmpty);
	};

	const handleSaveData = async () => {
		const payload = {
			customer_name: customerName,
			cpf,
			phone,
			email,
			address: completeAddress,
		};
		await update('customers', customerInEdit.customer_id, payload);
		await getAllCustomers();
		setIsModalOpen(false);
		toast.success('Informações atualizadas com sucesso!');
	};

	useEffect(() => {
		handleDisable();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [customerName, cpf, phone, email, completeAddress]);

	return (
		<Overlay>
			<ModalBody>
				<form>
					<Text><FaUserEdit /> Editar informações do cliente</Text>

					<Label htmlFor="customerName">
              Nome
						<input
							type="text"
							id="customerName"
							value={customerName}
							onChange={(e) => setCustomerName(e.target.value)}
						/>
					</Label>
					<Label htmlFor="cpf">
              CPF
						<input
							type="text"
							id="cpf"
							value={cpf}
							onChange={(e) => setCpf(e.target.value)}
						/>
					</Label>
					<Label htmlFor="phone">
              Telefone
						<input
							type="text"
							id="phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</Label>
					<Label htmlFor="email">
              Email
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Label>
					<Label htmlFor="completeAddress">
              Endereço Completo
						<input
							type="text"
							id="completeAddress"
							value={completeAddress}
							onChange={(e) => setCompleteAddress(e.target.value)}
						/>
					</Label>
				</form>

				<div>
					<Button
						disabled={isDisable}
						type="button"
						onClick={handleSaveData}
					>
						{isDisable ? 'Preencha tudo' : 'Salvar'}
					</Button>
					<Button
						type="button"
						onClick={() => setIsModalOpen(false)}
						color='danger'
					>
            Cancelar
					</Button>
				</div>


			</ModalBody>
		</Overlay>
	);
}