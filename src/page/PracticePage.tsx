import { Container } from '@mui/material';
import TabManager from '../components/test/state/TabManager';

const PracticePage: React.FC = () => {
  return (
    <>
      <Container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <TabManager />
      </Container>
    </>
  );
};

export default PracticePage;
