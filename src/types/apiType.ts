// ユーザー情報の型
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserListProps {
  users: User[];
}
