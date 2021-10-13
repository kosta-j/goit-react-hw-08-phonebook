import { Route, Switch } from 'react-router';
import AuthView from '../../views/AuthView/AuthView';
import ContactsView from '../../views/ContactsView/ContactsView';
import HomeView from '../../views/HomeView/HomeView';
import SignupView from '../../views/SignupView/SignupView';
import AppBar from '../AppBar/AppBar';
import s from './Wrapper.module.css';

export default function Wrapper() {
  return (
    <div className={s.wrapper}>
      <AppBar />
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/register" component={SignupView} />
        <Route path="/login" component={AuthView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </div>
  );
}
