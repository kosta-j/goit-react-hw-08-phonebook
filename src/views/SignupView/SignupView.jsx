import s from './SignupView.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../Redux/auth';

export default function SignupView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('this data is not supported');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p className={s.inputTitle}>Name</p>
        <input
          type="text"
          name="name"
          className={s.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className={s.inputTitle}>email</p>
        <input
          type="email"
          name="email"
          className={s.input}
          pattern="(\w\.?)+@[\w\.-]+\.\w{2,}"
          title="email может быть формата something@else.tld"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className={s.inputTitle}>password</p>
        <input
          type="password"
          name="password"
          className={s.input}
          //   pattern="(\w\.?)+@[\w\.-]+\.\w{2,}"
          title="just password"
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.submitBtn}>
        Sign up
      </button>
    </form>
  );
}
