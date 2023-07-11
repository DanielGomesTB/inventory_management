import React, { useEffect, useState } from 'react';
import { MdEditSquare } from 'react-icons/md';

import { IMaterialApi } from '../../../types';
import { update } from '../../../services/api/api';
import Label from '../../Label';

import { ModalBody, Overlay, Text } from './style';
import { Button } from '../../../styles/Button';


interface IProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	inEdit: IMaterialApi;
	fetchApi: () => Promise<void>;
}

export default function EditMaterialModal(props: IProps) {
	const {setIsModalOpen, inEdit, fetchApi} = props;

	const [materialName, setMaterialName] = useState<string>(inEdit.material_name);
	const [color, setColor] = useState<string>(inEdit.color);
	const [costPrice, setCostPrice] = useState<string>(inEdit.cost_price);
	const [stock, setStock] = useState<string>(inEdit.stock);
	const [isDisable, setIsDisable] = useState<boolean>(true);

	const handleDisable = () => {
		const isAnyFieldEmpty = !(
			materialName.length >= 3
			&& costPrice
			&& stock
		);
		setIsDisable(isAnyFieldEmpty);
	};

	const handleSaveData = async () => {
		const payload = {
			material_name: materialName,
			color,
			cost_price: Number(costPrice),
			stock: Number(stock),
		};
		await update('materials', inEdit.material_id, payload);
		await fetchApi();
		setIsModalOpen(false);
	};

	useEffect(() => {
		handleDisable();
	}, [materialName, color, costPrice, stock]);

	return (
		<Overlay>
			<ModalBody>
				<form>
					<Text><MdEditSquare /> Editar informações do Material</Text>
					<Label label='Descrição' value={{materialName}} setState={setMaterialName} />
					<Label label='Cor' value={{color}} setState={setColor} />
					<Label label='Preço de Custo' value={{costPrice}}	type='number' setState={setCostPrice} />
					<Label label='Estoque' value={{stock}}	type='stock' setState={setStock} />
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