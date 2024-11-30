import { createContext } from 'react';

interface CounterContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

export default CounterContext;
