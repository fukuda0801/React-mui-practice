import { createContext } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export default ModalContext;
