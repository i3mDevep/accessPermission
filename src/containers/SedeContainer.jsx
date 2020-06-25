import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import { showAlert } from '../store/actions/sweetAlertActions';
import { deleteSubCompany } from '../store/actions/deleteSubcompanyAction';
import SedeComponent from '../components/Sede/index';

const SedeContainer = ({ isAuth, subCompanies = [], requesting, showAlert, deleteSubCompany, loadingDeleted }) => {
  if (requesting || loadingDeleted.loading) {
    return <LoopCircleLoading />;
  }
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handlerOnCreateSubCompany = ({
    namesubcompany,
    email,
    password,
    cellphone,
    address,
    city,
    nameperson,
    estate,
    identification,
  }) => {
    const dataSubCompany = {
      company: isAuth.uid,
      content: {
        namesubcompany,
        email,
        password,
        cellphone,
        address,
        city,
        nameperson,
        estate,
        identification,
      },
    };
    setLoading(true);
    const createSubCompany = firebase
      .functions().httpsCallable('createSubCompany');
    createSubCompany(dataSubCompany)
      .then((response) => {
        setResponse(response);
        console.log(response);
        if (response.data.result === true) {
          setModalShow(false);
        }
      }).finally(() => setLoading(false));
  };

  const handlerOnDeletedSubCompany = (subCompid) => {
    //const deteleSubCompany = firebase.functions().httpsCallable('deteleSubCompany');
    showAlert({
      type: 'warning',
      title: 'Estas seguro?',
      content: 'Estas a punto de Eliminar toda la información!',
      showCancel: true,
      confirmBtnText: 'Yes, delete it!',
      confirmBtnBsStyle: 'danger',
      onConfirm: () => deleteSubCompany({ subCompanyId: subCompid, companyId: isAuth.uid }),
      onCancel: null,
    });
  };
  return (
    <SedeComponent
      subCompanies={subCompanies}
      submit={handlerOnCreateSubCompany}
      modalShow={modalShow}
      loading={loading}
      response={response}
      onHide={() => setModalShow(false)}
      onClickNewSede={() => setModalShow(true)}
      onClickDeleted={handlerOnDeletedSubCompany}
    />
  );
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    subCompanies: state.firestore.ordered.subcompanycreate,
    requesting: state.firestore.status.requesting.subcompanycreate,
    loadingDeleted: state.resultDelete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSubCompany: (data) => dispatch(deleteSubCompany(data)),
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
        storeAs: 'subcompanycreate',
      },
    ];
  }),
)(SedeContainer);
