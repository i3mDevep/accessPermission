import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import { addWorker } from '../store/actions/addWorkerAction';
import { showAlert } from '../store/actions/sweetAlertActions';
import FormQr from '../components/FormQr';

const GenerateQRContainer = ({ subCompanies = [], addWorker, resultAddWorker, showAlert, requesting }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  const handlerWorker = (uid, content) => {
    addWorker(uid, content.sede.id, content);
    if (!resultAddWorker.error) {
      showAlert({
        type: 'success',
        timeout: 2500,
        title: 'Exitoso!',
        content: 'Empleado Registrado !!!',
        showCancel: false,
      });
    } else {
      showAlert({
        type: 'error',
        timeout: 2500,
        title: 'Opss!',
        content: resultAddWorker.error,
        showCancel: false,
      });
    }
  };
  return (
    <FormQr worker={handlerWorker} sedes={subCompanies} blocked={subCompanies.length <= 0} />
  );
};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    subCompanies: state.firestore.ordered.subcompany,
    resultAddWorker: state.resultAddWorker,
    requesting: state.firestore.status.requesting.subcompany,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWorker: (idBusiness, idSubcompany, content) => dispatch(addWorker(idBusiness, idSubcompany, content)),
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
