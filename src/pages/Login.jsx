import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import { UserLogin } from '../components/UserForm/UserLogin';
import { ScreenLoading } from '../components/ScreenLoading';

import { Context } from '../containers/Context';

const Login = () => {
  const { isAuth } = useContext(Context);
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
  if (isAuth.update) {
    return <ScreenLoading />;
  }
  if (!isAuth.loggedIn) {
    return <UserLogin onSubmit={onSubmit} error={error} loading={loading} />;
  }
  return <Redirect to='/dashboard' />;
};

export default Login;
