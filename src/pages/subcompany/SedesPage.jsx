import React from 'react';
import firebase from 'firebase/app';

const SedesPage = () => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <h1>this page is when sedes sing in</h1>
      <button onClick={logout}>LogOUT</button>
    </div>
  );
};
export default SedesPage;
