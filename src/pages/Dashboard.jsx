import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Toolbox from '../components/Toolbox/Toolbox';
import { Container } from './style';
import { Context } from '../containers/Context';
import Workspace from '../components/Workspace/WorkSpace';

const Dashboard = () => {
  const { isAuth, logout } = useContext(Context);
  return (
    true ? (
      <Container>
        <Toolbox />
        <Workspace />
      </Container>
    ) : <Redirect to='/login' />
  );
};

export default Dashboard;
