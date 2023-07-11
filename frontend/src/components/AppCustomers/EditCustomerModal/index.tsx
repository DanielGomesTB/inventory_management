import React, { useEffect, useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';

import { ICustomerApi } from '../../../types';
import { update } from '../../../services/api/api';
import Label from '../../Label';

import { ModalBody, Overlay, Text } from './style';
import { Button } from '../../../styles/Button';


interface IProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	inEdit: ICustomerApi;
	fetchApi: () => Promise<void>;
}

export default function EditCustomerModal(props: IProps) {
	const {setIsModalOpen, inEdit, fetchApi} = props;

	const [customerName, setCustomerName] = useState<string>(inEdit.customer_name);
	const [cpf, setCpf] = useState<string>(inEdit.cpf);
	const [phone, setPhone] = useState<string>(inEdit.phone);
	const [email, setEmail] = useState<string>(inEdit.email);
	const [completeAddress, setCompleteAddress] = useState<string>(inEdit.address);
	const [isDisable, setIsDisable] = useState<boolean>(true);

	const handleDisable = () => {
		const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		const isAnyFieldEmpty = !(
			customerName.length >= 3
			&& cpf.length === 11
			&& (phone.length === 11 || phone.length === 10)
			&& emailRegex.test(email)
			&& completeAddress.length >= 5
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
		await update('customers', inEdit.customer_id, payload);
		await fetchApi();
		setIsModalOpen(false);
	};

	useEffect(() => {
		handleDisable();
	}, [customerName, cpf, phone, email, completeAddress]);

	return (
		<Overlay>
			<ModalBody>
				<form>
					<Text><FaUserEdit /> Editar informações do cliente</Text>
					<Label label='Nome' value={{customerName}} setState={setCustomerName} />
					<Label label='CPF' value={{cpf}} type='number' maxlength={11} setState={setCpf} />
					<Label label='Telefone' value={{phone}}	type='number' maxlength={11} setState={setPhone} />
					<Label label='e-mail' value={{email}}	type='email' setState={setEmail} />
					<Label label='Endereço Completo' value={{completeAddress}} setState={setCompleteAddress} />
				</form>

				<div>
					<Button	disabled={isDisable} type="button" width={'48%'} onClick={handleSaveData}>
						{isDisable ? 'Preencha todos os campos' : 'Salvar'}
					</Button>
					<Button	type="button" width={'48%'} onClick={() => setIsModalOpen(false)}	danger>
            Cancelar
					</Button>
				</div>

			</ModalBody>
		</Overlay>
	);
}