import { Chip, CircularProgress, Container, Typography } from '@mui/material';
import SearchBar from '../components/test/memo/SearchBar';
import PostList from '../components/test/memo/PostList';
import { useEffect, useMemo, useState } from 'react';
import { Post } from '../types/apiType';
import { getPosts } from '../api/post';
import ModalExample from '../components/test/context/ModalExample';

const PostPage: React.FC = () => {
  // 投稿一覧
  const [posts, setPosts] = useState<Post[]>([]);
  // 検索キーワード
  const [searchTerm, setSearchTerm] = useState<string>('');
  // ローディング
  const [loading, setLoading] = useState<boolean>(true);
  // 再レンダリング確認用
  const [count, setCount] = useState<number>(0);

  // 投稿データ取得
  useEffect(() => {
    console.log('useEffectが実行されました（[]）');
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await getPosts(50, 1);
        setPosts(res);
      } catch (error) {
        console.error('データの取得に失敗しました：', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 検索キーワードに基づくフィルタリングをメモ化
  const filteredPosts = useMemo(() => {
    console.log('filteredPostsが実行されました');
    return posts.filter((post: Post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [posts, searchTerm]);

  // 検索キーワードに基づくフィルタリングをメモ化しない場合
  // const noMemoFilteredPosts = () => {
  //   console.log('filteredPostsが実行されました');
  //   return posts.filter((post: Post) => {
  //     return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  // };

  // const filteredPosts = noMemoFilteredPosts();

  // ロード中の場合
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
        投稿一覧
        <Chip
          label={`再レンダリングを起こす: ${count}`}
          clickable
          color="secondary"
          onClick={() => setCount((prev) => prev + 1)}
          sx={{ marginLeft: '2rem' }}
        />
      </Typography>
      <ModalExample />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PostList posts={filteredPosts} />
    </Container>
  );
};

export default PostPage;
