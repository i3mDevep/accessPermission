import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import { UserRegister } from '../components/UserForm/UserRegister';
import { Context } from '../containers/Context';
import { ScreenLoading } from '../components/ScreenLoading';

const Register = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { isAuth } = useContext(Context);
  //const FirebaseRef = firebase.database().ref()
  //FirebaseRef.push().set('hola desde react')

  const handlerOnsubmit = ({ email, password, company, cellphone, address }) => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const db = firebase.firestore();
        const userRef = db.collection('Users').add({
          company: { company },
          email: { email },
          address: { address },
          cellphone: { cellphone },
        });
        setError('');
      })
      .catch((error) => setError(error.code))
      .finally(() => setLoading(false));
  };
  if (isAuth.update) {
    return <ScreenLoading />;
  }
  return (
    !isAuth.loggedIn ? (
      <UserRegister
        error={error}
        loading={loading}
        onSubmit={handlerOnsubmit}
      />
    ) :
      <Redirect to='/dashboard' />
  );
};

export default Register;
