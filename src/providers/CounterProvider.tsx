import { ReactNode, useState } from 'react';
import CounterContext from '../context/CounterContext';

interface CounterProviderProps {
  children: ReactNode;
}

const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
