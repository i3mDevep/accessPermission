import React from 'react';
import { Redirect } from 'react-router-dom';
import Toolbox from '../components/Toolbox/Toolbox';
import { Container } from './style';
import WorkSpace from '../components/Workspace/WorkSpace';

const Dashboard = () => {
  return (
    true ? (
      <Container>
        <Toolbox />
        <WorkSpace />
      </Container>
    ) : <Redirect to='/login' />
  );
};

export default Dashboard;
