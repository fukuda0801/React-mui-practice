import axios from 'axios';
import config, { handleAxiosError, handleUnknownError } from './api';

// postsを指定した件数取得する関数 limitは取得件数 pageはページ数
export const getPosts = async (limit: number, page?: number) => {
  try {
    const res = await config.get(`/posts`, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      handleUnknownError(error);
    }
  }
};

// postの詳細を取得する関数
export const getPostDetail = async (id: number) => {
  try {
    const res = await config.get(`/posts/${id}`);
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
