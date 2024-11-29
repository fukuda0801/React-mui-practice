import { Chip, CircularProgress, Container, Typography } from '@mui/material';
import SearchBar from '../components/test/memo/SearchBar';
import UserList from '../components/test/memo/UserList';
import { useEffect, useMemo, useState } from 'react';
import { User } from '../types/apiType';
import { getUsers } from '../api/user';

const MemoPage: React.FC = () => {
  // ユーザー一覧を格納
  const [users, setUsers] = useState<User[]>([]);
  // 検索キーワードを格納
  const [searchTerm, setSearchTerm] = useState<string>('');
  // ローディング状態を格納
  const [loading, setLoading] = useState<boolean>(true);
  // 再レンダリングテスト用
  const [count, setCount] = useState<number>(0);

  // user情報を取得
  useEffect(() => {
    setLoading(true);
    console.log('useEffectが実行されました（初回）');
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error('データの取得に失敗しました', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 検索キーワードでフィルタリング（メモ化）
  const filterUsers = useMemo(() => {
    console.log('filterUsers関数(memo化)が実行されました');
    return users.filter((user: User) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [users, searchTerm]);

  // 検索キーワードでフィルタリング(メモ化していないバージョン) => 再レンダリングの度に実行されている
  // const noMemoFilterUsers = () => {
  //   console.log('filterUsers関数(memo化していない)が実行されました');
  //   return users.filter((user: User) => {
  //     return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  // };

  // const filterUsers = noMemoFilterUsers();

  // ロード中の場合
  if (loading) {
    return (
      <Container sx={{ marginTop: '2rem' }}>
        <CircularProgress color="success" />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        User List{' '}
        <Chip
          label={`再レンダリングを起こす:カウント数 ${count}`}
          variant="filled"
          clickable
          color="primary"
          sx={{ marginLeft: '2rem' }}
          onClick={() => setCount((prev) => prev + 1)}
        />
      </Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserList users={filterUsers} />
    </Container>
  );
};

export default MemoPage;
