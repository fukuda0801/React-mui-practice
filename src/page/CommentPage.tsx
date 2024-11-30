import { Chip, CircularProgress, Container, Typography } from '@mui/material';
import SortControl from '../components/test/memo/SortControl';
import CommentList from '../components/test/memo/CommentList';
import { useEffect, useMemo, useState } from 'react';
import { Comment } from '../types/apiType';
import { getComments } from '../api/comment';

const CommentPage: React.FC = () => {
  // コメント一覧を格納
  const [comments, setComments] = useState<Comment[]>([]);
  // ソート
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  // ローディング
  const [loading, setLoading] = useState<boolean>(true);
  // 再レンダリング確認用
  const [count, setCount] = useState<number>(0);

  // コメント一覧を取得
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        console.log('useEffectが実行されました（[]）');
        const res = await getComments(100, 1);
        setComments(res);
      } catch (error) {
        console.error('データの取得に失敗しました', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  // コメントをソート（メモ化）
  const sortedComments = useMemo(() => {
    console.log('sortedCommentsが実行されました');
    const sorted = [...comments];
    sorted.sort((a, b) => {
      if (a.name < b.name) return sortOrder === 'asc' ? -1 : 1;
      if (a.name > b.name) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [comments, sortOrder]);

  //  コメントをソート（メモ化しない）
  // const noMemoSortedComments = () => {
  //   console.log('sortCommentsが実行されました');
  //   const sorted = [...comments];
  //   sorted.sort((a, b) => {
  //     if (a.name < b.name) return sortOrder === 'asc' ? -1 : 1;
  //     if (a.name > b.name) return sortOrder === 'asc' ? 1 : -1;
  //     return 0;
  //   });
  //   return sorted;
  // };

  // const sortedComments = noMemoSortedComments();

  if (loading) {
    return (
      <Container style={{ marginTop: '2rem' }}>
        <CircularProgress color="secondary" />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        コメント一覧
        <Chip
          label={`再レンダリングを起こす: ${count}`}
          clickable
          onClick={() => setCount((prev) => prev + 1)}
          sx={{ marginLeft: '2rem' }}
          color="success"
        />
      </Typography>
      <SortControl sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <CommentList comments={sortedComments} />
    </Container>
  );
};

export default CommentPage;
