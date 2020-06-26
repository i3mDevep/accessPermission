import React from 'react';
import firebase from 'firebase/app';
import ApointIndex from '../../components/LayoutPointAttention/ApointIndex';

const SedesPage = () => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return <ApointIndex />;
};
export default SedesPage;
