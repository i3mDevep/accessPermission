import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import FormQr from '../components/FormQr';

const GenerateQRContainer = ({subCompanies}) => {
  const handlerWorker = (uid, content) => {
    console.log(content);
  };
  return (
    <FormQr worker={handlerWorker} sedes={subCompanies} loading={false}/>
  );
};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    subCompanies: state.firestore.ordered.subcompany,
  };
};
export default compose(
  connect(mapStateProps, null),
  firestoreConnect((props) => {
    return [
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'subcompanies',
          },
        ],
        storeAs: 'subcompany',
      },
    ];
  }),
)(GenerateQRContainer);
