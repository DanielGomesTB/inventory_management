import { LuPackageOpen } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<div style={{textAlign: 'center', width: '100%'}}>
			<p>404 - Page Not Found</p>
			<p>The requested page does not exist.</p>
			<br />
			<h1>Ops!</h1>
			<br />
			<LuPackageOpen style={{fontSize: '64rem', margin: '24px', color: 'var(--main-red)'}}/>
			<h2>Parece que essa caixa está vazia.</h2>
			<h2>Talvez ela tenha sido movida para um local desconhecido.</h2>
			<h2>Vamos ajudá-lo a encontrar o <Link to="/"><span style={{color: 'var(--sec-green)'}}>caminho certo!</span></Link></h2>
		</div>
	);
}
