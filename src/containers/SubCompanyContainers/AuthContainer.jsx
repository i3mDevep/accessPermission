import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { addTraking } from '../../store/actions/addTrakingAction';
import { LoopCircleLoading } from 'react-loadingg';
import AuthPointAttention from '../../components/AuthPointAttention/AuthPointAttention';

const AuthContainer = ({ workersubcompany, requesting, traking }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }

  const handlerWorker = (traking) => {
    addTraking(traking);
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTraking: (traking) => dispatch(addTraking(traking)),
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
