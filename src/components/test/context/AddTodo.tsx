import { Box, Button, styled, TextField } from '@mui/material';
import { FormEvent, useState } from 'react';
import useTodo from '../../../hooks/useTodo';

const FormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const { addTodo } = useTodo();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormBox>
        <TextField
          label="新しいTodo"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
        >
          追加
        </Button>
      </FormBox>
    </form>
  );
};

export default AddTodo;
