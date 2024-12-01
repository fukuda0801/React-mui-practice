import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  styled,
} from '@mui/material';
import { Todo } from './TodoContext';
import useTodo from '../../../hooks/useTodo';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <StyledListItem>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        color="primary"
      />
      <ListItemText
        primary={todo.title}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => removeTodo(todo.id)}
      >
        <DeleteIcon />
      </IconButton>
    </StyledListItem>
  );
};

export default TodoItem;
