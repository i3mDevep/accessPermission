import React, { useState } from 'react';
import firebase from 'firebase/app';
import { UserLogin } from '../components/UserForm';
import LayoutUserForm from '../components/LayoutUserForm';

const LoginContainer = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        setError('');
      })
      .catch((error) => {
        console.error(error);
        setError(error.code);
      })
      .finally(() => setLoading(false));
  };
  return (
    <LayoutUserForm>
      <UserLogin
        onSubmit={onSubmit}
        error={error}
        loading={loading}
      />
    </LayoutUserForm>
  );
};

export default LoginContainer;
