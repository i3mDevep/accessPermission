import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { Row, CardDeck } from 'react-bootstrap';
import Target from './Target';

const CardInfoUsers = ({ inforcardsUser }) => {
  if (!inforcardsUser) {
    return (
      <Row>
        <Target />
        <Target />
        <Target />
      </Row>
    );
  }
  const { Users, Men, Women } = inforcardsUser;
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

const CardClientForDay = ({ inforcardsClientForDay }) => {
  if (!inforcardsClientForDay) {
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
  if (inforcardsClientForDay.length === 0) {
    return '¡No hay registros el dia de hoy!';
  }
  const { Women, Men, sales_women, sales_men, date } = inforcardsClientForDay[0];
  return (

    <CardDeck style={{ minWidth: '200px' }}>
      <Target title='Cantidad Clientes' value={Men + Women} text={typeof date === 'object' && moment(date.toDate().toISOString()).calendar()} typetext='text-warning'>
        <FiUsers size='30px' />
      </Target>
      <Target title='Cantidad Mujeres' value={Women} text={typeof date === 'object' && moment(date.toDate().toISOString()).calendar()}>
        <AiOutlineWoman size='30px' />
      </Target>
      <Target title='Cantidad Hombres' value={Men} text={typeof date === 'object' && moment(date.toDate().toISOString()).calendar()} typetext='text-danger'>
        <AiOutlineMan size='30px' />
      </Target>
      <Target title='Total Ventas' value={sales_women + sales_men} text={typeof date === 'object' && moment(date.toDate().toISOString()).calendar()} typetext='text-warning'>
        <FiUsers size='30px' />
      </Target>
      <Target title='Ventas Mujeres' value={sales_women} text={typeof date === 'object' && moment(date.toDate().toISOString()).calendar()}>
        <AiOutlineWoman size='30px' />
      </Target>
      <Target title='Ventas Hombres' value={sales_men} text={typeof date === 'object' && moment(date.toDate().toISOString()).calendar()} typetext='text-danger'>
        <AiOutlineMan size='30px' />
      </Target>
    </CardDeck>

  );
};
const mapToProps = (state) => {
  console.log(state);
  return {
    inforcardsUser: state.firestore.data.totals,
    inforcardsWorker: state.firestore.data.totalsWorker,
    inforcardsClientForDay: state.firestore.ordered.totalForDay,
    isAuth: state.auth.isAuth,
  };
};

export default {
  CardInfoUsers: connect(mapToProps, null)(CardInfoUsers),
  CardInfoWorker: connect(mapToProps, null)(CardInfoWorker),
  CardClientForDay: connect(mapToProps, null)(CardClientForDay),
};
