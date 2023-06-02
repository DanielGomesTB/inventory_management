import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

export default function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const context = useMemo(() => ({
    isLoading, setIsLoading,
  }), [isLoading]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
