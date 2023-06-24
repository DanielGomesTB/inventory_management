import Provider from './context/Provider';
import Router from './routes/router';
import { GlobalStyles } from './styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';

export default function App() {
	return (
		<>
			<Provider>
				<GlobalStyles />
				<Router />
				<Toaster position="top-right"/>
			</Provider>
		</>
	);
}
