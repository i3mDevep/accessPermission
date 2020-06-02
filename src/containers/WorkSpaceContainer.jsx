import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { setUsers } from '../actions';
import WorkSpace from '../components/Workspace/WorkSpace';

const WorkSpaceContainer = ({ email = 'anonimu', setUsers }) => {
  useEffect(() => {
    const db = firebase.firestore();
    const docRef = db.collection('business_collection').doc(email).collection('users');
    docRef.get()
      .then((query) => {
        query.forEach((doc) => {
          setUsers({ ...doc.data(), id: doc.id });
          console.log(doc.id, ' => ', doc.data());
          console.log(doc.data().time.toDate().toISOString());
        });
      })
      .catch((error) => {
        console.error('Error getting documents: ', error);
      });

  }, []);
  return (
    <WorkSpace />
  );
};
const mapStateProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispacheProps = {
  setUsers,
};
export default connect(mapStateProps, mapDispacheProps)(WorkSpaceContainer);
