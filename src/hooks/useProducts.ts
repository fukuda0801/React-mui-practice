import { useCallback, useEffect, useMemo, useState } from 'react';
import config from '../api/api';

export interface Product {
  id: number;
  title: string;
  price: number;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const fetchProducts = useCallback(async () => {
    try {
      const response = await config.get<Product[]>(
        'https://fakestoreapi.com/products'
      );
      setProducts(response.data);
    } catch (error) {
      console.error('商品データの取得に失敗しました', error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = useMemo(() => {
    if (filter === 'all') return products;
    return products.filter((product) =>
      product.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, products]);

  return { filteredProducts, setFilter };
};

export default useProducts;
