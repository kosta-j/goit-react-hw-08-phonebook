import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Section } from '../../components';
import * as Yup from 'yup';
import { routes } from '../../utils/routes';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import s from './SignupView.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { authOperations } from '../../Redux/auth';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormHelperText-root': {
      marginBottom: '10px',
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
      marginBottom: '10px', // or black
    },
  },
}));

const nameValidation =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      nameValidation,
      'Name can only consist of letters, apostrophes, dashes and spaces.',
    )
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .min(8, 'Too Short! Should be 8 chars minimum.')
    .required('Password required'),
});

export default function SignupView() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      const { name, email, password } = values;
      dispatch(authOperations.register({ name, email, password }));
    },
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const customStyles = useStyles();

  return (
    <Section title={'Registration page'}>
      {/* {console.log(formik.handleSubmit)} */}
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <TextField
          className={customStyles.root}
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputProps={{ className: s.formField }}
        />
        <TextField
          className={customStyles.root}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{ className: s.formField }}
        />
        <TextField
          className={customStyles.root}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            className: s.formField,
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
    </Section>
  );
}
