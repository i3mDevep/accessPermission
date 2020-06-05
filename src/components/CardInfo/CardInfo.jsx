import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
import { Row } from 'reactstrap';
import Target from './Target';

const CardInfo = ({ inforcards }) => {
  if (!inforcards) return 'Loading...';
  const { totalUsers, timestamp, totalMen, totalWoman } = inforcards;
  return (
    <div className='header-body'>
      <Row>
        <Target value={totalUsers} text={moment(timestamp.toDate().toISOString()).calendar()} />
        <Target title='Women' value={totalWoman} porcentage='3.48%' text='Since yesterday' typetext='text-danger' />
        <Target title='Men' value={totalMen} porcentage='1.10%' text='Since yesterday' typetext='text-warning' />
        <Target title='Performance' value='49,65%' porcentage='12%' text='Since last month' typetext='text-info' />
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
