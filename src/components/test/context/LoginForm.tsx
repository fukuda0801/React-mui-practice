import { Box, Button, styled, TextField } from '@mui/material';
import { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  width: '100%',
}));

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // 入力フィールドの変更
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // フォーム送信ハンドラー
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <StyledBox component="form" onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        ログイン
      </Button>
    </StyledBox>
  );
};

export default LoginForm;
