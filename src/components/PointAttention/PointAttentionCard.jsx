import React from 'react';
import * as firebase from 'firebase/app';
import { BsInfoCircleFill, BsEnvelope, BsPencilSquare, BsFillTrashFill, BsMicFill, BsPersonFill, BsServer } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import { connect } from 'react-redux';
import { deleteSubcompany } from '../../store/actions/deleteSubcompanyAction';
import { CustomeCard } from './style';

const PointAttentionCard = ({ email, namesubcompany, city, cellphone, address, nameperson, subCompid, isAuth, deleteSubcompany }) => {

  const handlerClick = (e) => {
    e.preventDefault();
    //deleteSubcompany(isAuth.uid, subCompid);
    const deteleSubCompany = firebase.functions().httpsCallable('deteleSubCompany');
    deteleSubCompany({ subCompanyId: subCompid, companyId: isAuth.uid })
      .then((response) => {
        console.log(response);
      }).catch((err) => console.log(err));
    alert('hol2222a');
  };

  return (
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
        <Button variant='outline-info'>
          <BsPencilSquare size='20' />
        </Button>
      </footer>
    </CustomeCard>
  );

};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSubcompany: (idBusiness, idSubcompany) => dispatch(deleteSubcompany(idBusiness, idSubcompany)),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    resultDelete: state.resultAddWorker,

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PointAttentionCard);

