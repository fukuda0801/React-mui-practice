import { Container, List, styled, Typography } from '@mui/material';
import AddTodo from '../components/test/context/AddTodo';
import useTodo from '../hooks/useTodo';
import { useEffect } from 'react';
import TodoItem from '../components/test/context/TodoItem';

const StyledList = styled(List)({
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
});

const ToDoPage: React.FC = () => {
  const { todos, fetchTodos } = useTodo();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <>
      <Container sx={{ marginTop: '2rem' }}>
        <AddTodo />
        <Typography variant="h5" align="center" gutterBottom>
          Todoリスト
        </Typography>
        <StyledList>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </StyledList>
      </Container>
    </>
  );
};

export default ToDoPage;
