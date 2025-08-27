// src/components/FormikForm.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const FormikForm = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [apiError, setApiError] = useState(null);

  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setApiError(null);
    setApiResponse(null);

    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setApiResponse(data);
      resetForm();
    } catch (err) {
      setApiError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block font-medium">Username:</label>
              <Field name="username" className="w-full border border-gray-300 p-2 rounded" />
              <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label className="block font-medium">Email:</label>
              <Field name="email" className="w-full border border-gray-300 p-2 rounded" />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label className="block font-medium">Password:</label>
              <Field type="password" name="password" className="w-full border border-gray-300 p-2 rounded" />
              <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>

            {apiResponse && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
                Registration successful! Token: <code>{apiResponse.token}</code>
              </div>
            )}

            {apiError && (
              <div className="mt-4 p-3 bg-red-100 text-red-800 rounded">
                Error: {apiError}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
