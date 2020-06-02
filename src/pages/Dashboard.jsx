import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Toolbox from '../components/Toolbox/Toolbox';
import { Container } from './style';
import { Context } from '../containers/Context';
import WorkSpaceContainer from '../containers/WorkSpaceContainer';

const Dashboard = () => {
  const { isAuth } = useContext(Context);
  return (
    true ? (
      <Container>
        <Toolbox />
        <WorkSpaceContainer email={isAuth.email} />
      </Container>
    ) : <Redirect to='/login' />
  );
};

export default Dashboard;
