import { createContext } from 'react';
import { ICustomerApi, IOrderApi, IProductApi, IMaterialApi, ISelectedProducts, ISelectedMaterials } from '../types';



interface IContextValue {
  customersData: ICustomerApi[];
  setCustomersData: React.Dispatch<React.SetStateAction<ICustomerApi[]>>;
  ordersData: IOrderApi[];
  setOrdersData: React.Dispatch<React.SetStateAction<IOrderApi[]>>;
  productsData: IProductApi[];
  setProductsData: React.Dispatch<React.SetStateAction<IProductApi[]>>;
  materialsData: IMaterialApi[];
  setMaterialsData: React.Dispatch<React.SetStateAction<IMaterialApi[]>>;
  selectedProducts: ISelectedProducts[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<ISelectedProducts[]>>;
  selectedMaterials: ISelectedMaterials[];
  setSelectedMaterials: React.Dispatch<React.SetStateAction<ISelectedMaterials[]>>;
}

const Context = createContext({} as IContextValue);

export default Context;
