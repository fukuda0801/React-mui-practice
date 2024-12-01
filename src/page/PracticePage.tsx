import { Container } from '@mui/material';
import TabManager from '../components/test/state/TabManager';
import ProductList from '../components/test/callback/ProductList';

const PracticePage: React.FC = () => {
  return (
    <>
      <Container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <TabManager />
      </Container>

      <ProductList />
    </>
  );
};

export default PracticePage;
