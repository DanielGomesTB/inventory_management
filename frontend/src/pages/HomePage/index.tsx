import { Link } from 'react-router-dom';
import { RiGroupFill, RiArchiveFill } from 'react-icons/ri';
import { GiClothes } from 'react-icons/gi';
import { FaClipboardList } from 'react-icons/fa';
import { Container, Box } from './style';

export default function HomePage() {
	return (
		<Container>
			<Link to='/orders'>
				<Box>
					<FaClipboardList />
					<p>PEDIDOS</p>
				</Box>
			</Link>
			<Link to='/customers'>
				<Box>
					<RiGroupFill />
					<p>CLIENTES</p>
				</Box>
			</Link>
			<Link to='/products'>
				<Box>
					<GiClothes />
					<p>PRODUTOS</p>
				</Box>
			</Link>
			<Link to='/materials'>
				<Box>
					<RiArchiveFill />
					<p>ESTOQUE</p>
				</Box>
			</Link>
		</Container >
	);
}
