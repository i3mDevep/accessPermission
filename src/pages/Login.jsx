import React, { useState } from 'react';
import firebase from 'firebase/app';
import UserLogin from '../components/UserForm/UserLogin/Login';
import Layout from '../components/UserForm/Layout';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => setError(''))
      .catch((error) => setError(error.code))
      .finally(() => setLoading(false));
  };
  return (
    <Layout>
      <UserLogin onSubmit={onSubmit} error={error} loading={loading} />
    </Layout>
  );
};

export default Login;
