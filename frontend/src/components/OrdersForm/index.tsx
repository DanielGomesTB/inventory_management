import { useState } from 'react';

import { Form, InnerContainer } from './style';
import { Text } from '../CustomersForm/style';
import { ICustomerApi, IProductApi } from '../../types';

interface IProducts {
  productName: string;
  quantity: number;
}

interface IProps {
  customersData: ICustomerApi[];
  productsData: IProductApi[];
}

export default function OrdersForm(props: IProps) {
	const {customersData, productsData} = props;
  
	const [orderStatus, setOrderStatus] = useState<string>('pending');
	const [orderType, setOrderType] = useState<string>('Varejo');
	const [customerId, setCustomerId] = useState<string>('');
	const [productName, setProductName] = useState<string>('');
	const [quantity, setQuantity] = useState<number>(0);
	const [products, setProducts] = useState<IProducts[]>([]);

	const handleClick = () => {
		console.log({
			orderStatus,
			orderType,
			customerId,
			products,
		});
	};

	const handleAddProduct = () => {
		const updatedProducts = [...products, { productName, quantity }];
		setProducts(updatedProducts);
	};

	return (
		<>
			<Form>
				<Text>+ Criar novo pedido</Text>
				<label htmlFor="customerId">
          Cliente
					<select
						id="customerId"
						value={customerId}
						onChange={(e) => setCustomerId(e.target.value)}
					>
						{customersData.map(({ customer_id, customer_name }) => (
							<option key={customer_id} value={customer_id}>{customer_name}</option>
						))}
					</select>
				</label>

				<label htmlFor="orderType">Tipo de pedido</label>
				<select
					id="orderType"
					value={orderType}
					onChange={(e) => setOrderType(e.target.value)}
				>
					<option value="Varejo">Varejo</option>
					<option value="Atacado">Atacado</option>
				</select>

				<label htmlFor="orderStatus">
          Status
					<select
						id="orderStatus"
						value={orderStatus}
						onChange={(e) => setOrderStatus(e.target.value)}
					>
						<option value="pending">Pendente</option>
						<option value="started">Iniciado</option>
						<option value="completed">Concluído</option>
						<option value="cancelled">Cancelado</option>
					</select>
				</label>

				<button
					type="button"
					onClick={handleClick}
					disabled={products.length === 0}
				>
          Registrar Pedido
				</button>

				<div>
					<h3>Produtos inclusos no pedido</h3>
					<InnerContainer>
						<label htmlFor="productName">
              Produto
							<select
								id="productName"
								value={productName}
								onChange={(e) => setProductName(e.target.value)}
							>
								{productsData.map(({ product_id, product_name }) => (
									<option key={product_id} value={product_id}>{product_name}</option>
								))}
							</select>
						</label>

						<label htmlFor="quantity">
              Quantidade
							<input
								type="number"
								id="quantity"
								value={quantity}
								onChange={(e) => setQuantity(Number(e.target.value))}
							/>
						</label>

						<button type="button" onClick={handleAddProduct}>
              Adicionar
						</button>
					</InnerContainer>
				</div>

			</Form>

			{products.map((product, index) => (
				<div key={index}>
					{`${product.productName} - ${product.quantity}`}
				</div>
			))}
		</>
	);
}
