import { ReactNode, useState } from 'react';
import TodoContext, { Todo } from '../components/test/context/TodoContext';
import config from '../api/api';

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await config.get<Todo[]>(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            _limit: 10,
          },
        }
      );
      setTodos(response.data);
    } catch (error) {
      console.error('todoの取得に失敗しました', error);
    }
  };

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, removeTodo, fetchTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
