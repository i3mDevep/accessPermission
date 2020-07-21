import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import { ScreenLoading2 } from '../../components/ScreenLoading';
import { addTraking } from '../../store/actions/addTrakingAction';
import AuthPointAttention from '../../components/AuthPointAttention/AuthPointAttention';
import 'firebase/storage';

const AuthContainer = ({ workersubcompany, requesting, isAuth, showAlert, resultAddTraking }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }

  const handlerWorker = (content) => {
    addTraking(isAuth.companyId, isAuth.uid, content)
    //console.log(isAuth.companyId, isAuth.uid, content)

  };
  return (
    <>
      <AuthPointAttention
        worker={workersubcompany}
        traking={handlerWorker}
      />
      {resultAddTraking.loading && <ScreenLoading2 /> }
    </>
  );
};
const mapStateProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
    resultAddTraking: state.resultAddTraking,
    workersubcompany: state.firestore.ordered.workersubcompany,
    requesting: state.firestore.status.requesting.workersubcompany,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    addTraking: (idBusiness, idSubcompany, content) => dispatch(addTraking(idBusiness, idSubcompany, content)),
    showAlert: (alertProps) => dispatch(showAlert(alertProps)),
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
