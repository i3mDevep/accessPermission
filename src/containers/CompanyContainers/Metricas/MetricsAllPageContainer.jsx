import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Alert from '@material-ui/lab/Alert';
import { LoopCircleLoading } from 'react-loadingg';
import PikerDay from '../../../components/Metrics/PikerDay';
import Metrics from '../../../components/Metrics/Metrics';

const MetricsAllPageContainer = ({ idSubcompamy = '', totalForDayFilter = [], requesting, dateFilter }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  if (!idSubcompamy) {
    return <Alert severity='warning'>Seleccione una Sede</Alert>;
  }
  const [sendTime, setTime] = useState(new Date());
  console.log(sendTime);

  return (
    <>
      <Metrics
        props={(
          <PikerDay
            sendDay={(date) => setTime(date.dateDay)}
            onChange={handerEvent}
            value={sendTime}
          />
        )}
        totalForDayFilter={totalForDayFilter}
      />
    </>
  );
};

const mapStateProps = (state, { idSubcompamy, sendTimeDay }) => {
  const fechaDato = new Date(sendTimeDay);

  return {
    dateFilter: sendTimeDay ? fechaDato : 'Aug 26 2020',
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
                where: [['date', '==', moment(props.dateFilter).startOf('day').toDate()]],
              },
            ],
          },
        ],
        storeAs: 'totalForDayFilter',
      },
    ];
  }),
)(MetricsAllPageContainer);
