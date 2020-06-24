import React from 'react';
import * as firebase from 'firebase/app';
import { BsInfoCircleFill, BsEnvelope, BsPencilSquare, BsFillTrashFill, BsMicFill, BsPersonFill, BsServer } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LoopCircleLoading } from 'react-loadingg';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { showAlert } from '../../store/actions/sweetAlertActions';
import { deleteSubcompany } from '../../store/actions/deleteSubcompanyAction';
import { CustomeCard } from './style';
import { getVisibleAlert } from '../../store/reducers/notificationRecucers';

const PointAttentionCard = ({ email, namesubcompany, city, cellphone, address, nameperson, subCompid, isAuth, deleteSubcompany, visibleAlert, showAlert }) => {

  const handlerClick = (e) => {
    const deteleSubCompany = firebase.functions().httpsCallable('deteleSubCompany');

    e.preventDefault();
    showAlert({
      type: 'warning',
      title: 'Estas seguro?',
      content: 'Estas a punto de Eliminar toda la información!',
      showCancel: true,
      confirmBtnText: 'Yes, delete it!',
      confirmBtnBsStyle: 'danger',
      onConfirm: () => deteleSubCompany({ subCompanyId: subCompid, companyId: isAuth.uid })
        .then((response) => {
          console.log(response);
        }).catch((err) => console.log(err)),
      onCancel: null,
    });
  };

  const handlerClickEdit = (e) => {
    e.preventDefault();

  };

  return (
    <>
      {visibleAlert && <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>}
      <CustomeCard>
        <CustomeCard.Header>
          {namesubcompany}
        </CustomeCard.Header>
        <ul>
          <li>
            <BsEnvelope />
            {' '}
            {email}
          </li>
          <li>
            <BsInfoCircleFill />
            {' '}
            {city}
          </li>
          <li>
            <BsMicFill />
            {' '}
            {cellphone}
          </li>
          <li>
            <BsServer />
            {' '}
            {address}
          </li>
          <li>
            <BsPersonFill />
            {' '}
            {nameperson}
          </li>
        </ul>
        <footer className='text-muted'>
          <Button onClick={handlerClick} variant='outline-danger'>
            <BsFillTrashFill size='20' />
          </Button>
          {' '}
          <Button onClick={handlerClickEdit} variant='outline-info'>
            <BsPencilSquare size='20' />
          </Button>
        </footer>
      </CustomeCard>
    </>
  );

};

PointAttentionCard.propTypes = {
  visibleAlert: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSubcompany: (idBusiness, idSubcompany) => dispatch(deleteSubcompany(idBusiness, idSubcompany)),
    showAlert: (alertProps) => dispatch(showAlert(alertProps)),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    resultDelete: state.resultAddWorker,
    visibleAlert: getVisibleAlert(state.notifications),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PointAttentionCard);

