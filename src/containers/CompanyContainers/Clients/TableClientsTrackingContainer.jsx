import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';

import TableClientsTrackingComponent from '../../../components/Tables/Clients/TableClientsTrackingComponent';

const TableClientsTrackingContainer = ({ info, isAuth }) => {

  const [tracking, setTracking] = useState([]);

  useEffect(() => {

    const db = firebase.firestore();
    const ref = `business/${isAuth.uid}/clients/${info.identification}/tracking`;

    db.collection(ref).get()
      .then((querySnapshot) => {
        const mydata = [];
        querySnapshot.forEach((doc) => {
          mydata.push(doc.data());
        });
        setTracking(mydata);
      });
  }, []);
  return (<TableClientsTrackingComponent tracking={tracking} />);
};

export default TableClientsTrackingContainer;
