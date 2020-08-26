import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Alert from '@material-ui/lab/Alert';
import { LoopCircleLoading } from 'react-loadingg';
import Metrics from '../../../components/Metrics/Metrics';

const MetricsAllPageContainer = ({ idSubcompamy = '', totalForDayFilter = [], requesting }) => {
  const [time, setTime] = useState(new Date());

  if (requesting) {
    return <LoopCircleLoading />;
  }
  if (!idSubcompamy) {
    return <Alert severity='warning'>Seleccione una Sede</Alert>;
  }
  //const dateUrl = date; // moment(date.toDate().toISOString()).locale('es').format('LL');
  console.log(time);

  return (
    <>
      <Metrics totalForDayFilter={totalForDayFilter} sendDay={(date) => setTime(date)} />
    </>
  );

};

const mapStateProps = (state, { idSubcompamy, time }) => {
  console.log(time);
  return {
    dateFilter: time,
    idsub: idSubcompamy.length > 0 ? idSubcompamy : 'No tengo ID',
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.totalForDayFilter,
    totalForDayFilter: state.firestore.ordered.totalForDayFilter,
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
            doc: props.idsub,
            subcollections: [
              {
                collection: 'totalForDay',
                where: [['date', '>=', moment(props.dateFilter).startOf('day').toDate()], ['date', '<=', moment(props.dateFilter).endOf('day').toDate()]],
              },
            ],
          },
        ],
        storeAs: 'totalForDayFilter',
      },
    ];
  }),
)(MetricsAllPageContainer);
