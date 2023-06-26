import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaUserEdit } from 'react-icons/fa';

import { ICustomerApi } from '../../types';
import { update } from '../../services/api/api';
import Label from '../Label';

import { ModalBody, Overlay, Text, Button } from './style';


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
					<Label label='Nome' value={{customerName}} setState={setCustomerName} />
					<Label label='CPF' value={{cpf}} type='number' maxlength={11} setState={setCpf} />
					<Label label='Telefone' value={{phone}}	type='number' maxlength={11} setState={setPhone} />
					<Label label='e-mail' value={{email}}	type='email' setState={setEmail} />
					<Label label='Endereço Completo' value={{completeAddress}} setState={setCompleteAddress} />
				</form>

				<div>
					<Button	disabled={isDisable} type="button"	onClick={handleSaveData}>
						{isDisable ? 'Preencha todos os campos' : 'Salvar'}
					</Button>
					<Button	type="button"	onClick={() => setIsModalOpen(false)}	color='danger'>
            Cancelar
					</Button>
				</div>

			</ModalBody>
		</Overlay>
	);
}