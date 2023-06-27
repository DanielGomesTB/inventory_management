import { useState } from 'react';
import FormContainer from '../FormContainer';
import { LuPackagePlus } from 'react-icons/lu';

export default function MaterialsForm() {
	const [materialName, setMaterialName] = useState<string>('');
	const [color, setColor] = useState<string>('');
	const [costPrice, setCostPrice] = useState<number>(0);
	const [stock, setStock] = useState<number>(0);

	const handleClick = () => {
		console.log({
			materialName,
			color,
			costPrice,
			stock,
		});
	};

	return (
		<FormContainer
			title="Cadastrar novo material"
			icon={<LuPackagePlus />}
			handleClick={handleClick}
			buttonText="Cadastrar"
			isDisabled={false}
		>

			<label htmlFor="materialName">
        Descrição do Material
				<input
					type="text"
					id="materialName"
					value={materialName}
					onChange={(e) => setMaterialName(e.target.value)}
				/>
			</label>

			<label htmlFor="color">
        Cor
				<input
					type="text"
					id="color"
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
			</label>

			<label htmlFor="costPrice">
        Preço de Custo
				<input
					type="number"
					id="costPrice"
					value={costPrice}
					onChange={(e) => setCostPrice(Number(e.target.value))}
				/>
			</label>

			<label htmlFor="stock">
        Quantidade em estoque
				<input
					type="number"
					id="stock"
					value={stock}
					onChange={(e) => setStock(Number(e.target.value))}
				/>
			</label>

		</FormContainer>
	);
}
