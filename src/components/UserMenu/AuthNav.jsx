import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';
import s from './UserMenu.module.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function AuthNav() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={s.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          label="Signup"
          value={routes.register}
          to={routes.register}
          component={NavLink}
        ></Tab>
        <Tab
          label="Login"
          value={routes.login}
          to={routes.login}
          component={NavLink}
        ></Tab>
      </Tabs>
    </div>
  );
}
