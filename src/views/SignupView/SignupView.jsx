import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Section } from '../../components';
import * as Yup from 'yup';
import { routes } from '../../utils/routes';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const userNameValidation =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .matches(
      userNameValidation,
      'Name can only consist of letters, apostrophes, dashes and spaces.',
    )
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .min(8, 'Too Short! Should be 8 chars minimum.')
    .required('Password required'),
});

export default function SignupView() {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 3));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="userName"
          name="userName"
          label="Name"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={
            formik.isSubmitting ||
            Object.keys(formik.errors).length !== 0 ||
            Object.keys(formik.touched).length === 0
          }
        >
          Sign up
        </Button>
      </form>
      <Link to={routes.login}>Have an account? - Log in</Link>
    </div>
  );
}
