import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';

import CardForMonthMetrics from '../../../components/CardChartsMetrics/CardForMonthMetrics ';

const CardForMonthMetricsContainer = ({ idSubCompany, dateSearchMonth, dateFilterMonth }) => {

  if (!idSubCompany) {
    return 'Selecciones sede';
  }

  console.group('mis props necesarios mont');
  console.log(idSubCompany);
  console.log(dateFilterMonth);
  console.groupEnd();

  return (
    <CardForMonthMetrics dateSearchMonth={dateSearchMonth} />
  );
};

const mapStateProps = (state, { idSubCompany, dateFilterMonth }) => {
  console.log(state);
  return {
    sedeSelected: idSubCompany || 'untitled',
    isAuth: state.auth.isAuth,
    dateFilterMonth,
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
                where: [['date', '<=', moment(props.dateFilterMonth).startOf('day').toDate()]],
              },
            ],
          },
        ],
        storeAs: 'totalForMonthFilter',
      },
    ];
  }),
)(CardForMonthMetricsContainer);
