import React from 'react';
import { Redirect } from 'react-router-dom';
import Toolbox from '../components/Toolbox/Toolbox';
import { Container } from './style';
import WorkspaceContainer from '../containers/WorkspaceContainer';

const Dashboard = () => {
  return (
    true ? (
      <Container>
        <Toolbox />
        <WorkspaceContainer />
      </Container>
    ) : <Redirect to='/login' />
  );
};

export default Dashboard;
