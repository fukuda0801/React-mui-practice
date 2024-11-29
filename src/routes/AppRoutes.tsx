import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import MemoPage from '../page/MemoPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<LoginPage />} /> */}
        <Route path="/memo" element={<MemoPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
