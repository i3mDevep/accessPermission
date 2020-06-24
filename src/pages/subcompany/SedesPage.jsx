import React from 'react';
import firebase from 'firebase/app';
import HeaderContainer from '../../components/LayoutPointAttention/Index'

const SedesPage = () => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
     < HeaderContainer />
      <h1>this page is when sedes sing in</h1>
      <button onClick={logout}>LogOUT</button>
    </div>
  );
};
export default SedesPage;
