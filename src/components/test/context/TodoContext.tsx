import { createContext } from 'react';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoContextProps {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  fetchTodos: () => Promise<void>;
}

const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
  fetchTodos: async () => {},
});

export default TodoContext;
