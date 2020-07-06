import React from 'react';
import { BsPencilSquare, BsFillTrashFill, BsPersonFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { getVisibleAlert } from '../../../../store/reducers/notificationRecucers';
import { CardSede, WrapperImg, CurrentTime, Options, Btndelete, Btnedit } from './style';

const PointAttentionCardSedes = ({ email, namesubcompany, estate, city, cellphone, address, nameperson, subCompid, status, onClickDeleted, onClickEdit, visibleAlert, time }) => (
  <CardSede>
    {visibleAlert && <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>}
    <div className='w-100 h-100'>
      <WrapperImg>
        <img alt='sedeimg' src='https://img.icons8.com/color/2x/parse-from-clipboard.png' />
      </WrapperImg>
      <CurrentTime>{ typeof time === 'object' && moment(time.toDate()).calendar() }</CurrentTime>
      <hr style={{ borderTop: '2px solid #e4e4e4', marginTop: '65px' }} />
      <div className='text-left mt-4 pl-3'>
        <span style={{ fontWeight: '900' }}>{namesubcompany}</span>
        <div>
          <ul className='list-group' style={{ fontSize: '.9em' }}>
            <li>
              {' '}
              <BsPersonFill />
              {' '}
              {nameperson}
            </li>
            <li>
              <MdLocationOn />
              {' '}
              {`${city} ${address}`}
            </li>
            <li>
              <MdEmail />
              {' '}
              {email}
            </li>
            <li>
              <FaPhone />
              {' '}
              {cellphone}
            </li>
          </ul>
        </div>
        <Options>
          <Btnedit onClick={() => onClickEdit({ email, namesubcompany, city, cellphone, address, nameperson, subCompid, status, estate })}>
            <BsPencilSquare size='20' />
          </Btnedit>
          <Btndelete onClick={() => onClickDeleted(subCompid)}>
            <BsFillTrashFill size='20' />
          </Btndelete>
        </Options>
      </div>
    </div>
  </CardSede>
);

PointAttentionCardSedes.propTypes = {
  visibleAlert: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    visibleAlert: getVisibleAlert(state.notifications),
  };
};
export default connect(mapStateToProps, null)(PointAttentionCardSedes);
