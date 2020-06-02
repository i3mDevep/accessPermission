import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import UserRegister from '../components/UserForm/UserRegister';
import { Context } from '../containers/Context';

const Register = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { isAuth } = useContext(Context);
  //const FirebaseRef = firebase.database().ref()
  //FirebaseRef.push().set('hola desde react')
  /* No borrar */
  // db.collection('business_collection').doc('mayxool.11@gmail.com').collection('users').add(docData)
  // .then(() => {
  //   console.log('Document successfully written!');
  // });
  const handlerOnsubmit = ({ email, password, company, cellphone, address }) => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const db = firebase.firestore();
        db.collection('business_collection').doc(email).set({
          company,
          address,
          cellphone,
          password,
        });
        setError('');
      })
      .catch((error) => setError(error.code))
      .finally(() => setLoading(false));
  };
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
