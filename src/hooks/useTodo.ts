import { useContext } from 'react';
import TodoContext from '../components/test/context/TodoContext';

const useTodo = () => {
  return useContext(TodoContext);
};

export default useTodo;
