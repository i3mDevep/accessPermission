import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Alert from '@material-ui/lab/Alert';
import { LoopCircleLoading } from 'react-loadingg';
import { filter } from 'lodash';
import PikerDay from '../../../components/Metrics/PikerDay';
import Metrics from '../../../components/Metrics/Metrics';

const MetricsAllPageContainer = ({ idSubcompamy = '', elementoSet, totalForDayFilter = [], requesting, dateFilter, elemento }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  if (!idSubcompamy) {
    return <Alert severity='warning'>Seleccione una Sede</Alert>;
  }
  const [sendTime, setTime] = useState(new Date());
  //console.log(sendTime);

  return (
    <>
      <Metrics 
        props={(
          <PikerDay
            sendDay={(date) => {
              //console.log('ioio', newValue);
              setTime(date.dateDay);
              const newValue = sendTime;
              //console.log(newValue);
              elemento({ date: newValue });
            }}
          />
        )}
        totalForDayFilter={totalForDayFilter}
        elemento={elemento}
      />
    </>
  );
};

const mapStateProps = (state, { idSubcompamy, sendTimeDay, elementoSet }) => {
  console.log('elementoSET---->', new Date(elementoSet));
  const fechaDato = new Date(elementoSet);
  console.log(state)
  return {
    dateFilter: elementoSet ? fechaDato : new Date(),
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
