import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { Row, CardDeck } from 'react-bootstrap';
import Target from './Target';

const CardInfoUsers = ({ inforcards }) => {
  if (!inforcards) {
    return (
      <Row>
        <Target />
        <Target />
        <Target />
      </Row>
    );
  }
  const { Users, Men, Women } = inforcards;
  return (

    <CardDeck style={{ minWidth: '200px' }}>
      <Target title='Clientes' value={Users.value} text={typeof Users.time === 'object' && moment(Users.time.toDate().toISOString()).calendar()}>
        <FiUsers size='30px' />
      </Target>
      <Target title='Mujeres' value={Women.value} text={typeof Women.time === 'object' && moment(Women.time.toDate().toISOString()).calendar()} typetext='text-danger'>
        <AiOutlineWoman size='30px' />
      </Target>
      <Target title='Hombres' value={Men.value} text={typeof Men.time === 'object' && moment(Men.time.toDate().toISOString()).calendar()} typetext='text-warning'>
        <AiOutlineMan size='30px' />
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
    <CardDeck style={{ minWidth: '200px' }}>
      <Target title='Empleados' value={Worker.value} text={typeof Worker.time === 'object' && moment(Worker.time.toDate().toISOString()).calendar()}>
        <FiUsers size='30px' />
      </Target>
      <Target title='Mujeres' value={Women.value} porcentage='3.48%' text={typeof Worker.time === 'object' && moment(Women.time.toDate().toISOString()).calendar()} typetext='text-danger'>
        <AiOutlineWoman size='30px' />
      </Target>
      <Target title='Hombres' value={Men.value} porcentage='1.10%' text={typeof Worker.time === 'object' && moment(Men.time.toDate().toISOString()).calendar()} typetext='text-warning'>
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
