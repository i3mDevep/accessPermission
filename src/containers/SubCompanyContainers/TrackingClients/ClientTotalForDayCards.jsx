import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import CardInfo from '../../../components/CardInfo/CardInfo';

const ClientTotalForDayCards = () => (
  <>
    <CardInfo.CardClientForDay />
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
        doc: props.isAuth.companyId,
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              {
                collection: 'totalForDay',
                where: [['date', '>=', moment().startOf('day').toDate()], ['date', '<=', moment().endOf('day').toDate()]],
              },
            ],
          },
        ],
        storeAs: 'totalForDay',
      },
    ];
  }),
)(ClientTotalForDayCards);
