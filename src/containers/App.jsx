import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import GlobalStyle from '../styles/GlobalStyle';
import Dashboard from '../pages/company/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ScreenLoading from '../components/ScreenLoading';
import GenerateQR from '../pages/company/GenerateQR';
import Sedes from '../pages/company/Sedes';
import SedesPage from '../pages/subcompany/SedesPage';
import WorkerPage from '../pages/company/WorkerPage';
import LayoutDashboard from '../components/LayoutDashboard';
import AuthPage from '../pages/subcompany/AuthPage';
import ApointIndex from '../components/LayoutPointAttention/ApointIndex'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const onAuthStateChange = (callback) => {
  return firebase.auth().onAuthStateChanged(async (user) => {
    try {
      const idTokenResult = await user.getIdTokenResult();
      callback({ loggedIn: true, displayName: user.displayName, uid: user.uid, update: false, businness: idTokenResult.claims.business });
    } catch (error) {
      callback({ loggedIn: false, update: false, uid: '' });
    }
  });
};

const LoggedInRoutesWithbusiness = [
  <Route key='register' path='/register' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route key='login' path='/login' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route key='/' path='/' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route key='dashboard' path='/dashboard' exact={true} component={Dashboard} />,
  <Route key='dashboardsedes' path='/dashboardsedes' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route key='generateqr' path='/generateqr' exact={true} component={GenerateQR} />,
  <Route key='worker' path='/worker' exact={true} component={WorkerPage} />,
  <Route key='sedes' path='/sedes' exact={true} component={Sedes} />,
];

const LoggedInRoutesWithOutbusiness = [
  <Route key='home' path='/home' exact={true} component={SedesPage} />,
  <Route key='control' path='/control' exact={true} component={AuthPage} />,
  <Route key='login' path='/login' exact={true} component={() => <Redirect to='/home' />} />,
  <Route key='register' path='/register' exact={true} component={() => <Redirect to='/home' />} />,
  <Route key='generateqr' path='/generateqr' exact={true} component={() => <Redirect to='/home' />} />,
  <Route key='dashboard' path='/dashboard' exact={true} component={() => <Redirect to='/home' />} />,
  <Route key='sedes' path='/sedes' exact={true} component={() => <Redirect to='/home' />} />,
];

const LoggedOut = [
  <Route key='register' path='/register' exact={true} component={Register} />,
  <Route key='login' path='/login' exact={true} component={Login} />,
  <Route key='/' path='/' exact={true} component={() => <Redirect to='/login' />} />,
  <Route key='dashboard' path='/dashboard' exact={true} component={() => <Redirect to='/login' />} />,
  <Route key='dashboardsedes' path='/dashboardsedes' exact={true} component={() => <Redirect to='/login' />} />,
  <Route key='generateqr' path='/generateqr' exact={true} component={() => <Redirect to='/login' />} />,
  <Route key='worker' path='/worker' exact={true} component={() => <Redirect to='/login' />} />,
  <Route key='sedes' path='/sedes' exact={true} component={() => <Redirect to='/login' />} />,
  <Route key='sedes2' path='*' exact={true} component={() => <Redirect to='/c' />} />,
];

const App = ({ signIn, isAuth }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChange(signIn);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <GlobalStyle />
      {
        isAuth.update ?
          <ScreenLoading /> : (
            <BrowserRouter>
              <Switch>
                {[
                  isAuth.loggedIn && isAuth.businness === true && <LayoutDashboard>{LoggedInRoutesWithbusiness}</LayoutDashboard>,
                  isAuth.loggedIn && isAuth.businness === undefined && <ApointIndex> { LoggedInRoutesWithOutbusiness }</ApointIndex>,
                  !isAuth.loggedIn && LoggedOut,
                ]}
              </Switch>
            </BrowserRouter>
          )
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (info) => dispatch(signIn(info)),
  };
};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateProps, mapDispatchToProps)(App);
