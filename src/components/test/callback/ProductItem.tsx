import { Card, CardContent, styled, Typography } from '@mui/material';
import { Product } from '../../../hooks/useProducts';
import React from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = React.memo(({ product }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography color="text.secondary">価格: ¥{product.price}</Typography>
      </CardContent>
    </StyledCard>
  );
});

export default ProductItem;
