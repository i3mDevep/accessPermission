import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { IoMdExit, IoMdHappy } from 'react-icons/io';
import { FiUsers } from 'react-icons/fi';
import { GiEntryDoor } from 'react-icons/gi';
import { Row, CardDeck } from 'react-bootstrap';
import Target from './Target';

const CardInfoUsers = ({ inforcards }) => {
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
  const { Users, Men, Women, Children, Tracking } = inforcards;
  return (

    <CardDeck>
      <Target title='Users' value={Users.value} text={typeof Users.time === 'object' && moment(Users.time.toDate().toISOString()).calendar()}>
        <FiUsers size='30px' />
      </Target>
      <Target title='Women' value={Women.value} porcentage='3.48%' text={typeof Women.time === 'object' && moment(Women.time.toDate().toISOString()).calendar()} typetext='text-danger'>
        <AiOutlineWoman size='30px' />
      </Target>
      <Target title='Men' value={Men.value} porcentage='1.10%' text={typeof Men.time === 'object' && moment(Men.time.toDate().toISOString()).calendar()} typetext='text-warning'>
        <AiOutlineMan size='30px' />
      </Target>
      <Target title='Children' value={Children.value} porcentage='12%' text={typeof Children.time === 'object' && moment(Children.time.toDate().toISOString()).calendar()} typetext='text-info'>
        <IoMdHappy size='30px' />
      </Target>
      <Target title='Entries' value={Tracking.input} porcentage='12%' text='00:00' typetext='text-info'>
        <GiEntryDoor size='30px' />
      </Target>
      <Target title='Exits' value={Tracking.output} porcentage='12%' text='00:00' typetext='text-info'>
        <IoMdExit size='30px' />
      </Target>
    </CardDeck>

  );
};

const CardInfoWorker = ({ inforcardsWorker }) => {
  if (!inforcardsWorker) {
    return (
      <Row>
        <Target />
        <Target />
        <Target />
      </Row>
    );
  }
  const { Worker, Men, Women } = inforcardsWorker;
  return (
    <CardDeck>
      <Target title='Worker' value={Worker.value} text={typeof Worker.time === 'object' && moment(Worker.time.toDate().toISOString()).calendar()}>
        <FiUsers size='30px' />
      </Target>
      <Target title='Women' value={Women.value} porcentage='3.48%' text={typeof Worker.time === 'object' && moment(Women.time.toDate().toISOString()).calendar()} typetext='text-danger'>
        <AiOutlineWoman size='30px' />
      </Target>
      <Target title='Men' value={Men.value} porcentage='1.10%' text={typeof Worker.time === 'object' && moment(Men.time.toDate().toISOString()).calendar()} typetext='text-warning'>
        <AiOutlineMan size='30px' />
      </Target>
    </CardDeck>

  );
};
const mapToProps = (state) => {
  return {
    inforcards: state.firestore.data.totals,
    inforcardsWorker: state.firestore.data.totalsWorker,
    isAuth: state.auth.isAuth,
  };
};

export default {
  CardInfoUsers: connect(mapToProps, null)(CardInfoUsers),
  CardInfoWorker: connect(mapToProps, null)(CardInfoWorker),
};
