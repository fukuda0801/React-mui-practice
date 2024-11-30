import { ReactNode, useEffect, useState } from 'react';
import { User } from '../types/apiType';
import { loginUser, logoutUser } from '../api/login';
import AuthContext, { AuthContextProps } from '../context/AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // ユーザー情報
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // ローカルストレージからユーザー情報を取得
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // ログイン関数
  const login = async (loginInfo: { email: string; password: string }) => {
    try {
      const loginedUser = await loginUser(loginInfo);
      setUser(loginedUser);
      localStorage.setItem('user', JSON.stringify(loginUser));
    } catch (error) {
      console.error('ログインに失敗しました', error);
    }
  };

  // ログアウト関数
  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  // コンテキストの値を設定
  const contextValue: AuthContextProps = {
    user,
    login,
    logout,
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
