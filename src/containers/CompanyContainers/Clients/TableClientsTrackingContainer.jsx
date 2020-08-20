import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';

import TableClientsTrackingComponent from '../../../components/Tables/Clients/TableClientsTrackingComponent';

const TableClientsTrackingContainer = ({ info, isAuth, subcompanies }) => {
  const [tracking, setTracking] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const ref = `business/${isAuth.uid}/clients/${info.identification}/tracking`;
    db.collection(ref).get()
      .then((querySnapshot) => {
        const mydata = [];
        querySnapshot.forEach((doc) => {
          const documento = doc.data();
          const { idSubcompany } = documento;
          try {
            documento.nameSubcompany = subcompanies[idSubcompany].namesubcompany;
          } catch (err) {
            console.error('cliente sin subcompany asigando');
          }
          mydata.push(documento);
        });
        setTracking(mydata);
      });
  }, []);
  return (<TableClientsTrackingComponent tracking={tracking} />);
};
const mapStateProps = (state) => {
  return {
    subcompanies: state.firestore.data.subcompany,
  };
};
export default connect(mapStateProps, null)(TableClientsTrackingContainer);
