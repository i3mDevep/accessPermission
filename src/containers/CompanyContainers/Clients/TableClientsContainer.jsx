import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TableClients from '../../../components/Tables/Clients';

const TableClientsContainer = () => (
  <TableClients />
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
            collection: 'clients',
            orderBy: ['time', 'desc'],
          },
        ],
        storeAs: 'clients',
      }, // Es necesario esto para cruzar los datos //
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'subcompanies',
          },
        ],
        storeAs: 'subcompany',
      },
    ];
  }),
)(TableClientsContainer);
