import { ISelectedMaterials, ISelectedProducts, IMaterialApi, IProductApi } from '../../types';

import { Button } from '../../styles/Button';
import { CustomLabel } from './style';

interface ISelectedItems{
  quantity: string | number;
	product_id?: string | number;
	material_id?: string | number;
	[key: string]: number | string | undefined;
}

interface Props {
  title: string;
	label: string;
	field: string;
  apiData: (IMaterialApi | IProductApi)[];
  selectedData: (ISelectedMaterials | ISelectedProducts)[];
	initialData: (ISelectedMaterials | ISelectedProducts);
	setState: React.Dispatch<React.SetStateAction<ISelectedItems[]>>
}

export function DynamicInputs(props: Props) {
	const { title, label, field, selectedData, initialData, apiData, setState} = props;

	const fieldId = `${field}_id`;
	const fieldName = `${field}_name`;

	const handleAddProduct = () => {
		const updated = [...selectedData, initialData];
		setState(updated);
	};

	const handleRemoveProduct = (index: number) => {
		const updated = [...selectedData];
		updated.splice(index, 1);
		setState(updated);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
		const {name, value} = e.target;
		const list = [...selectedData];
		list[index][name] = value;
		setState(list);
	};

	return (
		<>
			<h4>{title}</h4>

			{selectedData.map((item, index) => (
				<div key={index} className="custom-info">

					<CustomLabel htmlFor={fieldId} width={60}>
						{index === 0 && label}
						<select
							id={fieldId}
							name={fieldId}
							value={item[fieldId]}
							onChange={(e) => handleChange(e, index)}
						>
							{apiData.map((element, index) => (
								<option key={index} value={element[fieldId]}>
									{`${element[fieldId]} - ${element[fieldName]}`}
								</option>
							))}
						</select>
					</CustomLabel>

					<CustomLabel htmlFor="quantity" width={20}>
						{index === 0 && 'Quantidade'}
						<input
							id="quantity"
							name="quantity"
							type="number"
							value={item.quantity}
							onChange={(e) => handleChange(e, index)}
						/>
					</CustomLabel>

					{index === selectedData.length - 1 && selectedData.length < 10 ? (
						<Button
							type="button"
							width="20%"
							disabled={!(item[fieldId] && item.quantity)}
							onClick={handleAddProduct}
						>
              Adicionar
						</Button>
					) : (
						<Button type="button" width="20%" onClick={() => handleRemoveProduct(index)} danger>
              Remover
						</Button>
					)}

				</div>
			))}
		</>
	);
}
