import {
  AppBar,
  Box,
  Drawer,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PhotoIcon from '@mui/icons-material/Photo';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FlareIcon from '@mui/icons-material/Flare';
import LayoutContent from './LayoutContent';
import { Outlet } from 'react-router-dom';

const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const DrawerHeader = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const MainLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          zIndex: 9999,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: 'border-box',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <LayoutContent icon={LoginIcon} label="ログイン" link="/" />
        <LayoutContent icon={BookIcon} label="投稿一覧" link="/" />
        <LayoutContent icon={PersonIcon} label="ユーザー一覧" link="/" />
        <LayoutContent icon={PhotoIcon} label="フォトギャラリー" link="/" />
        <LayoutContent icon={CallIcon} label="useMemo練習" link="/" />
        <LayoutContent icon={ModeEditIcon} label="useCallback練習" link="/" />
        <LayoutContent icon={FlareIcon} label="useEffect練習" link="/" />
      </Drawer>

      <MainContent>
        <AppBar
          position="fixed"
          color="secondary"
          sx={{
            width: 'calc(100% - 240px)',
            marginLeft: '240px',
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              component="div"
              color="white"
              sx={{ fontWeight: 'bold' }}
            >
              React Practice
            </Typography>
          </Toolbar>
        </AppBar>
        <DrawerHeader />
        <Outlet />
      </MainContent>
    </Box>
  );
};

export default MainLayout;
