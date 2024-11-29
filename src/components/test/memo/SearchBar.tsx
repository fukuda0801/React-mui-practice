import { styled, TextField } from '@mui/material';

// スタイル付きTextFieldコンポーネント
const StyledTextField = styled(TextField)(({ theme }) => {
  return {
    marginBottom: theme.spacing(2),
  };
});

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

// 検索バーコンポーネント
const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <StyledTextField
      label="Search Users"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
