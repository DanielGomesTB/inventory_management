import React, { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';

import { IProductApi } from '../../../types';
import { update } from '../../../services/api/api';
import Label from '../../Label';

import { ModalBody, Overlay, Text, Button } from './style';

interface IProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	inEdit: IProductApi;
	fetchApi: () => Promise<void>;
}

export default function EditProductsModal(props: IProps) {
	const {setIsModalOpen, inEdit, fetchApi} = props;

	const [productName, setProductName] = useState<string>(inEdit.product_name);
	const [sellingPrice, setSellingPrice] = useState<string>(inEdit.selling_price);
	// const [materials, setMaterials] = useState<[]>([]);
	const [isDisable, setIsDisable] = useState<boolean>(true);

	const handleDisable = () => {
		const isAnyFieldEmpty = !(
			productName.length >= 3
			&& sellingPrice.length
			// && (materials.length > 0 && materials.every((p) => p.material_id && p.quantity))
		);
		setIsDisable(isAnyFieldEmpty);
	};

	const handleSaveData = async () => {
		const payload = {
			customer_name: productName,
			sellingPrice,
			// materials,
		};
		await update('products', inEdit.product_id, payload);
		await fetchApi();
		setIsModalOpen(false);
	};

	const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK4iCP11ex4FIfZ7JOcXGHO9NIAcN0UMboImcFdakZKM55Tr8FX0CyULaO9Mrhx-sePM&usqp=CAU';

	useEffect(() => {
		handleDisable();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productName, sellingPrice]);

	return (
		<Overlay>
			<ModalBody>
				<form>
					<Text><AiFillEdit /> Editar informações do produto</Text>
					<img src={url} alt={productName} />
					<Label label='Descrição' value={{productName}} setState={setProductName} />
					<Label label='Preço de Venda' value={{sellingPrice}} type='number' maxlength={11} setState={setSellingPrice} />
					{/* {[{material_id: 1, quantity: 1}].map((item, index) => (
						<div key={index}>
							<Label label='Material' value={{item.material_id}}	type='number' setState={setMaterials} />
							<Label label='Quantidade' value={{item.quantity}}	type='number' setState={setMaterials} />
						</div>
					))} */}
				</form>

				<div>
					<Button	disabled={isDisable} type="button"	onClick={() => setIsModalOpen(false)}>
						{isDisable ? 'Preencha todos os campos' : 'Salvar'}
					</Button>
					<Button	type="button"	onClick={() => setIsModalOpen(false)}	danger>
            Cancelar
					</Button>
				</div>

			</ModalBody>
		</Overlay>
	);
}