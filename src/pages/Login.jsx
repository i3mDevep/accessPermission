import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import UserLogin from '../components/UserForm/UserLogin/Login';
import Layaut from '../components/UserForm/Layaut';

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
  if (!isAuth.loggedIn) {
    return (
      <Layaut>
        <UserLogin onSubmit={onSubmit} error={error} loading={loading} />
      </Layaut>
    );
  }

  return <Redirect to='/dashboard' />;
};

export default Login;
