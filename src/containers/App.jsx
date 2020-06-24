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
import LayoutDashboard from '../components/LayoutDashboard';
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
  <Route path='/register' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route path='/login' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route path='/' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route path='/dashboard' exact={true} component={Dashboard} />,
  <Route path='/dashboardsedes' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route path='/generateqr' exact={true} component={GenerateQR} />,
  <Route path='/sedes' exact={true} component={Sedes} />,
];
const LoggedInRoutesWithOutbusiness = [
  <Route path='/dashboardsedes' exact={true} component={SedesPage} />,
  <Route path='/' exact={true} component={() => <Redirect to='/dashboardsedes' />} />,
  <Route path='/login' exact={true} component={() => <Redirect to='/dashboardsedes' />} />,
  <Route path='/register' exact={true} component={() => <Redirect to='/dashboardsedes' />} />,
  <Route path='/generateqr' exact={true} component={() => <Redirect to='/dashboardsedes' />} />,
  <Route path='/dashboard' exact={true} component={() => <Redirect to='/dashboardsedes' />} />,
  <Route path='/sedes' exact={true} component={() => <Redirect to='/dashboardsedes' />} />,
];
const LoggedOut = [
  <Route path='/register' exact={true} component={Register} />,
  <Route path='/login' exact={true} component={Login} />,
  <Route path='/' exact={true} component={() => <Redirect to='/login' />} />,
  <Route path='/dashboard' exact={true} component={() => <Redirect to='/login' />} />,
  <Route path='/dashboardsedes' exact={true} component={Login} />,
  <Route path='/generateqr' exact={true} component={Login} />,
  <Route path='/sedes' exact={true} component={Login} />,
  <Route path='*' exact={true} component={() => <Redirect to='/login' />} />,
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
                  isAuth.loggedIn && isAuth.businness === undefined && LoggedInRoutesWithOutbusiness,
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
