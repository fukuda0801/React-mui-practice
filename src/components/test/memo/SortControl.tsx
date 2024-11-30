import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from '@mui/material';

// スタイル付きのFormControlコンポーネント
const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
  marginBottom: theme.spacing(2),
}));

interface SortControlProps {
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
}

// ソート選択コンポーネント
const SortControl: React.FC<SortControlProps> = ({
  sortOrder,
  setSortOrder,
}) => {
  return (
    <StyledFormControl variant="outlined">
      <InputLabel>Sort</InputLabel>
      <Select
        labelId="sort-label"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
        label="sort"
      >
        <MenuItem value="asc">昇順</MenuItem>
        <MenuItem value="desc">降順</MenuItem>
      </Select>
    </StyledFormControl>
  );
};

export default SortControl;
