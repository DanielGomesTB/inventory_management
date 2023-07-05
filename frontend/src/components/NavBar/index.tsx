import { Link } from 'react-router-dom';
import { RiGroupFill, RiArchiveFill } from 'react-icons/ri';
import { GiClothes } from 'react-icons/gi';
import { FaClipboardList } from 'react-icons/fa';
import { StyledNavBar } from './style';

export default function NavBar() {
	const style = { color: 'var(--emerald-400)'};
  
	return (
		<StyledNavBar>
			<ul>
				<Link to="/customers"><li><RiGroupFill style={style}/>Clientes</li></Link>
				<Link to="/orders"><li><FaClipboardList style={style}/>Pedidos</li></Link>
				<Link to="/products"><li><GiClothes style={style}/>Produtos</li></Link>
				<Link to="/materials"><li><RiArchiveFill style={style}/>Estoque</li></Link>
			</ul>
		</StyledNavBar>
	);
}
