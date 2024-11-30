import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post, UserDetail } from '../types/apiType';
import { getUserDetail } from '../api/user';
import {
  Button,
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const UserDetailPage: React.FC = () => {
  // URLパラメーターからユーザーidを取得
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserDetail | null>();
  const [loading, setLoading] = useState<boolean>(true);

  // ユーザーデータを取得
  useEffect(() => {
    const fetchUser = async () => {
      console.log('useEffectが実行されました([])- fetchUser');
      try {
        setLoading(true);
        const res = await getUserDetail(Number(id));
        setUser(res);
      } catch (error) {
        console.error('データの取得に失敗しました', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ marginTop: '2rem', textAlign: 'center' }}>
        <CircularProgress color="secondary" />
      </Container>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          component={Link}
          to="/memo-users"
        >
          ユーザー一覧へ戻る
        </Button>
        <StyledPaper elevation={3}>
          <Typography variant="h5" gutterBottom>
            {user.user.name} ({user.user.username})
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong>
            {user.user.email}
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong>
            {user.user.phone}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong>
            {}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Company:</strong>
            {user.user.company.name}
          </Typography>
          <Typography variant="body2">
            <em>{user.user.company.catchPhrase}</em>
          </Typography>
          <Typography variant="body2">{user.user.company.bs}</Typography>
        </StyledPaper>
      </Container>

      <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          component={Link}
          to="/memo-posts"
        >
          投稿一覧へ戻る
        </Button>
        <StyledPaper elevation={3}>
          <List disablePadding>
            {user.post.map((post: Post) => {
              return (
                <ListItem key={post.id}>
                  <ListItemIcon>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary={post.title} secondary={post.body} />
                </ListItem>
              );
            })}
          </List>
        </StyledPaper>
      </Container>
    </>
  );
};

export default UserDetailPage;
