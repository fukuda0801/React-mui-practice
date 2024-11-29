import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<LoginPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
