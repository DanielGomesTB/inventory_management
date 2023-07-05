import { IProductApi } from '../../types';
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';
import { Card, Container, HeaderBar, Text } from './style';
import { MdDeleteForever } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import { GiClothes } from 'react-icons/gi';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useState } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';

interface IProps {
  productsData: IProductApi[];
}

export default function ProductsTable(props : IProps) {
	const {productsData} = props;

	const [qty, setQty] = useState<number>(0);

	if (!productsData || productsData.length === 0) {
		return <p>Nenhum dado disponível.</p>;
	}

	const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK4iCP11ex4FIfZ7JOcXGHO9NIAcN0UMboImcFdakZKM55Tr8FX0CyULaO9Mrhx-sePM&usqp=CAU';

	return (
		<Container>

			<HeaderBar>
				<Text><GiClothes /> Produtos</Text>
				<button type="button"><BsCartPlusFill />Criar Pedido</button>
			</HeaderBar>

			<div className="products">
				{productsData.map((item) => (
					<Card key={item.product_id}>
						<span className='card-header'>{item.product_name}</span>

						<div className='card-main'>
							<img src={url} alt={item.product_name} />
							<div>
								<p>{formatCurrency(item.selling_price)}</p>
								<span>{formatDate(item.created_at)}</span>
							</div>
						</div>

						<div className='card-footer'>
							<div className='card-footer-controllers'>
								<button type="button"onClick={() => setQty(qty - 1)}><AiFillMinusCircle /></button>
								<span>{qty}</span>
								<button type="button" onClick={() => setQty(qty + 1)}><AiFillPlusCircle /></button>
							</div>
							<div className='card-footer-editors'>
								<button type="button">
									<RiEdit2Fill style={{color: 'var(--zinc-50)'}} />
								</button>
								<button type="button">
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
