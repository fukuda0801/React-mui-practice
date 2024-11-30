import { Container, styled } from '@mui/system';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Alert, Snackbar, Typography } from '@mui/material';
import LoginForm from '../components/test/context/LoginForm';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  // ログイン処理
  const handleLogin = async (email: string, password: string) => {
    try {
      await login({ email, password });
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('ログインに失敗しました。');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackBar = () => {
    setOpenSnackbar(false);
    setError('');
  };

  return (
    <StyledContainer maxWidth="md">
      <Typography component="h4" variant="h4">
        ログイン
      </Typography>
      <LoginForm onLogin={handleLogin} />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="error"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default LoginPage;
