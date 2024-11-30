import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import MemoPage from '../page/MemoPage';
import PostPage from '../page/PostPage';
import CommentPage from '../page/CommentPage';
import UserDetailPage from '../page/UserDetailPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<LoginPage />} /> */}
        <Route path="/memo-users" element={<MemoPage />} />
        <Route path="/memo-users/:id" element={<UserDetailPage />} />

        <Route path="/memo-posts" element={<PostPage />} />
        <Route path="/memo-comments" element={<CommentPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
