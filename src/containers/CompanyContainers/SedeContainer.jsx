import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import { showAlert } from '../../store/actions/sweetAlertActions';
import { deleteSubCompany } from '../../store/actions/deleteSubcompanyAction';
import { ScreenLoading2 } from '../../components/ScreenLoading';
import SedeComponent from '../../components/Sede/index';

const SedeContainer = ({ isAuth, subCompanies = [], requesting, showAlert, deleteSubCompany, loadingDeleted, workerMain }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  const [modalShow, setModalShow] = useState(false);
  const [modalShowEdit, setModalShowEdit] = useState(false);
  const [initEditModal, setInitEditModal] = useState('');
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
    status,
  }) => {
    const dataSubCompany = {
      company: isAuth.uid,
      content: {
        displayName: namesubcompany,
        namesubcompany,
        email,
        password,
        cellphone,
        address,
        city,
        nameperson,
        estate,
        identification,
        status,
      },
    };
    setLoading(true);
    const createSubCompany = firebase
      .functions().httpsCallable('createSubCompany');
    createSubCompany(dataSubCompany)
      .then((response) => {
        setResponse(response);
        if (response.data.result === true) {
          setModalShow(false);
        }
      }).finally(() => setLoading(false));
  };

  const handlerOnDeletedSubCompany = (subCompid) => {
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
  const handlerOnEditSubCompany = (data) => {
    setInitEditModal(data);
    setModalShowEdit(true);
  };
  return (
    <>
      <SedeComponent
        subCompanies={subCompanies}
        submit={handlerOnCreateSubCompany}
        modalShow={modalShow}
        modalEditShow={modalShowEdit}
        initEditModalShow={initEditModal}
        onHideEdit={() => setModalShowEdit(false)}
        loading={loading}
        response={response}
        onHide={() => setModalShow(false)}
        onClickEdit={handlerOnEditSubCompany}
        onClickNewSede={() => setModalShow(true)}
        onClickDeleted={handlerOnDeletedSubCompany}
        workers={workerMain}
      />
      {loadingDeleted.loading && <ScreenLoading2 />}
    </>
  );
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    subCompanies: state.firestore.ordered.subcompany,
    workerMain: state.firestore.ordered.workermain,
    requesting: state.firestore.status.requesting.subcompany,
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
        storeAs: 'subcompany',
      },
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'worker',
          },
        ],
        storeAs: 'workermain',
      },
    ];
  }),
)(SedeContainer);
