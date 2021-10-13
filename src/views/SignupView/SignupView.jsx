import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Section } from '../../components';
import { authOperations } from '../../Redux/auth';
import s from './SignupView.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { routes } from '../../utils/routes';
import { Link } from 'react-router-dom';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Name required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .min(8, 'Too Short! Should be 8 chars minimum.')
    .required('Password required'),
});

export default function SignupView() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  // const handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       console.log('this data is not supported');
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.register({ name, email, password }));
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <Section title="Sign up page">
      <Formik
        initialValues={{
          userName: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="userName" placeholder="Enter name" />
            {errors.userName && touched.userName ? (
              <div>{errors.userName}</div>
            ) : null}
            <Field name="email" type="email" placeholder="Enter email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              name="password"
              type="password"
              placeholder="Enter password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <Link to={routes.login}>Have an account? Login</Link>
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
    </Section>
  );
}
