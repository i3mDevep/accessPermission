import React from 'react';
import { BsInfoCircleFill, BsEnvelope, BsPencilSquare, BsFillTrashFill, BsMicFill, BsPersonFill, BsServer } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { CustomeCard } from './style';
import { getVisibleAlert } from '../../../store/reducers/notificationRecucers';

const PointAttentionCard = ({ email, namesubcompany, city, cellphone, address, nameperson, subCompid, onClickDeleted, visibleAlert }) => {

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
          <Button onClick={() => onClickDeleted(subCompid)} variant='outline-danger'>
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

const mapStateToProps = (state) => {
  return {
    visibleAlert: getVisibleAlert(state.notifications),
  };
};
export default connect(mapStateToProps, null)(PointAttentionCard);

