import Provider from './context/Provider';
import Router from './routes/router'
import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
  return (
    <Provider>
      <GlobalStyles />
      <Router />
    </Provider>
  )
}
