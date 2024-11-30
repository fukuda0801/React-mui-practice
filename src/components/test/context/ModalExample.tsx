import { Box, Button, Modal, styled, Typography } from '@mui/material';
import useModal from '../../../hooks/useModal';

const StyledBox = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: 'calc(50% + 120px)',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '2px solid #000',
  padding: 10,
  boxShadow: '0px 0px 15px -10px #ff74e1;',
  backgroundColor: 'white',
  borderRadius: '10px',
  textAlign: 'center',
}));

const ModalExample: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <Button variant="outlined" onClick={openModal}>
        モーダルを開く
      </Button>
      <Modal open={isOpen} onClose={closeModal}>
        <StyledBox>
          <Typography variant="h6">モーダルですよ</Typography>
          <Typography sx={{ mt: 2 }}>内容ですよ</Typography>
          <Button onClick={closeModal} sx={{ mt: 2 }}>
            閉じる
          </Button>
        </StyledBox>
      </Modal>
    </div>
  );
};

export default ModalExample;
