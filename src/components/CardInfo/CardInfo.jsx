import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { IoMdExit, IoMdHappy } from 'react-icons/io';
import { FiUsers } from 'react-icons/fi';
import { GiEntryDoor } from 'react-icons/gi';
import { Row, CardDeck } from 'react-bootstrap';
import Target from './Target';

const CardInfo = ({ inforcards }) => {
  if (!inforcards) {
    return (
      <Row>
        <Target />
        <Target />
        <Target />
        <Target />
        <Target />
        <Target />
      </Row>
    );
  }
  const { totalUsers, totalMen, totalWomen, totalChildren, totalTracking } = inforcards;
  return (

    <CardDeck>
      <Target title='Users' value={totalUsers.value} text={moment(totalUsers.time.toDate().toISOString()).calendar()}>
        <FiUsers size='30px' />
      </Target>
      <Target title='Women' value={totalWomen.value} porcentage='3.48%' text={moment(totalWomen.time.toDate().toISOString()).calendar()} typetext='text-danger'>
        <AiOutlineWoman size='30px' />
      </Target>
      <Target title='Men' value={totalMen.value} porcentage='1.10%' text={moment(totalMen.time.toDate().toISOString()).calendar()} typetext='text-warning'>
        <AiOutlineMan size='30px' />
      </Target>
      <Target title='Children' value={totalChildren.value} porcentage='12%' text={moment(totalChildren.time.toDate().toISOString()).calendar()} typetext='text-info'>
        <IoMdHappy size='30px' />
      </Target>
      <Target title='Entries' value={totalTracking.input} porcentage='12%' text='00:00' typetext='text-info'>
        <GiEntryDoor size='30px' />
      </Target>
      <Target title='Exits' value={totalTracking.output} porcentage='12%' text='00:00' typetext='text-info'>
        <IoMdExit size='30px' />
      </Target>
    </CardDeck>

  );
};

const mapToProps = (state) => {
  return {
    inforcards: state.firestore.data.total,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapToProps, null)(CardInfo);
