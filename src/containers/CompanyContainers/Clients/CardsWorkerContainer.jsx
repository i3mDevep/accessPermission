import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CardInfo from '../../../components/CardInfo/CardInfo';

const CardsWorkerContainer = () => (
  <>
    <CardInfo.CardInfoWorker />
  </>
);
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
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
            collection: 'resum',
            doc: 'totalsWorker',
          },
        ],
        storeAs: 'totalsWorker',
      },
    ];
  }),
)(CardsWorkerContainer);
