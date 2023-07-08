import { useState, useContext } from 'react';
import { BsFillClipboardPlusFill } from 'react-icons/bs';

import { insert } from '../../../services/api/api';
import { ISelectedProducts } from '../../../types';
import FormContainer from '../../FormContainer';
import Context from '../../../context/Context';

import { Container, CustomLabel } from './style';
import { DynamicInputs } from '../../DynamicInputs/DynamicInputs';

interface IProps {
	fetchApi: () => Promise<void>;
}

export default function OrdersForm(props: IProps) {
	const { fetchApi } = props;

	const { customersData, productsData } = useContext(Context);
  
	const [customerId, setCustomerId] = useState<string>('');
	const [orderType, setOrderType] = useState<string>('varejo');
	const [orderStatus, setOrderStatus] = useState<string>('pendente');

	const [products, setProducts] = useState<ISelectedProducts[]>([{product_id: '', quantity: ''}]);

	const handleClick = async () => {
		const payload = {
			customer_id: Number(customerId),
			order_type: orderType,
			order_status: orderStatus,
			products,
		};

		await insert('orders', payload);

		setCustomerId('');
		setOrderType('varejo');
		setOrderStatus('pendente');
		setProducts([{product_id: '', quantity: ''}]);

		await fetchApi();
	};

	return (
		<FormContainer
			title="Criar novo pedido"
			icon={<BsFillClipboardPlusFill />}
			handleClick={handleClick}
			buttonText="Criar Pedido"
			isDisabled={!products.every((e) => e.product_id && e.quantity)}
		>

			<Container>
				<div>
					<CustomLabel htmlFor="customerId" width={60}>
						Cliente
						<select
							id="customerId"
							name="customer_id"
							value={customerId}
							onChange={(e) => setCustomerId(e.target.value)}
						>
							{customersData.map(({ customer_id, customer_name }) => (
								<option
									key={customer_id}
									value={customer_id}
								>
									{customer_name}
								</option>
							))}
						</select>
					</CustomLabel>

					<CustomLabel htmlFor="orderType" width={20}>
						Tipo de pedido
						<select
							id="orderType"
							name="order_type"
							value={orderType}
							onChange={(e) => setOrderType(e.target.value)}
						>
							<option value="varejo">Varejo</option>
							<option value="atacado">Atacado</option>
						</select>
					</CustomLabel>

					<CustomLabel htmlFor="orderStatus" width={20}>
						Status
						<select
							id="orderStatus"
							name="order_status"
							value={orderStatus}
							onChange={(e) => setOrderStatus(e.target.value)}
						>
							<option value="pendente">Pendente</option>
							<option value="iniciado">Iniciado</option>
							<option value="concluído">Concluído</option>
							<option value="cancelado">Cancelado</option>
						</select>
					</CustomLabel>
				</div>
				
				<DynamicInputs
					title="Produtos inclusos no pedido"
					label="Produtos"
					field="product"
					apiData={productsData}
					selectedData={products}
					initialData={{ product_id: '', quantity: '' }}
					setState={setProducts}
				/>
			</Container>

		</FormContainer>
	);
}
