import { List, styled, Typography } from '@mui/material';
import useProducts, { Product } from '../../../hooks/useProducts';
import ProductFilter from './ProductFilter';
import ProductItem from './ProductItem';

const StyledList = styled(List)(() => ({
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
}));

const ProductList: React.FC = () => {
  const { filteredProducts, setFilter } = useProducts();

  return (
    <div>
      <ProductFilter onFilterChange={setFilter} />
      {filteredProducts.length > 0 ? (
        <StyledList>
          {filteredProducts.map((product: Product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </StyledList>
      ) : (
        <Typography variant="h5">商品が見つかりませんでした</Typography>
      )}
    </div>
  );
};

export default ProductList;
