import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import firebase from 'firebase/app';
import { ScreenLoading2 } from '../../components/ScreenLoading';
import { addWorker } from '../../store/actions/addWorkerAction';
import { showAlert } from '../../store/actions/sweetAlertActions';
import 'firebase/storage';
import FormQr from '../../components/FormQr';

const GenerateQRContainer = ({ subCompanies = [], addWorker, resultAddWorker, showAlert, requesting, isAuth }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }

  const handlerWorker = (uid, content, data64, imageSrc) => {
    addWorker(uid, content.sede.id, content, data64)
      .then(() => {
        firebase.storage().ref().child(`${uid}/${content.identification}/QrPicture`).putString(imageSrc, 'data_url');
      });
  };
  return (
    <>
      <FormQr worker={handlerWorker} sedes={subCompanies} blocked={subCompanies.length <= 0} />
      { resultAddWorker.loading && <ScreenLoading2 /> }
    </>
  );
};

const mapStateProps = (state) => {
  console.log(state)
  return {
    isAuth: state.auth.isAuth,
    subCompanies: state.firestore.ordered.subcompany,
    resultAddWorker: state.resultAddWorker,
    requesting: state.firestore.status.requesting.subcompany,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWorker: (idBusiness, idSubcompany, content, data64) => dispatch(addWorker(idBusiness, idSubcompany, content, data64)),
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
            collection: 'subcompanies',
          },
        ],
        storeAs: 'subcompany',
      },
    ];
  }),
)(GenerateQRContainer);
