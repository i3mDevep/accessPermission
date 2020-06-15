import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import UserRegister from '../components/UserForm/UserRegister/UserRegister';
import Layout from '../components/UserForm/Layout';

const Register = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlerOnsubmit = ({ email, password, company, cellphone, address }) => {
    setLoading(true);
    firebase.auth()
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
        setSuccess(true);
      })
      .catch((error) => {
        debugger;
        setError(error.code);
        setSuccess(false);
      })
      .finally(() => setLoading(false));
  };
  return (
    <Layout>
      <UserRegister
        success={success}
        error={error}
        loading={loading}
        onSubmit={handlerOnsubmit}
      />
    </Layout>
  );
};

export default Register;

//const FirebaseRef = firebase.database().ref()
//FirebaseRef.push().set('hola desde react')
/* No borrar */
// db.collection('business_collection').doc('mayxool.11@gmail.com').collection('users').add(docData)
// .then(() => {
//   console.log('Document successfully written!');
// });
