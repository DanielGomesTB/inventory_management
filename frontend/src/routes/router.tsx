import { Routes, Route, BrowserRouter } from 'react-router-dom'

import NotFoundPage from '../pages/NotFoundPage/index'
import HomePage from '../pages/HomePage';
import CustomersPage from '../pages/CustomersPage';
import OrdersPage from '../pages/OrdersPage';
import ProductsPage from '../pages/ProductsPage';
import MaterialsPage from '../pages/MaterialsPage';
import NavBar from '../components/NavBar';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/materials" element={<MaterialsPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}