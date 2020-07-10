import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import { addTraking } from '../../store/actions/addTrakingAction';
import AuthPointAttention from '../../components/AuthPointAttention/AuthPointAttention';

const AuthContainer = ({ workersubcompany, requesting }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }

  const handlerWorker = (uid, content) => {
    addTraking(content);
  };

  return (
    <AuthPointAttention
      worker={workersubcompany}
      traking={handlerWorker}
    />
  );
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    workersubcompany: state.firestore.ordered.workersubcompany,
    requesting: state.firestore.status.requesting.subcompany,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTraking: (idBusiness, idSubcompany, traking) => dispatch(addTraking(idBusiness, idSubcompany, traking)),
  };
};

export default compose(
  connect(mapStateProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      { collection: 'business',
        doc: props.isAuth.companyId,
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              { collection: 'worker' },
            ],
          },
        ],
        storeAs: 'workersubcompany',
      },
    ];
  }),
)(AuthContainer);
