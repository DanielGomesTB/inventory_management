import { useState } from 'react';
import { IMaterialApi } from '../../types';
import { Button, InnerContainer, SelectLabel } from './style';
import { TbNeedleThread } from 'react-icons/tb';
import Label from '../Label';
import FormContainer from '../FormContainer';

interface IProps {
  materialsData: IMaterialApi[];
}

interface IMaterials {
  material: string;
  quantity: string;
}

export default function ProductsForm(props: IProps) {
	const { materialsData } = props;
	const [productName, setProductName] = useState<string>('');
	const [sellingPrice, setSellingPrice] = useState<string>('');
	const [material, setMaterial] = useState<string>('');
	const [quantity, setQuantity] = useState<string>('');
	const [materials, setMaterials] = useState<IMaterials[]>([{material: '', quantity: ''}]);

	const handleClick = () => {
		console.log({
			productName,
			sellingPrice,
			materials,
		});
	};

	const handleAddMaterial = () => {
		const updatedMaterials = [...materials, { material, quantity }];
		setMaterials(updatedMaterials);
	};

	return (

		<FormContainer
			title="Catalogar novo produto"
			icon={<TbNeedleThread />}
			handleClick={handleClick}
			buttonText="Salvar Produto"
			isDisabled={materials.length === 0}
		>

			<div className='forms'>
				<div className='main-form'>
					<Label label='Descrição do Produto' value={{productName}}	width={40} setState={setProductName} />
					<Label label='Preço' type="number" value={{sellingPrice}}	width={10} setState={setSellingPrice} />
				</div>

				<InnerContainer>
					<h3>Materiais utilizados na fabricação</h3>
					<div className='inputs'>
						<SelectLabel htmlFor="materialName" width={15}>
              Material
							<select id="materialName"	value={material} onChange={(e) => setMaterial(e.target.value)}>
								{materialsData.map(({ material_id, material_name }) => (
									<option key={material_id} value={material_id}>{`${material_id} - ${material_name}`}</option>
								))}
							</select>
						</SelectLabel>
						
						<Label label='Quantidade' type="number" value={{quantity}}	width={10} setState={setQuantity} />

						<Button type="button" onClick={handleAddMaterial}>
              Adicionar
						</Button>
					
						{materials.map((material, index) => (
							<div key={index}>
								{`${material.material} - ${material.quantity}`}
							</div>
						))}
					</div>
				</InnerContainer>
			</div>

		</FormContainer>
	);
}
