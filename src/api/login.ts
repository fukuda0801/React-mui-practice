import { User } from '../types/apiType';
import config from './api';

// ログイン情報インターフェース
export interface LoginInfo {
  email: string;
  password: string;
}

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// ダミーのログイン関数
export const loginUser = async (loginInfo: LoginInfo): Promise<User> => {
  try {
    const response = await config.get<User[]>(`${API_BASE_URL}/users`);
    const user = response.data.find((u) => u.email === loginInfo.email);
    if (user) {
      return user;
    } else {
      throw new Error('ユーザーが見つかりませんでした');
    }
  } catch (error) {
    console.error('ログイン処理中にエラーが発生しました:', error);
    throw error;
  }
};

// ダミーのログアウト関数
export const logoutUser = async (): Promise<void> => {
  try {
    localStorage.removeItem('user');
  } catch (error) {
    console.error('ログアウト処理中にエラーが発生しました:', error);
    throw error;
  }
};
