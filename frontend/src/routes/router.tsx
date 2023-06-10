import { Routes, Route, BrowserRouter } from 'react-router-dom'

import NotFoundPage from '../pages/NotFoundPage/index'
import HomePage from '../pages/HomePage';
import CustomersForm from '../components/CustomersForm';
import OrdersForm from '../components/OrdersForm';
import ProductsForm from '../components/ProductsForm';
import MaterialsForm from '../components/MaterialsForm';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersForm />} />
        <Route path="/orders" element={<OrdersForm />} />
        <Route path="/products" element={<ProductsForm />} />
        <Route path="/materials" element={<MaterialsForm />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}