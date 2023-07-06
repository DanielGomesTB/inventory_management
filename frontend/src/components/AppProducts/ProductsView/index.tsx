import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import { GiClothes } from 'react-icons/gi';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsCartPlusFill } from 'react-icons/bs';

import { IProductApi, ISelectedProducts } from '../../../types';
import formatDate from '../../../utils/formatDate';
import formatCurrency from '../../../utils/formatCurrency';
import formatTitle from '../../../utils/formatTitle';
import Context from '../../../context/Context';

import { Card, Container, HeaderBar, Text } from './style';
import { remove } from '../../../services/api/api';
import EditProductsModal from '../EditProductModal';
import { Button } from '../../../styles/Button';


interface IProps {
  productsData: IProductApi[];
	setProductsData: React.Dispatch<React.SetStateAction<IProductApi[]>>;
	fetchApi: () => Promise<void>;
}

export default function ProductsTable(props : IProps) {
	const {productsData, setProductsData, fetchApi} = props;

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [inEdit, setInEdit] = useState<IProductApi>(productsData[0]);

	const navigate = useNavigate();

	const { setSelectedProducts } = useContext(Context);

	if (!productsData || productsData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	const handleOrderQuantity = (productId: number, type: string) => {
		setProductsData((prevState) => {
			const index = prevState.findIndex((product) => product.product_id === productId);
			const newProducts = [...prevState];

			let quantity;

			if (type === 'increase') quantity = !newProducts[index].quantity ? 1 : newProducts[index].quantity + 1;
			if (type === 'decrease') quantity = !newProducts[index].quantity ? 0 : newProducts[index].quantity - 1;

			newProducts[index] = { ...newProducts[index], quantity	};

			return newProducts;
		});

		const selectedNewProducts: ISelectedProducts[] = [];

		productsData.forEach((item) => {
			if (item.quantity) {
				selectedNewProducts.push({
					product_id: item.product_id,
					quantity: item.quantity,
				});
			}
		});

		setSelectedProducts(selectedNewProducts);
	};

	const handleEdit = async (product: IProductApi) => {
		setInEdit(product);
		setIsModalOpen(true);
	};

	const handleDelete = async (id: number, product: string) => {
		const confirmed = window.confirm(`Tem certeza que quer deletar ${product.toUpperCase()}?`);

		if (confirmed) {
			await remove('products', id);
			await fetchApi();
		}
	};

	const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK4iCP11ex4FIfZ7JOcXGHO9NIAcN0UMboImcFdakZKM55Tr8FX0CyULaO9Mrhx-sePM&usqp=CAU';

	return (
		<Container>
			{isModalOpen &&
				<EditProductsModal
					setIsModalOpen={setIsModalOpen}
					inEdit={inEdit}
					fetchApi={fetchApi}
				/>
			}

			<HeaderBar>
				<Text><GiClothes /> Produtos</Text>
				<Button type="button" width={'160px'} onClick={() => navigate('/orders')}><BsCartPlusFill />Criar Pedido</Button>
			</HeaderBar>

			<div className="products">
				{productsData.map((item) => (
					<Card key={item.product_id}>
						<span className='card-header'>{formatTitle(item.product_name, 'title')}</span>

						<div className='card-main'>
							<img src={url} alt={item.product_name} />
							<div>
								<p>{formatCurrency(item.selling_price)}</p>
								<span>{formatDate(item.created_at)}</span>
							</div>
						</div>

						<div className='card-footer'>
							<div className='card-footer-controllers'>
								<button type="button" onClick={() => handleOrderQuantity(item.product_id, 'decrease')}><AiFillMinusCircle /></button>
								<span>{item.quantity || 0}</span>
								<button type="button" onClick={() => handleOrderQuantity(item.product_id, 'increase')}><AiFillPlusCircle /></button>
							</div>
							<div className='card-footer-editors'>
								<button type="button" onClick={() => handleEdit(item)}>
									<RiEdit2Fill style={{color: 'var(--zinc-50)'}} />
								</button>
								<button type="button" onClick={() => handleDelete(item.product_id, item.product_name)}>
									<MdDeleteForever style={{color: 'var(--red-500)'}}/>
								</button>
							</div>
						</div>

					</Card>
				))}
			</div>

		</Container>
	);
}
