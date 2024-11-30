import axios from 'axios';
import config, { handleAxiosError, handleUnknownError } from './api';

// commentを取得する関数
export const getComments = async (limit: number, page?: number) => {
  try {
    const res = await config.get('/comments', {
      params: {
        _limit: limit,
        _page: page,
      },
    });
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
