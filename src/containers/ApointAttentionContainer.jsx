import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import { showAlert } from '../store/actions/sweetAlertActions';
import { ScreenLoading2 } from '../components/ScreenLoading';
import ApointIndex from '../components/LayoutPointAttention/ApointIndex'

const ApointAttentionContaier = ({ isAuth, subCompanies = [], worker = [], requesting }) => {

  if (requesting) {
    return <LoopCircleLoading />;
  }
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  return (
    <>
      <ApointIndex
        subCompanies={subCompanies}
        response={response}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
const mapStateProps = (state) => {
  console.log(state)
  return {
    isAuth: state.auth.isAuth,
    subCompanies: state.firestore.ordered.subcompanycreate,
    requesting: state.firestore.status.requesting.subcompanycreate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (alertProps) => dispatch(showAlert(alertProps)),
  };
};

export default compose(
  connect(mapStateProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'worker',
          },
        ],
        storeAs: 'workerSubcompany',
      },
    ];
  }),
)(ApointAttentionContaier);
