import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';

import CardForDayMetricsComponent from '../../../components/CardChartsMetrics/CardForDayMetrics';

const CardForDayMetricsContainer = ({ idSubCompany, dateSearch, dateFilter }) => {

  if (!idSubCompany) {
    return 'Selecciones sede';
  }

  console.group('mis props necesarios');
  console.log(idSubCompany);
  console.log(dateFilter);
  console.groupEnd();

  return (
    <CardForDayMetricsComponent dateSearch={dateSearch} />
  );
};

const mapStateProps = (state, { idSubCompany, dateFilter }) => {
  return {
    sedeSelected: idSubCompany || 'untitled',
    isAuth: state.auth.isAuth,
    dateFilter,
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
            doc: props.sedeSelected,
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
)(CardForDayMetricsContainer);
