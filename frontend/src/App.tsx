import Provider from './context/Provider';
import Router from './routes/router'
import { GlobalStyles } from './styles/GlobalStyles';
// import NavBar from './components/NavBar';

export default function App() {
  return (
    <Provider>
      <GlobalStyles />
      {/* <NavBar /> */}
      <Router />
    </Provider>
  )
}
