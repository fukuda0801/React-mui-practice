import { Box, styled, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import TabPanel from './TabPanel';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const TabManager: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="tabs manager"
      >
        <Tab label="ホーム" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="プロフィール" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="設定" id="tab-2" aria-controls="tabpanel-2" />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        ホームコンテンツ
      </TabPanel>
      <TabPanel value={value} index={1}>
        プロフィールコンテンツ
      </TabPanel>
      <TabPanel value={value} index={2}>
        設定
      </TabPanel>
    </Box>
  );
};

export default TabManager;
