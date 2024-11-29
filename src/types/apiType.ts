// ユーザー情報の型
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserListProps {
  users: User[];
}

// ポスト情報の型
export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostListProps {
  posts: Post[];
}
