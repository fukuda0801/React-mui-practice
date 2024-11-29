import axios, { AxiosError } from 'axios';

const config = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// axiosエラーハンドリング関数
export const handleAxiosError = (error: AxiosError): never => {
  if (error.response) {
    // サーバーがステータスコードでレスポンスを返した場合
    const status = error.response.status;
    switch (status) {
      case 400:
        throw new Error('リクエストが不正です。');
      case 401:
        throw new Error('認証エラーが発生しました。');
      case 403:
        throw new Error('アクセス権限がありません。');
      case 404:
        throw new Error('リソースが見つかりません。');
      case 500:
        throw new Error(
          'サーバーエラーが発生しました。後ほど再試行してください。'
        );
      default:
        throw new Error(
          `予期せぬエラーが発生しました。ステータスコード: ${status}`
        );
    }
  } else if (error.request) {
    // リクエストは送信されたがレスポンスがない場合
    throw new Error(
      'サーバーからのレスポンスがありません。ネットワーク接続を確認してください。'
    );
  } else {
    // リクエストの設定中にエラーが発生した場合
    throw new Error(`リクエストエラー: ${error.message}`);
  }
};

// axiosに関係のないエラー
export const handleUnknownError = (error: unknown): never => {
  if (error instanceof Error) {
    throw new Error(`予期せぬエラーが発生しました: ${error.message}`);
  } else {
    throw new Error('予期せぬエラーが発生しました。');
  }
};

export default config;
