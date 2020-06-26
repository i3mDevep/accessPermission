import React from 'react';
import firebase from 'firebase/app';
import ApointAttentionContainer from '../../containers/ApointAttentionContainer'

const SedesPage = () => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return <ApointAttentionContainer />;
};
export default SedesPage;
