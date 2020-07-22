import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import Table from '../../components/Tables/LayoutTable/Tables';

import firebase from 'firebase/app';

const ApointWorkerContainer = ({ requesting, isAuth, workerTrakingSubCompany=[] }) => {
  const [urlFile, setFileUrl] = useState(null);
  const componentIsMounted = useRef(true);

  if (requesting) {
    return <LoopCircleLoading />;  }
    const data = workerTrakingSubCompany 

    const storageRef = firebase.storage().ref(`${isAuth.companyId}/traking`);
    const fileRef = storageRef.child('AYlEtLMVcRBEPmyrLgeF').getDownloadURL();

    useEffect(() => {
      return () => {
        componentIsMounted.current = false;
      };
    }, []); 
  
    useEffect(() => {
      async function fetchStorage() {
        try {
          const asyncResponse = await fetch(fileRef);
          const { value } = asyncResponse.data;

         
  
          if (componentIsMounted.current) {
            setFileUrl(value.urlFile);
            console.log(urlFile)
          }
        } catch (err) {
          console.error(err);
        }
      }
  
      fetchStorage();
    }, []);

    console.log(fileRef);
    
  
  return (
    <>
    <Table.ApointWorkerTableRow />
    <div> <img src={fileRef}  alt="Italian Trulli" /> </div>
    
    </>
  );
};



const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.workerSubcompanyFilter,
    workerTrakingSubCompany: state.firestore.ordered.workerTrakingSubCompany,
  };
};

export default compose(
  connect(mapStateProps, null),
  firestoreConnect((props) => {
    return [
      { collection: 'business',
        doc: props.isAuth.companyId,
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              { collection: 'worker' },
            ],
          },
        ],
        storeAs: 'workerSubCompany',
      },
      { collection: 'business',
        doc: props.isAuth.companyId,
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              { collection: 'trakingworker' },
            ],
          },
        ],
        storeAs: 'workerTrakingSubCompany',
      },
    ];
  }),
)(ApointWorkerContainer);
