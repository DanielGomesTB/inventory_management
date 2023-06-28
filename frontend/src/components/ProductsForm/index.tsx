import { useState } from 'react';
import { IMaterialApi } from '../../types';
import { Container, CustomLabel } from './style';
import { TbNeedleThread } from 'react-icons/tb';
import Label from '../Label';
import FormContainer from '../FormContainer';
import { insert } from '../../services/api/api';

interface IProps {
  materialsData: IMaterialApi[];
	fetchApi: () => Promise<void>;
}

interface IMaterials {
  material_id: string;
  quantity: string;
	[key: string]: number | string;
}

export default function ProductsForm(props: IProps) {
	const { materialsData, fetchApi} = props;

	const [productName, setProductName] = useState<string>('');
	const [sellingPrice, setSellingPrice] = useState<string>('');
	const [materials, setMaterials] = useState<IMaterials[]>([{material_id: '', quantity: ''}]);

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

	const handleAddMaterial = () => {
		const updatedMaterials = [...materials, { material_id: '', quantity: '' }];
		setMaterials(updatedMaterials);
	};

	const handleRemoveMaterial = (index: number) => {
		const updatedMaterials = [...materials];
		updatedMaterials.splice(index, 1);
		setMaterials(updatedMaterials);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
		const {name, value} = e.target;
		const list = [...materials];
		list[index][name] = value;
		setMaterials(list);
	};

	return (
		<FormContainer
			title="Catalogar novo produto"
			icon={<TbNeedleThread />}
			handleClick={handleClick}
			buttonText="Salvar Produto"
			isDisabled={materials.length === 0}
		>
			<Container>

				<div className='products-info'>
					<Label label='Descrição do Produto' value={{productName}}	width={80} setState={setProductName} />
					<Label label='Preço' type="number" value={{sellingPrice}}	width={20} setState={setSellingPrice} />
				</div>

				<h4>Materiais utilizados na fabricação</h4>

				{materials.map((singleMaterial, index) => (
					<div key={index} className='materials-info'>

						<CustomLabel htmlFor="materialName" width={60}>
							{index ===  0 && 'Material'}
							<select
								id="materialName"
								name="material_id"
								value={singleMaterial.material_id}
								onChange={(e) => handleChange(e, index)}
							>
								{materialsData.map(({ material_id, material_name }) => (
									<option
										key={material_id}
										value={material_id}
									>
										{`${material_id} - ${material_name}`}
									</option>
								))}
							</select>
						</CustomLabel>

						<CustomLabel htmlFor="quantity" width={20}>
							{index ===  0 && 'Quantidade'}
							<input
								id="quantity"
								name="quantity"
								type="number"
								value={singleMaterial.quantity}
								onChange={(e) => handleChange(e, index)} 
							/>
						</CustomLabel>

						{index === materials.length -1 && materials.length < 10
							? (<button type="button" onClick={handleAddMaterial}>Adicionar</button>)
							: (<button
								type="button"
								onClick={() => handleRemoveMaterial(index)}
								style={{backgroundColor: 'var(--main-red)', color: 'var(--main-white)'}}
							>
								Remover
							</button>)
						}
						
					</div>
				))}

			</Container>

		</FormContainer>
	);
}
