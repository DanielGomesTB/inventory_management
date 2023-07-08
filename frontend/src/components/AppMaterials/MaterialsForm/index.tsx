import { useState, useEffect } from 'react';
import { LuPackagePlus } from 'react-icons/lu';

import Label from '../../Label';
import FormContainer from '../../FormContainer';
import { insert } from '../../../services/api/api';


interface IProps {
  fetchApi: () => Promise<void>;
}

export default function MaterialsForm(props: IProps) {
	const {fetchApi} = props;

	const [materialName, setMaterialName] = useState<string>('');
	const [color, setColor] = useState<string>('');
	const [costPrice, setCostPrice] = useState<string>('');
	const [stock, setStock] = useState<string>('');

	const [isDisable, setIsDisable] = useState<boolean>(true);

	const handleClick = async () => {
		const payload = {
			material_name: materialName,
			color,
			cost_price: Number(costPrice),
			stock: Number(stock),
		};
		await insert('materials', payload);

		setMaterialName('');
		setColor('');
		setCostPrice('');
		setStock('');

		await fetchApi();
	};

	const handleDisable = () => {
		const isAnyFieldEmpty = !(materialName.length >= 3 && costPrice	&& stock);
		setIsDisable(isAnyFieldEmpty);
	};

	useEffect(() => {
		handleDisable();
	}, [materialName, color, costPrice, stock]);

	return (
		<FormContainer
			title="Cadastrar novo material"
			icon={<LuPackagePlus />}
			handleClick={handleClick}
			buttonText="Cadastrar"
			isDisabled={isDisable}
		>
			
			<div key='1'>
				<Label label='Descrição do Material' value={{materialName}} width={50} setState={setMaterialName} />
				<Label label='Cor' value={{color}} width={20} maxlength={15} setState={setColor} />
				<Label label='Preço de Custo' type='number' value={{costPrice}} width={15} setState={setCostPrice} />
				<Label label='Quantidade em estoque' type='number' value={{stock}} width={15} setState={setStock} />
			</div>

		</FormContainer>
	);
}
