import { Box, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <StyledBox>
          <Typography>{children}</Typography>
        </StyledBox>
      )}
    </div>
  );
};

export default TabPanel;
