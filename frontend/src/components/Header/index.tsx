import { Link } from 'react-router-dom';
import { Container } from './style';
import { TbUserCircle } from 'react-icons/tb';

export default function Header() {
	const style = { fontSize: '36rem'};

	return (
		<Container>
			<h1>
				<Link to="/">Inventory Management</Link>
			</h1>
			<TbUserCircle  style={style}/>
		</Container>
	);
}