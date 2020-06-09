import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import UserRegister from '../components/UserForm/UserRegister/UserRegister';
import Layout from '../components/UserForm/Layout';

const Register = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      })
      .catch((error) => setError(error.code))
      .finally(() => setLoading(false));
  };
  return (
    <Layout>
      <UserRegister
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
