import { createContext } from 'react';

interface ContextValue {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextValue | undefined>(undefined);

export default Context;
