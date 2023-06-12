import React, { useState, useMemo } from 'react';
// import PropTypes from 'prop-types';

import Context from './Context';

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [customersData, setCustomersData] = useState<[]>([]);
  const [ordersData, setOrdersData] = useState<[]>([]);
  const [productsData, setProductsData] = useState<[]>([]);
  const [materialsData, setMaterialsData] = useState<[]>([]);

  const context = useMemo(() => ({
    isLoading, setIsLoading,
    customersData, setCustomersData,
    ordersData, setOrdersData,
    productsData, setProductsData,
    materialsData, setMaterialsData,
  }), [isLoading, customersData, ordersData, productsData, materialsData]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

// Provider.propTypes = {
//   children: PropTypes.node,
// }.isRequired;
