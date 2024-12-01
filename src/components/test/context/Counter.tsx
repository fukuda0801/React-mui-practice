import { Box, Button, Typography } from '@mui/material';
import useCounter from '../../../hooks/useCounter';

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h5">カウント：{count}</Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={increment}
        sx={{ mt: 1 }}
      >
        カウントアップ
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={decrement}
        sx={{ mt: 1 }}
      >
        カウントダウン
      </Button>
    </Box>
  );
};

export default Counter;
