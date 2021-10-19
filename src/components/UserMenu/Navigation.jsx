import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { routes } from '../../utils/routes';
import authSelectors from '../../Redux/auth';
import s from './UserMenu.module.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  //
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //

  return (
    <nav className={s.navContainer}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          label="Home"
          value={routes.home}
          to={routes.home}
          exact
          component={NavLink}
        ></Tab>
        {isLoggedIn && (
          <Tab
            label="Contacts"
            value={routes.contacts}
            to={routes.contacts}
            exact
            component={NavLink}
          ></Tab>
        )}
      </Tabs>
    </nav>
  );
}
