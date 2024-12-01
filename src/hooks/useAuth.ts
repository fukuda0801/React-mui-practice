import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

// useAuthカスタムフック
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
