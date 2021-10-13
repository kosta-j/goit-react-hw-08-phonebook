import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.AppBar}>
      <nav>
        <ul>
          <li>Log in</li>
          <li>Sign up</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
