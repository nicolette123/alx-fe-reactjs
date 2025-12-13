import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Formik Form Data:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Register (Formik)</h2>

        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
