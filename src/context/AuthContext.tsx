import { createContext } from 'react';
import { User } from '../types/apiType';

// AuthContextの型
export interface AuthContextProps {
  user: User | null;
  login: (loginInfo: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

// 初期値を設定
const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
});

export default AuthContext;
