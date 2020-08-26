import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Search from '../../../components/Metrics/Search';

const SearchComponentContainer = ({ totalsCompanies = [], sendData }) => {
  return (
    <>
      <Search totalsCompanies={totalsCompanies} sendData={sendData} />
    </>
  );

};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.totalsCompanies,
    totalsCompanies: state.firestore.ordered.totalsCompanies,
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
        storeAs: 'totalsCompanies',
      },
    ];
  }),
)(SearchComponentContainer);
