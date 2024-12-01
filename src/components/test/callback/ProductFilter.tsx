import { Box, styled, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface ProductFilterProps {
  onFilterChange: (value: string) => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterChange(e.target.value);
  };

  return (
    <StyledBox>
      <TextField
        label="商品を検索"
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />
    </StyledBox>
  );
};

export default ProductFilter;
