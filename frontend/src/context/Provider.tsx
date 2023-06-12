import React, { useState, useMemo } from 'react';
// import PropTypes from 'prop-types';

import Context from './Context';

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const context = useMemo(() => ({
    isLoading, setIsLoading,
  }), [isLoading]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

// Provider.propTypes = {
//   children: PropTypes.node,
// }.isRequired;
