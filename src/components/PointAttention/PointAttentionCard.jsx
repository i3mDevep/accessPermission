import React from 'react';
import { BsInfoCircleFill, BsEnvelope, BsPencilSquare, BsFillTrashFill, BsMicFill, BsPersonFill, BsServer } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { CustomeCard } from './style';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import PropTypes from 'prop-types';
import { getVisibleAlert } from '../../store/reducers/notificationRecucers';
import { showAlert } from '../../store/actions/sweetAlertActions';

const PointAttentionCard = ({ email, namesubcompany, city, cellphone, address, nameperson, time }) => {

  const handlerClick = (e) => {
    e.preventDefault();
    alert('hol2a');
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

PointAttentionCard.propTypes = {
  visibleAlert: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PointAttentionCard);


