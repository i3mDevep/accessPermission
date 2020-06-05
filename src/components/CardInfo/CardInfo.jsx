import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import { Row } from 'reactstrap';
import Target from './Target';

const CardInfo = ({ inforcards }) => {
  if (!inforcards) return 'Loading...';
  const { totalUsers, totalMen, totalWomen, totalChildren } = inforcards;
  return (
    <div className='header-body'>
      <Row>
        <Target value={totalUsers.value} text={moment(totalUsers.time.toDate().toISOString()).calendar()} />
        <Target title='Women' value={totalWomen.value} porcentage='3.48%' text={moment(totalWomen.time.toDate().toISOString()).calendar()} typetext='text-danger' />
        <Target title='Men' value={totalMen.value} porcentage='1.10%' text={moment(totalMen.time.toDate().toISOString()).calendar()} typetext='text-warning' />
        <Target title='Children' value={totalChildren.value} porcentage='12%' text={moment(totalChildren.time.toDate().toISOString()).calendar()} typetext='text-info' />
      </Row>
    </div>
  );
};

const mapToProps = (state) => {
  return {
    inforcards: state.firestore.data.total,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapToProps, null),
  firestoreConnect((props) => {
    return [
      { collection: 'business_collection',
        doc: props.isAuth.email,
        subcollections: [
          {
            collection: 'data',
            doc: 'total',
          },
        ],
        storeAs: 'total',
      },
    ];
  }),
)(CardInfo);
