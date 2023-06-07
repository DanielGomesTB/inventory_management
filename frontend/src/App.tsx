import { GlobalStyles } from './styles/GlobalStyles';
import MaterialsForm from './components/MaterialsForm';
import ProductsForm from './components/ProductsForm';
import OrdersForm from './components/OrdersForm';
import CustomersForm from './components/CustomersForm';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <h1>Inventory Management</h1>
      <CustomersForm />
      <MaterialsForm />
      <ProductsForm />
      <OrdersForm />
    </>
  )
}
