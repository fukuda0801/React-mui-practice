import axios from 'axios';
import config, { handleAxiosError, handleUnknownError } from './api';

// user一覧を取得する関数
export const getUsers = async () => {
  try {
    const res = await config.get('/users');
    return res.data;
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      handleUnknownError(error);
    }
  }
};

// user詳細を取得する関数
export const getUserDetail = async (id: number) => {
  try {
    const userRes = await config.get(`/users/${id}`);
    const postRes = await config.get('/posts', {
      params: {
        userId: id,
      },
    });
    return {
      user: userRes.data,
      post: postRes.data,
    };
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      handleUnknownError(error);
    }
  }
};
