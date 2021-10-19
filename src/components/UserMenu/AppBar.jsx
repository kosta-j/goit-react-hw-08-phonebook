import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth';

import s from './UserMenu.module.css';

export default function TestAppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ alignItems: 'center' }}>
        <Toolbar
          sx={{
            width: 500,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            fontSize: 14,
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
