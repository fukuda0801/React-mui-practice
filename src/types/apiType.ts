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

// コメントの型
export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentListProps {
  comments: Comment[];
}

// ユーザー詳細情報の型
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserDetail {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  };
  post: Post[];
}
