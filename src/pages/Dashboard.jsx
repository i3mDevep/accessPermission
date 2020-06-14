import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from './style';
import WorkspaceContainer from '../containers/WorkspaceContainer';

const Dashboard = () => {
  return (
    true ? (
      <Container>
        <WorkspaceContainer />
      </Container>
    ) : <Redirect to='/login' />
  );
};

export default Dashboard;
