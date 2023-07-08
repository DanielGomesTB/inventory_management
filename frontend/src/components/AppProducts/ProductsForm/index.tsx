import { useContext, useState } from 'react';
import { TbNeedleThread } from 'react-icons/tb';

import { DynamicInputs } from '../../DynamicInputs/DynamicInputs';
import { ISelectedMaterials } from '../../../types';
import { insert } from '../../../services/api/api';
import { Container } from './style';
import FormContainer from '../../FormContainer';
import Context from '../../../context/Context';
import Label from '../../Label';

interface IProps {
	fetchApi: () => Promise<void>;
}

export default function ProductsForm(props: IProps) {
	const { fetchApi} = props;

	const { materialsData } = useContext(Context);

	const [productName, setProductName] = useState<string>('');
	const [sellingPrice, setSellingPrice] = useState<string>('');
	const [materials, setMaterials] = useState<ISelectedMaterials[]>([{material_id: '', quantity: ''}]);

	const handleClick = async () => {

		const payload = {
			product_name: productName,
			selling_price: sellingPrice,
			materials,
		};
		await insert('products', payload);

		setProductName('');
		setSellingPrice('');
		setMaterials([{material_id: '', quantity: ''}]);

		await fetchApi();
	};

	return (
		<FormContainer
			title="Catalogar novo produto"
			icon={<TbNeedleThread />}
			handleClick={handleClick}
			buttonText="Salvar Produto"
			isDisabled={!materials.every((e) => e.material_id && e.quantity)}
		>
			<Container>
				<div>
					<Label label='Descrição do Produto' value={{productName}}	width={80} setState={setProductName} />
					<Label label='Preço' type="number" value={{sellingPrice}}	width={20} setState={setSellingPrice} />
				</div>

				<DynamicInputs
					title="Materiais utilizados na fabricação"
					label="Materiais"
					field="material"
					apiData={materialsData}
					selectedData={materials}
					initialData={{ material_id: '', quantity: '' }}
					setState={setMaterials}
				/>
			</Container>

		</FormContainer>
	);
}
