import { createContext } from 'react';

interface ContextValue {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  customersData: [];
  setCustomersData: React.Dispatch<React.SetStateAction<[]>>;
  ordersData: [];
  setOrdersData: React.Dispatch<React.SetStateAction<[]>>;
  productsData: [];
  setProductsData: React.Dispatch<React.SetStateAction<[]>>;
  materialsData: [];
  setMaterialsData: React.Dispatch<React.SetStateAction<[]>>;
}

const Context = createContext<ContextValue | undefined>(undefined);

export default Context;
