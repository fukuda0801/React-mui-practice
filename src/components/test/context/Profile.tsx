import { Alert, Box, Button, Snackbar, styled, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { FormEvent, useState } from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [name, setName] = useState<string>(user?.name || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();

    try {
      console.log('プロフィール更新:', { name, email });
      setSuccess('プロフィールが更新されました');
      setOpenSnackBar(true);
    } catch (error) {
      console.error(error);
      setError('プロフィールの更新に失敗しました');
      setOpenSnackBar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackBar(false);
    setSuccess('');
    setError('');
  };

  return (
    <StyledBox component="form" onSubmit={handleUpdate}>
      <TextField
        label="名前"
        variant="outlined"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="メールアドレス"
        variant="outlined"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        更新
      </Button>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        {success ? (
          <>
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              sx={{ width: '100%' }}
            >
              {success}
            </Alert>
          </>
        ) : (
          <>
            <Alert
              onClose={handleCloseSnackbar}
              severity="error"
              sx={{ width: '100%' }}
            >
              {error}
            </Alert>
          </>
        )}
      </Snackbar>
    </StyledBox>
  );
};

export default Profile;
